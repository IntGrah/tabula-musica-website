import { reset } from '$lib/server/database';
import { redirect, type Actions } from '@sveltejs/kit';
import prisma from '$lib/server/database';

export async function load() {
	const users = await prisma.user.findMany();
	return { users };
}

export const actions: Actions = {
	async reset({ cookies, url }) {
		cookies.delete('_TMST', { path: '/' });
		await reset();
		redirect(303, "/");
	}
};
