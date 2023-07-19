<script lang="ts">
	import Task from './components/Task.svelte';

	let tasks: any[] = [
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
	const tasksByColumn = tasks.reduce((acc, task) => {
		acc[task.type] = acc[task.type] || [];
		acc[task.type].push(task);
		return acc;
	}, {});

	const columns = ['Todo', 'In Progress', 'Done'];
</script>

<div class="board">
	<div class="tasks">
		{#each columns as column}
			<div class="column">
				{#each tasksByColumn[column] as tasks}
					{#each tasks as task}
						<Task {task} />
					{/each}
				{/each}
			</div>
		{/each}
	</div>
</div>
