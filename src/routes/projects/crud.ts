import { prismaClient } from '$lib/server/prisma';

export const getProjects = async (filters = {}) => await prismaClient.project.findMany(filters);

export const createProject = async ({ data }: { data: unknown }) =>
	await prismaClient.project.create({
		data
	});

export const deleteProject = async ({ id, user }: { id: unknown; user: any }) =>
	await prismaClient.project.delete({
		where: {
			id: Number(id),
			userId: user.id
		}
	});
