import { prismaClient } from '$lib/server/prisma';

export const getDeliverables = async (filters = {}) =>
	await prismaClient.deliverable.findMany(filters);

export const createDeliverable = async ({ data }: { data: unknown }) =>
	await prismaClient.deliverable.create({
		data
	});

export const deleteDeliverable = async ({ id, user }: { id: unknown; user: any }) =>
	await prismaClient.deliverable.delete({
		where: {
			id: Number(id),
			userId: user.id
		}
	});
