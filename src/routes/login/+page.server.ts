import prisma, {
	createSession,
	deleteAllSessions,
	getCredentials,
	getUserFromEmail
} from '$lib/server/database';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

export const actions: Actions = {
	login: async ({ cookies, request, url }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		if (!email || !password) return fail(400, { type: 'login', incomplete: true });
		const user = await getUserFromEmail(email);
		if (!user) return fail(400, { type: 'login', invalid: true });
		const account = await getCredentials(user.id);
		if (!account) return fail(403, { type: 'login', oauth: true });
		const valid = await bcrypt.compare(password, account.passwordHash!);
		if (!valid) return fail(400, { type: 'login', invalid: true });
		await deleteAllSessions(user.id);
		const sessionId = await createSession(user.id);
		cookies.set('_TMST', sessionId, { path: '/' });
		const redirectPath = url.searchParams.get('redirect');
		if (redirectPath) redirect(303, redirectPath);
		else redirect(303, url.pathname);
	},

	signup: async ({ cookies, request, url }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirmPassword = formData.get('confirmPassword') as string;
		const name = formData.get('name') as string;
		const mailingList = formData.get('mailingList') === 'on';
		if (password !== confirmPassword) return fail(400, { type: 'signup', mismatch: true });
		const existingUser = await getUserFromEmail(email);
		if (existingUser) return fail(400, { type: 'signup', alreadyExists: true });
		const user = await prisma.user.create({
			data: {
				email,
				name,
				role: 'unverified',
				mailingList
			}
		});
		await prisma.account.create({
			data: {
				userId: user.id,
				provider: 'credentials',
				passwordHash: await bcrypt.hash(password, 10),
				isPrimary: true
			}
		});
		await deleteAllSessions(user.id);
		const sessionId = await createSession(user.id);
		cookies.set('_TMST', sessionId, { path: '/' });
		const redirectPath = url.searchParams.get('redirect');
		if (redirectPath) redirect(303, redirectPath);
		else redirect(303, url.pathname);
	}
};

export const prerender = false;
