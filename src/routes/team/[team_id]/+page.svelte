<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ team } = data);
</script>

<form action="?/updateTeam" method="POST">
	<h3>Editing: {team.title}</h3>
	<label for="title"> Title </label>
	<input type="text" id="title" name="title" value={team.title} />
	<label for="title"> Title </label>
	<textarea id="content" name="content" rows={5} value={team.content} />
	<button type="submit">Update Team</button>
</form>
