import prisma from '$lib/server/database';
import type { User, Profile, Session } from '@prisma/client';

export async function setSession(user: User): Promise<void> {
	await prisma.deleteSessions(user);
	const sessionToken = await prisma.createSession(user);
	// Cookie.set(sessionToken);
}

export async function getSessionUserProfile(sessionToken: string): Promise<{
	session: Session | null;
	user: User | null;
	profile: Profile | null;
}> {
	if (!sessionToken) return { session: null, user: null, profile: null };
	const session = await prisma.getSession(sessionToken);
	if (!session) return { session: null, user: null, profile: null };
	const user = await prisma.user.findUnique({
		where: { id: session.userId }
	});
	if (!user) throw new Error('Session not linked to user');
	const profile = await prisma.profile.findUnique({
		where: { userId: user.id }
	});
	return { session, user, profile };
}
