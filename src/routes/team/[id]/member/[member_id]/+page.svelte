<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// Client API:
	const { form } = superForm(data.form);
</script>

<form method="POST">
	<label for="name">Name </label>
	<input type="text" id="name" name="name" bind:value={$form.name} />
	<label for="description"> Description </label>
	<textarea id="description" name="description" rows={5} bind:value={$form.description} />
	<label for="title">Role </label>
	<select bind:value={$form.role} required>
		<option value="">--Please choose an option--</option>
		<option value="ui">UI/UX</option>
		<option value="frontend">Frontend developer</option>
		<option value="backend">Backend developer</option>
	</select>
	<label for="title">Workstyle </label>
	<select bind:value={$form.workStyle} required>
		<option value="">--Please choose an option--</option>
		<option value="conservative">Conservative</option>
		<option value="risky">Risky</option>
	</select>
	<label for="title">Tech preferences </label>
	<select bind:value={$form.techPreferences} required>
		<option value="">--Please choose an option--</option>
		<option value="conservative">C#</option>
		<option value="risky">Java</option>
	</select>
	<button type="submit">Add Member</button>
</form>
