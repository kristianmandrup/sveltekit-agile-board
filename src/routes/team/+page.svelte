<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ teams } = data);
</script>

<div class="grid">
	<div>
		<h2>Teams:</h2>
		{#each teams as team}
			<article>
				<header>{team.title}</header>
				<p>
					{team.content}
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
		<label for="title"> Title </label>
		<input type="text" id="title" name="title" />
		<label for="description"> Description </label>
		<textarea id="description" name="description" rows={5} />
		<button type="submit">Add Team</button>
	</form>
</div>
