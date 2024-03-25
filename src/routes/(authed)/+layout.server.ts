import { getSessionUserProfile } from '$lib/server/session';
import { redirect, type Cookies } from '@sveltejs/kit';

const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
const _TMST = '_tmst';

// export function get() {
// 	const cookie = cookies().get(_TMST);
// 	if (!cookie) return null;
// 	return cookie.value;
// }

// export function set(sessionToken: string) {
// 	cookies().set(_TMST, sessionToken, {
// 		maxAge: THIRTY_DAYS_IN_MS,
// 		httpOnly: true,
// 		secure: NODE_ENV === 'production'
// 	});
// }

// export function del() {
// 	cookies().delete(_TMST);
// }

export async function load({ cookies, url }: { cookies: Cookies; url: URL }) {
	const sessionToken = cookies.get(_TMST);

	if (!sessionToken) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}

	const { session, user, profile } = await getSessionUserProfile(sessionToken);

	return { session, user, profile };
}
