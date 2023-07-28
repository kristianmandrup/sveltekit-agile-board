import type { Actions, PageServerLoad } from './$types';
import { prismaClient } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		tasks: await prismaClient.task.findMany()
	};
};

export const actions: Actions = {
	createTask: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prismaClient.task.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the task.' });
		}

		return {
			status: 201
		};
	},
	deleteTask: async ({ url, params }: any) => {
		const id = params.id || url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prismaClient.task.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Something went wrong deleting your task'
			});
		}

		return {
			status: 200
		};
	}
};
