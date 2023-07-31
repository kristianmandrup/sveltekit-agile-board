import { z } from 'zod';
import { fail } from '@sveltejs/kit';

export const createFilters = (params: URLSearchParams) => {
	// creating a schema for strings
	const schemas = {
		orderBy: z.enum(['asc', 'desc'])
	};

	// filters
	const orderBy = params.get('orderBy');
	try {
		orderBy && schemas.orderBy.parse(orderBy);
	} catch (err) {
		throw fail(400, { message: `Invalid orderby, was ${orderBy}` });
	}

	// optionally sort by project name
	const filters =
		(orderBy && {
			orderBy: [
				{
					name: orderBy
				}
			]
		}) ||
		{};
	return filters;
};
