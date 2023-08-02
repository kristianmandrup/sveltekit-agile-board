import { prismaClient } from '$lib/server/prisma';

export const updateTask = async ({ id, user, data }: any) => {
	await prismaClient.task.update({
		where: {
			id: Number(id),
			userId: Number(user.id)
		},
		data
	});
};

export const getTask = async ({ id, user }: any) =>
	await prismaClient.task.findUnique({
		where: {
			id: id,
			userId: user.id
		}
	});
