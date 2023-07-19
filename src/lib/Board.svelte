<script lang="ts">
	import Task from './components/Task.svelte';
	import type { ITask } from './types/tasks';

	let tasks: ITask[] = [
		{
			title: 'Add new feature',
			description: 'This is a new feature that we need to add to the product.',
			dateLastChanged: new Date(),
			type: 'Todo'
		},
		{
			title: 'Fix bug in search bar',
			description:
				'There is a bug in the search bar that is preventing users from finding what they are looking for.',
			dateLastChanged: new Date(),
			type: 'Done'
		},
		{
			title: 'Test new feature',
			description: 'We need to test the new feature to make sure that it is working correctly.',
			dateLastChanged: new Date(),
			type: 'In Progress'
		}
	];

	const columns = ['Todo', 'In Progress', 'Done'];

	const taskMap = columns.reduce((acc, col: string) => {
		acc[col] = [];
		return acc;
	}, {} as Record<string, ITask[]>);

	console.log({ taskMap });

	// turns the list into a map
	// test: [{task 1 }, { task 2}]
	const tasksByColumn = tasks.reduce((acc, task: ITask) => {
		acc[task.type].push(task);
		return acc;
	}, taskMap);

	console.log({ tasksByColumn });
</script>

<div class="board">
	<div class="tasks">
		{#each columns as column}
			{column}
			<div class="column">
				{#each tasksByColumn[column] as task}
					{JSON.stringify(task, null, 2)}
					<!-- <Task {task} /> -->
				{/each}
			</div>
		{/each}
	</div>
</div>
