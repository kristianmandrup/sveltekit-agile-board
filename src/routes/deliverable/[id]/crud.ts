import { prismaClient } from '$lib/server/prisma';

export const updateDeliverable = async ({ id, user, data }: any) => {
	await prismaClient.deliverable.update({
		where: {
			id: Number(id),
			userId: Number(user.id)
		},
		data
	});
};

export const getDeliverable = async ({ id, user }: any) =>
	await prismaClient.deliverable.findUnique({
		where: {
			id: id,
			userId: user.id
		}
	});
