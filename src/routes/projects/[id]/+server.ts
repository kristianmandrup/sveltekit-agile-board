import { json } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
// /api/newsletter GET

// see https://codevoweb.com/how-to-build-a-simple-api-in-sveltekit/
export async function GET({ params, url }: any) {
	// verify token
	const id = params.id || url.searchParams.get('id');
	if (id) {
		const project = await prismaClient.project.findUnique({
			where: {
				id
			}
		});
		return json(project);
	}
}

// /api/newsletter POST

export async function POST({ request }) {
	const data = await request.formData();
	const name = data.get('name') as string;
	const description = data.get('description') as string;

	// Save project to DB
	console.log({ name });
	try {
		await prismaClient.project.create({
			data: {
				name,
				description
				// slug: slugify(name)
			}
		});

		// return success
		return json({ success: true });
	} catch (err) {
		throw error(400, { message: 'Unable to save project' });
	}
}
