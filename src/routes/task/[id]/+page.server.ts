import type { Actions } from './$types';
import { prismaClient } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const getTask = async ({ id }: any) =>
	await prismaClient.task.findUnique({
		where: {
			id: Number(id)
		}
	});

const updateTask = async ({ id, data }: any) =>
	await prismaClient.task.update({
		where: {
			id: Number(id)
		},
		data
	});

const schema = z.object({
	title: z.string(),
	description: z.string()
});

export const load = async ({ params }) => {
	const id = params.id;
	const task = await getTask({ id });

	if (!task) throw fail(404, { message: 'Not found' });

	const form = await superValidate(task, schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request, params }: any) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};
		const id = Number(params.id);
		try {
			const data = {
				title,
				content
			};
			const task = await updateTask({ id, data });
			const form = await superValidate(task, schema);
			// status: ok
			return {
				form
			};
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not upsert task' });
		}
	}
};
