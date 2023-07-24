import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Team = {
	name: string;
	description: string;
};

function slugify(text: string) {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}

const teams: Team[] = [
	{
		name: 'product',
		description: 'Product owners'
	},
	{
		name: 'frontend',
		description: 'Implement frontend code'
	},
	{
		name: 'backend',
		description: 'Implement backend code'
	},
	{
		name: 'testers',
		description: 'E2E testers'
	},
	{
		name: 'devops',
		description: 'Operations for developers'
	}
];

async function main() {
	for (const team of teams) {
		await db.team.create({
			data: {
				name: team,
				description: 'lorem ipsum',
				slug: slugify(team)
			}
		});
	}
}

main();
