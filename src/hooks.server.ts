import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import { sequence } from '@sveltejs/kit/hooks';
import { LuciaError } from 'lucia';

const isAdmin = (user: { role: string }) => {
	if (!user) return false;
	return user.role === 'admin';
};

const protectRoutes = ({ path, user, admin }: any) => {
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
};

const authorizeUser = async ({ session, event, resolve }: any) => {
	console.log('authorizeUser', session);
	const path: string = event.url.pathname;
	const user = session?.user;
	if (!session) {
		protectRoutes({ path, user });
	}
	const admin = isAdmin(user);
	protectRoutes({ path, user, admin });
	const response = await resolve(event);
	return response;
};

export const customHandle: Handle = async ({ event, resolve }) => {
	try {
		const authReq = event.locals.auth;
		const session = await authReq.validate();
		if (session && session.fresh) {
			// expiration extended
			const sessionCookie = auth.createSessionCookie(session);
			setSessionCookie(sessionCookie);
		}
		return await authorizeUser({ session, event, resolve });
	} catch (e) {
		if (e instanceof LuciaError && e.message === `AUTH_INVALID_SESSION_ID`) {
			// invalid session
			deleteSessionCookie();
		}
		// unexpected database errors
		console.error('unexpected database or lucia error', e);
		throw redirect(303, '/');
	}
};

export const authHandle: Handle = async ({ event, resolve }) => {
	const authRequest = auth.handleRequest(event);
	const session = await authRequest.validate();
	authRequest.setSession(session);
	console.log('authHandle', { authRequest, session });
	event.locals.auth = authRequest;
	event.locals.sessionId = session?.sessionId;
	return await resolve(event);
};

export const handle: Handle = sequence(authHandle, customHandle);
