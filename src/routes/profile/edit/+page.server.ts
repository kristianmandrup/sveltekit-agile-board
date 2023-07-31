import { error, fail } from '@sveltejs/kit';
import { prismaClient } from '$lib/server/prisma';
import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const schema = z.object({
	name: z.string(),
	sex: z.string(),
	role: z.string(),
	description: z.string()
});

const upsertProfile = async ({ profile, user, description, role, sex }: any) => {
	await prismaClient.profile.upsert({
		data: {
			id: profile.id,
			userId: Number(user.id),
			description,
			role,
			sex
		}
	});
};

const getProfile = async ({ user }: any) =>
	await prismaClient.profile.findUnique({
		where: {
			userId: user.id
		}
	});

export const load = async ({ locals }: any) => {
	const user = locals.user;
	const profile = await getProfile({ user });

	if (!profile) throw error(404, 'Not found');

	const form = await superValidate(profile, schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const user = locals.user;
		const data = Object.fromEntries(await request.formData()) as Record<string, string>;
		try {
			const profile = await getProfile({ user });
			await upsertProfile({ profile, user, ...data });
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the team.' });
		}
		return {
			status: 201
		};
	}
};
