import prisma from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user!;

	const credentials = await prisma.account.findUnique({
		where: { userId: user.id, provider: 'credentials' }
	});

	const google = await prisma.account.findUnique({
		where: { userId: user.id, provider: 'google' }
	});

	return { credentials, google };
};
