<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// Client API:
	const { form } = superForm(data.form);
</script>

<form method="POST">
	<div>
		<label for="name">Title</label>
		<input type="text" id="name" name="name" bind:value={$form.name} />
	</div>
	<div>
		<label for="description">Description</label>
		<input id="description" name="description" type="text" bind:value={$form.description} />
	</div>
	<button type="submit">Update</button>
</form>
