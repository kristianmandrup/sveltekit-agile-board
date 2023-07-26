import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';

// using an enum for user roles to avoid typos
// if you're not using TypeScript use an object
enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const load: PageServerLoad = async ({ locals }) => {
	const { auth } = locals;
	const session = await auth.validate();
	if (session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		// TODO: validate form data with Zod
		const { name, username, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;
		try {
			const role = 'user';
			const user = await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					name,
					username,
					role,
					github_username: ''
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {
					role
				}
			});
			locals.auth.setSession(session);
		} catch (err) {
			console.error(err);
			return fail(400, { message: 'Could not register user' });
		}
		throw redirect(302, '/login');
	}
};
