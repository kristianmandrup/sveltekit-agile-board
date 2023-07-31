import { prismaClient } from '$lib/server/prisma';

export const updateTeam = async ({ id, user, data }: any) => {
	await prismaClient.team.update({
		where: {
			id: Number(id),
			userId: Number(user.id)
		},
		data
	});
};

export const getTeam = async ({ id, user }: any) =>
	await prismaClient.team.findUnique({
		where: {
			id: id,
			userId: user.id
		}
	});
