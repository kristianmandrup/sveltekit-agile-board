import type { Actions, PageServerLoad } from './$types';
import { prismaClient } from '$lib/server/prisma';
import { error, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const getTeam = async () => {
		const team = await prismaClient.team.findUnique({
			where: {
				id: Number(params.team_id)
			}
		});
		if (!team) {
			throw error(404, 'Team not found');
		}
		return team;
	};

	return {
		team: getTeam()
	};
};

export const actions: Actions = {
	updateTeam: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prismaClient.team.update({
				where: {
					id: Number(params.team_id)
				},
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update team' });
		}

		return {
			status: 200
		};
	}
};
