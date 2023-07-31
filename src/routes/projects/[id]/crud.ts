import { prismaClient } from '$lib/server/prisma';

export const updateProject = async ({ id, user, data }: any) => {
	await prismaClient.project.update({
		where: {
			id: Number(id),
			userId: Number(user.id)
		},
		data
	});
};

export const getProject = async ({ id, user }: any) =>
	await prismaClient.project.findUnique({
		where: {
			id: id,
			userId: user.id
		}
	});
