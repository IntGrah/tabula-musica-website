import prisma from '$lib/server/database';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
const { compare, hash } = bcrypt;

export const actions: Actions = {
	async login({ cookies, request, url }) {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const user = await prisma.getUser(email);
		if (!user) {
			return fail(400, { email, missing: true });
		}
		const credentialsAccount = await prisma.getCredentials(user);
		if (!credentialsAccount) {
			console.log('User did not sign up with credentials');
			return null;
		}
		const valid = await compare(password, credentialsAccount.passwordHash);
		if (!valid) {
			return fail(400, { email, incorrect: true });
		}
		await prisma.deleteSessions(user);
		const sessionToken = await prisma.createSession(user);
		cookies.set('_TMST', sessionToken, { path: '/' });
		const redirectPath = url.searchParams.get('redirect');
		if (redirectPath) {
			redirect(303, redirectPath);
		}
		return { success: true };
	},

	async signup({ cookies, request, url }) {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirmPassword = formData.get('confirmPassword') as string;
		const name = formData.get('name') as string;
		const mailingList = formData.get('mailingList') === 'on';
		if (password !== confirmPassword) {
			return fail(400, { password, confirmPassword, mismatch: true });
		}
		const existingUser = await prisma.getUser(email);
		if (existingUser) {
			return fail(400, { email, alreadyExists: true });
		}
		const user = await prisma.user.create({ data: { email } });
		await prisma.profile.create({
			data: { userId: user.id, name, mailingList }
		});
		await prisma.credentialsAccount.create({
			data: { userId: user.id, passwordHash: await hash(password, 10) }
		});
		await prisma.deleteSessions(user);
		const sessionToken = await prisma.createSession(user);
		cookies.set('_TMST', sessionToken, { path: '/' });
		const redirectPath = url.searchParams.get('redirect');
		if (redirectPath) {
			redirect(303, redirectPath);
		}
		return { success: true };
	},

	async handleSearch({ request }) {
		const formData = await request.formData();
		let query = formData.get('search') as string;
		query = query.trim();
		if (query) redirect(303, `/search?q=${query}`);
	}
};

export const prerender = false;
