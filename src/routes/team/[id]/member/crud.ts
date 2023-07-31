import { prismaClient } from '$lib/server/prisma';

export const getMembers = async (filters = {}) => await prismaClient.teamMember.findMany(filters);

export const createMember = async ({ data }: { data: unknown }) =>
	await prismaClient.member.create({
		data
	});

export const deleteMember = async ({ id, user }: { id: unknown; user: any }) =>
	await prismaClient.member.delete({
		where: {
			id: Number(id),
			userId: user.id
		}
	});
