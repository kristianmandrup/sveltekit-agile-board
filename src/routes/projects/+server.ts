import { json } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';
import { createFilters } from '$lib/search/filters';
import { fail } from '@sveltejs/kit';
import { createProject, getProjects } from './crud.js';

// see https://codevoweb.com/how-to-build-a-simple-api-in-sveltekit/
export async function GET({ url }) {
	// TODO verify via lucia auth
	const filters = createFilters(url.searchParams);
	const projects = await getProjects({
		...filters
	});
	return json(projects);
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

	// Save project to DB
	try {
		await createProject({
			data
		});
		// return success
		return json({ success: true });
	} catch (err) {
		throw fail(400, { message: 'Unable to save project' });
	}
}
