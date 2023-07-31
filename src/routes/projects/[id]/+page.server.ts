import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { getProject, updateProject } from './crud';
import { schema } from '../schema';

export const load = async ({ locals, params }: any) => {
	const id = params.id;
	const user = locals.user;
	const project = await getProject({ id, user });

	if (!project) throw error(404, 'Not found');

	const form = await superValidate(project, schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request, locals, params }) => {
		const id = params.id;
		const user = locals.user;
		const data = Object.fromEntries(await request.formData()) as Record<string, string>;
		try {
			await updateProject({ user, id, data });
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not upsert the project.' });
		}
		return {
			status: 201
		};
	}
};
