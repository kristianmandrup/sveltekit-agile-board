import { fail } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';

const getProfile = async ({ user }: any) =>
	await prismaClient.profile.findUnique({
		where: {
			userId: user.id
		}
	});

export const load = async ({ locals }) => {
	const user = locals.user;
	try {
		const profile = await getProfile({ user });
		return profile;
	} catch (err) {
		console.error(err);
		return fail(500, { message: 'Could not load the profile' });
	}
};
