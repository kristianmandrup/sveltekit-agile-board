import type { LayoutServerLoad } from './$types';
import { auth } from '$lib/server/lucia';

export const load: LayoutServerLoad = async ({ locals }) => {
	const { auth, sessionId } = locals;
	if (sessionId) {
		const session = await auth.getSession(sessionId);
		const user = session?.user || {};
		return { user };
	}
	// const session = await auth.validate();
	// console.log({ session });
	// const user = session?.user || {};
	// return { user };
	return {};
};
