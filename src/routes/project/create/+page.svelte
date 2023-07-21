<script>
	import { goto } from '$app/navigation';

	let name = '';
	let description = '';
	let motivation = '';
	let targetUsers = '';

	function handleSubmit() {
		// Here you would usually send the form data to your backend
		console.log({ name, description, motivation, targetUsers });

		// After submitting the form, redirect to the team creation page
		goto('/team_creation');
	}
</script>

<layout>
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Project Name:
			<input bind:value={name} required />
		</label>
		<label>
			Description:
			<textarea bind:value={description} required />
		</label>
		<label>
			Motivation:
			<textarea bind:value={motivation} required />
		</label>
		<label>
			Target Users:
			<input bind:value={targetUsers} required />
		</label>
		<button type="submit">Create Project</button>
	</form>
</layout>
