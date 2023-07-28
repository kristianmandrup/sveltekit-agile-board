<script lang="ts">
	import type { PageData } from '../$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	// Client API:
	const { form } = superForm(data.form);
</script>

<form method="POST">
	<div>
		<label for="name">Sex</label>
		<input type="text" id="sex" name="sex" bind:value={$form.sex} />
	</div>
	<div>
		<label for="description">Description</label>
		<input id="description" name="description" type="text" bind:value={$form.description} />
	</div>

	<div>
		<label for="role">Role</label>
		<input id="role" name="role" type="role" required />
	</div>

	<button type="submit">Update</button>
</form>
