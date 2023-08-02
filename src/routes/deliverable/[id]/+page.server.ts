import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { getDeliverable, updateDeliverable } from './crud';
import { schema } from '../schema';

export const load = async ({ locals, params }: any) => {
	const id = params.id;
	const user = locals.user;
	const deliverable = await getDeliverable({ id, user });

	if (!deliverable) throw error(404, 'Not found');

	const form = await superValidate(deliverable, schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request, locals, params }) => {
		const id = params.id;
		const user = locals.user;
		const data = Object.fromEntries(await request.formData()) as Record<string, string>;
		try {
			await updateDeliverable({ user, id, data });
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not upsert the deliverable.' });
		}
		return {
			status: 201
		};
	}
};
