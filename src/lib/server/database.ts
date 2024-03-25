import { type CredentialsAccount, type Session, type User, PrismaClient } from '@prisma/client';
import { createHash, randomUUID } from 'crypto';
import bcryptjs from 'bcryptjs';
import { NODE_ENV } from '$env/static/private';

function sha256(sessionToken: string): string {
	return createHash('sha256').update(sessionToken).digest('hex');
}

class PrismaDB extends PrismaClient {
	/** @warning no production */
	async reset(): Promise<void> {
		await this.user.deleteMany();
		await this.profile.deleteMany();
		await this.credentialsAccount.deleteMany();
		await this.googleAccount.deleteMany();
		await this.session.deleteMany();

		await this.user.create({
			data: { email: 'deleteduser@example.com', role: 4 }
		});
		const { id } = await this.user.create({
			data: { email: 'admin@example.com', role: 5 }
		});
		await this.credentialsAccount.create({
			data: {
				userId: id,
				passwordHash: await bcryptjs.hash('password', 10)
			}
		});
		await this.profile.create({
			data: { userId: id, name: 'Admin', bio: 'I am an admin.' }
		});
		console.log('--- Database reset ---');
	}

	async getUser(email: string): Promise<User | null> {
		return this.user.findUnique({ where: { email } });
	}

	async getSession(sessionToken: string): Promise<Session | null> {
		const tokenHash = sha256(sessionToken);
		return this.session.findUnique({
			where: { tokenHash, expires: { gt: new Date() } }
		});
	}

	async getCredentials(user: User): Promise<CredentialsAccount | null> {
		return this.credentialsAccount.findUnique({
			where: { userId: user.id }
		});
	}

	async createSession(user: User): Promise<string> {
		const sessionToken = randomUUID();
		await this.session.create({
			data: {
				userId: user.id,
				tokenHash: sha256(sessionToken),
				expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
			}
		});
		return sessionToken;
	}

	async deleteSessions(user: User): Promise<void> {
		await this.session.deleteMany({
			where: { userId: user.id }
		});
	}

	async deleteExpiredSessions(user: User): Promise<void> {
		await this.session.deleteMany({
			where: { userId: user.id, expires: { lte: new Date() } }
		});
	}
}

declare global {
	var prismaDB: PrismaDB | undefined;
}

const prisma = globalThis.prismaDB ?? new PrismaDB();

if (NODE_ENV !== 'production') globalThis.prismaDB = prisma;

export default prisma;
