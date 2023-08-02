import { prismaClient } from '$lib/server/prisma';

export const getTeams = async (filters = {}) => await prismaClient.team.findMany(filters);

export const createTeam = async ({ data }: { data: unknown }) =>
	await prismaClient.team.create({
		data
	});

export const deleteTeam = async ({ id, user }: { id: unknown; user: any }) =>
	await prismaClient.team.delete({
		where: {
			id: Number(id),
			userId: user.id
		}
	});
