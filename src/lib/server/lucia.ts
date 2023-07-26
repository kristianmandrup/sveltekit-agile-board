import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { prismaClient } from '$lib/server/prisma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUserAttributes = (data: any) => ({
	userId: data.id,
	username: data.username,
	name: data.name,
	role: data.role,
	githubUsername: data.github_username
});

export const auth = lucia({
	// See https://lucia-auth.com/database-adapters/prisma
	adapter: prisma(prismaClient),
	env: dev ? 'DEV' : 'PROD',
	csrfProtection: true,
	middleware: sveltekit(),
	getUserAttributes
});

export type Auth = typeof auth;
