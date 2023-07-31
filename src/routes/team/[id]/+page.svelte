<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// Client API:
	const { form } = superForm(data.form);
</script>

<form method="POST">
	<input type="text" id="name" name="name" bind:value={$form.name} />
	<label for="description"> Description </label>
	<textarea id="description" name="description" rows={5} bind:value={$form.description} />
	<button type="submit">Update Team</button>
</form>
