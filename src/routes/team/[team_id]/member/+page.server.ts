import type { Actions } from './$types';
import { prismaClient } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	createTeamMember: async ({ request }) => {
		const { name, description } = Object.fromEntries(await request.formData()) as {
			name: string;
			description: string;
		};
		try {
			await prismaClient.teamMember.create({
				data: {
					name,
					description
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the team member.' });
		}
		return { status: 201 };
	}
};
