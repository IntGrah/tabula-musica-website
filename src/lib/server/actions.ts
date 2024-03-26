// import { signIn, signUp, type SignInCredentials, type SignUpCredentials } from '$lib/server/auth';
// import { redirect } from '@sveltejs/kit';

// export async function handleSignIn(formData: FormData) {
// 	const credentials: SignInCredentials = {
// 		email: formData.get('email') as string,
// 		password: formData.get('password') as string
// 	};
// 	const user = await signIn(credentials);
// 	if (user) throw redirect(303, '/profile');
// }

// export async function handleSignUp(formData: FormData) {
// 	const credentials: SignUpCredentials = {
// 		email: formData.get('email') as string,
// 		password: formData.get('password') as string,
// 		confirmPassword: formData.get('confirmPassword') as string,
// 		name: formData.get('name') as string,
// 		mailingList: formData.get('mailingList') === 'on'
// 	};
// 	const user = await signUp(credentials);
// 	if (user) throw redirect(303, '/profile');
// }

// export async function handleSearch(formData: FormData) {
// 	let query = formData.get('search') as string;
// 	query = query.trim();
// 	if (query) redirect(303, `/search?q=${query}`);
// }
