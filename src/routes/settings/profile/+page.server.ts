import prisma, { getSession, getUser } from '$lib/server/database';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	updatename: async ({ cookies, request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		console.log(name);
		if (!name) return fail(400, { incomplete: true });
		const sessionId = cookies.get('_TMST');
		if (!sessionId) return fail(401, { unauthorized: true });
		const session = await getSession(sessionId);
		if (!session) return fail(401, { unauthorized: true });
		await prisma.user.update({
			where: { id: session.userId },
			data: { name }
		});
		return { success: true };
	},

	updatebio: async ({ cookies, request }) => {
		const formData = await request.formData();
		const bio = formData.get('bio') as string;
		console.log(bio);
		if (!bio) return fail(400, { incomplete: true });
		const sessionId = cookies.get('_TMST');
		if (!sessionId) return fail(401, { unauthorized: true });
		const session = await getSession(sessionId);
		if (!session) return fail(401, { unauthorized: true });
		await prisma.user.update({
			where: { id: session.userId },
			data: { bio }
		});
		return { success: true };
	}
};
