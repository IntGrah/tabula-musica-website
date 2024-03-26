import { authenticate } from '$lib/server/auth';
import { error, redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { user } = (event.locals = await authenticate(event));

	if (event.url.pathname.startsWith('/profile')) {
		if (!user) {
			redirect(302, '/login/?redirect=/profile');
		}
	}

	if (event.url.pathname.startsWith('/admin')) {
		if (!user) {
			error(401, 'Unauthorized');
		}
		if (user.role !== 'admin') {
			error(403, 'Forbidden');
		}
	}

	return await resolve(event);
};
