import { prismaClient } from '$lib/server/prisma';

export const getTasks = async (filters = {}) => await prismaClient.task.findMany(filters);

export const createTask = async ({ data }: { data: unknown }) =>
	await prismaClient.task.create({
		data
	});

export const deleteTask = async ({ id, user }: { id: unknown; user: any }) =>
	await prismaClient.task.delete({
		where: {
			id: Number(id),
			userId: user.id
		}
	});
