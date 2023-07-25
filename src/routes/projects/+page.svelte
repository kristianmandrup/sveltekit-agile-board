<script>
	import { goto } from '$app/navigation';

	let name = '';
	let description = '';
	let motivation = '';
	let targetUsers = '';

	let projects = [
		{
			name: 'Project A'
		},
		{
			name: 'Project B'
		}
	];

	async function getProjects(event: Event) {
		await fetch('/api/projects', {
			method: 'POST',
			body: data
		});
	}

	function submit(event) {
		// Here you would usually send the form data to your backend
		console.log({ name, description, motivation, targetUsers });
		const form = event.target as HTMLFormElement
		const data = new FormData(form)

		await fetch('/api/projects', {
			method: 'POST',
			body: data
		})

		// After submitting the form, redirect to the team creation page
		goto('/team_creation');
	}
</script>

<layout>
	<div class="container">
		{#each projects as project}
			<div class="item">
				{project.name}
			</div>
		{/each}
	</div>

	<form on:submit|preventDefault={submit}>
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
