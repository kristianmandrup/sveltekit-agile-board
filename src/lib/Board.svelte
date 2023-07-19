<script lang="ts">
	import Task from './components/Task.svelte';
	import type { ITask } from './types/tasks';

	let tasks: ITask[] = [
		{
			title: 'Add new feature',
			description: 'This is a new feature that we need to add to the product.',
			dateLastChanged: new Date(),
			type: 'frontend'
		},
		{
			title: 'Fix bug in search bar',
			description:
				'There is a bug in the search bar that is preventing users from finding what they are looking for.',
			dateLastChanged: new Date(),
			type: 'backend'
		},
		{
			title: 'Test new feature',
			description: 'We need to test the new feature to make sure that it is working correctly.',
			dateLastChanged: new Date(),
			type: 'test'
		}
	];

	// turns the list into a map
	// test: [{task 1 }, { task 2}]
	const tasksByColumn: Record<string, ITask[]> = tasks.reduce((acc, task: ITask) => {
		acc[task.type] = acc[task.type] || [];
		acc[task.type].push(task);
		return acc;
	}, {} as Record<string, ITask[]>);

	console.log({ tasksByColumn });

	const columns = ['Todo', 'In Progress', 'Done'];
</script>

<div class="board">
	<div class="tasks">
		{#each columns as column}
			<div class="column">
				{#each tasksByColumn[column] as task}
					<Task {task} />
				{/each}
			</div>
		{/each}
	</div>
</div>
