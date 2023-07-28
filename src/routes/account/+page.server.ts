import { fail, redirect } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';

export const load = async ({ locals }: any) => {
	const user = locals.user;
	if (!user) {
		throw redirect(303, '/');
	}

	const profile = await prismaClient.profile.findUnique({
		userId: user.id
	});

	if (!profile) throw fail(404, { message: 'Not found' });

	// Always return { form } in load and form actions.
	return { session: user, profile };
};

export const actions = {
	update: async ({ request, locals }) => {
		const formData = await request.formData();
		const fullName = formData.get('fullName') as string;
		const username = formData.get('username') as string;
		const website = formData.get('website') as string;
		const avatarUrl = formData.get('avatarUrl') as string;

		const session = locals.user;

		const { error } = await prismaClient.profile.upsert({
			id: session?.user.id,
			full_name: fullName,
			username,
			website,
			avatar_url: avatarUrl,
			updated_at: new Date()
		});

		if (error) {
			return fail(500, {
				fullName,
				username,
				website,
				avatarUrl
			});
		}

		return {
			fullName,
			username,
			website,
			avatarUrl
		};
	},
	signout: async ({ locals }) => {
		const session = locals.user;
		if (session) {
			await prismaClient.auth.signOut();
			throw redirect(303, '/');
		}
	}
};
