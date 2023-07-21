<script>
	import { goto } from '$app/navigation';

	let name = '';
	let techPreferences = '';
	let workStyle = '';

	function handleSubmit() {
		// Here you would usually send the form data to your backend
		console.log({ name, techPreferences, workStyle });

		// After submitting the form, redirect to the dashboard
		goto('/dashboard');
	}
</script>

<layout>
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Team Member Name:
			<input bind:value={name} required />
		</label>
		<label>
			Tech Preferences:
			<input bind:value={techPreferences} required />
		</label>
		<label>
			Work Style:
			<select bind:value={workStyle} required>
				<option value="">--Please choose an option--</option>
				<option value="conservative">Conservative</option>
				<option value="risky">Risky</option>
			</select>
		</label>
		<button type="submit">Create AI Team Member</button>
	</form>
</layout>
