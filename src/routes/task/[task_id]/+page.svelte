<script lang="ts">
	// import type { PageData } from './$types';

	export let data: any; //: PageData;
	$: ({ task } = data);
</script>

<form action="?/updateTask" method="POST">
	<h3>Editing: {task.title}</h3>
	<label for="title"> Title </label>
	<input type="text" id="title" name="title" value={task.title} />
	<label for="title"> Title </label>
	<textarea id="content" name="content" rows={5} value={task.content} />
	<button type="submit">Update Task</button>
</form>
