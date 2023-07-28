<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ tasks } = data);
</script>

<div class="grid">
	<div>
		<h2>Tasks:</h2>
		{#each tasks as task}
			<task>
				<header>{task.title}</header>
				<p>
					{task.content}
				</p>
				<form action="?/deleteTask&id={task.id}" method="POST">
					<button type="submit" class="outline secondary">Delete Task</button>
				</form>
				<a href="/{task.id}" role="button" class="outline constrast" style="width: 100%;"
					>Edit Task</a
				>
			</task>
		{/each}
	</div>
	<form action="?/createTask" method="POST">
		<h3>New Task</h3>
		<label for="title"> Title </label>
		<input type="text" id="title" name="title" />
		<label for="title"> Title </label>
		<textarea id="content" name="content" rows={5} />
		<button type="submit">Add Task</button>
	</form>
</div>
