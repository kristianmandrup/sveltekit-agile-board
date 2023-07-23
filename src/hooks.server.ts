import { authenticateUser } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

// import { handleHooks } from "@lucia-auth/sveltekit"
import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const customHandle: Handle = async ({ event, resolve }) => {
	event.locals.user = authenticateUser(event);
	if (event.url.pathname.startsWith('/protected')) {
		console.log('Access Denied');
		throw redirect(303, '/');
	}
	const response = await resolve(event);
	return response;
};

export const authHandle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};

export const handle: Handle = sequence(authHandle, customHandle);
