// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	let __prisma: PrismaClient;

	/// <reference types="lucia-auth" />
	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = {
			username: string;
			name: string;
			role: string;
			github_username: string;
		};
		type DatabaseSessionAttributes = {
			role: string;
		};
	}
}

export {};
