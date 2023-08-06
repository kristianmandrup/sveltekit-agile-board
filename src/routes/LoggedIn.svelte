<script lang="ts">
	import Board from '$lib/Board.svelte';
	import LoginButton from '$lib/components/session/LoginButton.svelte';
	let hasProject = false;
</script>

{#if hasProject}
	<Board />
{:else}
	<DisplayProjects />
{/if}
