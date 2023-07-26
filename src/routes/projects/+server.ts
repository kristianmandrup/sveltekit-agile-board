import { json } from '@sveltejs/kit';
import db from '$lib/database';
import { error } from '@sveltejs/kit';
// /api/newsletter GET

// see https://codevoweb.com/how-to-build-a-simple-api-in-sveltekit/
export async function GET({ params, headers, request, url }) {
	// verify token
	const id = params.id || url.searchParams.get('id');
	if (id) {
		const project = await db.project.findUnique({
			id
		});
		return json(project);
	}
	const projects = await db.project.findMany();
	return json(projects);
}

// /api/newsletter POST

export async function POST({ request }) {
	const data = request.formData();
	const name = data.get('name') as string;
	const description = data.get('description') as string;

	// Save project to DB
	console.log({ name });
	try {
		await db.project.create({
			data: {
				name,
				description,
				slug: slugify(name)
			}
		});

		// return success
		return json({ success: true });
	} catch (err) {
		throw error(400, { message: 'Unable to save project' });
	}
}
