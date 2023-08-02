import type { Actions } from './$types';
import { prismaClient } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	return {
		tasks: await prismaClient.task.findMany()
	};
};
const createTask = async ({ data }: any) =>
	await prismaClient.task.create({
		data
	});

export const actions: Actions = {
	createTask: async ({ request }) => {
		const data = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			const task = await createTask({ data });
			return {
				status: 201,
				id: task.id
			};
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the task.' });
		}
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
