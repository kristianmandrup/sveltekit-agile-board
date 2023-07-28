import { fail } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';

export const load = async ({ locals }) => {
	const user = locals.user;
	const profile: any = await prismaClient.profile.findUnique({
		userId: user.id
	});

	if (!profile) throw fail(404, { message: 'Not found' });

	// Always return { form } in load and form actions.
	return profile;
};
