import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { createTask, deleteTask, getTasks } from './crud';
import { superValidate } from 'sveltekit-superforms/server';
import { schema } from './schema';

export const load = async () => {
	const form = await superValidate(schema);
	return {
		form,
		tasks: await getTasks()
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form, valid: false });
		}

		const data = Object.fromEntries(await request.formData()) as {
			name: string;
			description: string;
		};
		try {
			const task = await createTask({ data });
			const form = await superValidate(task, schema);
			// status: ok
			return {
				form,
				valid: form.valid
			};
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create task' });
		}
	},
	deleteTask: async ({ url, locals }: any) => {
		const id = url.searchParams.get('id');
		const { user } = locals;
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}
		try {
			await deleteTask({ id, user });
			return {
				status: 200,
				id
			};
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Error deleting your task'
			});
		}
	}
};
