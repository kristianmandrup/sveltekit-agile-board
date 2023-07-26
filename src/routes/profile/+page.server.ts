import { fail } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';
import type { Actions } from './$types';

export const load = async ({ locals }) => {
	const user = locals.user;
	return {
		teams: await prismaClient.profile.findUnique({
			userId: user.id
		})
	};
};

export const actions: Actions = {
	createProfile: async ({ request, locals }) => {
		const user = locals.user;
		const { description, role, sex } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;
		try {
			await prismaClient.profile.create({
				data: {
					userId: Number(user.id),
					description,
					role,
					sex
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the team.' });
		}

		return {
			status: 201
		};
	}
};
