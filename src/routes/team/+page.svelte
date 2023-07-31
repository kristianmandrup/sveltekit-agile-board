<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// Client API:
	const { form } = superForm(data.form);

	$: ({ teams } = data);
</script>

<div class="grid">
	<div>
		<h2>Teams:</h2>
		{#each teams as team}
			<article>
				<header>{team.name}</header>
				<p>
					{team.description}
				</p>
				<form action="?/deleteTeam&id={team.id}" method="POST">
					<button type="submit" class="outline secondary">Delete Team</button>
				</form>
				<a href="/{team.id}" role="button" class="outline constrast" style="width: 100%;"
					>Edit team</a
				>
			</article>
		{/each}
	</div>
	<form action="?/createTeam" method="POST">
		<h3>New Team</h3>
		<label for="title">Project Name </label>
		<input type="text" id="name" name="name" bind:value={$form.name} />
		<label for="description"> Description </label>
		<textarea id="description" name="description" rows={5} bind:value={$form.description} />
		<button type="submit">Add Team</button>
	</form>
</div>
