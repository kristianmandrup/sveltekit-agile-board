import type { Actions } from './$types';
import { prismaClient } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	return {
		teams: await prismaClient.team.findMany()
	};
};

export const actions: Actions = {
	createTeam: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prismaClient.team.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the team.' });
		}

		return {
			status: 201
		};
	},
	deleteTeam: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prismaClient.team.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Something went wrong deleting your team'
			});
		}

		return {
			status: 200
		};
	}
};
