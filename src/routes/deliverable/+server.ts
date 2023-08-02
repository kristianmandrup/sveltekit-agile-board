import { json } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';
import { createFilters } from '$lib/search/filters';
import { fail } from '@sveltejs/kit';
import { createDeliverable, getDeliverables } from './crud.js';

// see https://codevoweb.com/how-to-build-a-simple-api-in-sveltekit/
export async function GET({ url }) {
	// TODO verify via lucia auth
	const filters = createFilters(url.searchParams);
	const deliverables = await getDeliverables({
		...filters
	});
	return json(deliverables);
}

// /api/newsletter POST

export async function POST({ request }) {
	const form = await request.formData();
	const name = form.get('name') as string;
	const description = form.get('description') as string;
	const data = {
		name,
		description
	};

	// Save deliverable to DB
	try {
		await createDeliverable({
			data
		});
		// return success
		return json({ success: true });
	} catch (err) {
		throw fail(400, { message: 'Unable to save deliverable' });
	}
}
