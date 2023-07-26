import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import { sequence } from '@sveltejs/kit/hooks';

const isAdmin = (user: { role: string }) => {
	if (!user) return false;
	return user.role === 'admin';
};

export const customHandle: Handle = async ({ event, resolve }) => {
	const { auth } = event.locals;
	const session = await auth.validateSession();
	const user = session.user;
	const admin = isAdmin(user);
	const path: string = event.url.pathname;
	if (path.startsWith('/protected')) {
		if (!user) {
			console.log('Access Denied');
			throw redirect(303, '/');
		}
		if (path.includes('/admin') && !admin) {
			console.log('Access Denied to non-admin user');
			throw redirect(303, '/');
		}
	}
	const response = await resolve(event);
	return response;
};

export const authHandle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};

export const handle: Handle = sequence(authHandle, customHandle);
