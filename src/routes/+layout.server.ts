import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ cookies }) => {
	const sessionid = cookies.get('sessionid');
	return {
		sessionid
	};
}) satisfies LayoutServerLoad;
