<script lang="ts">
	import Board from '$lib/Board.svelte';
	import List from './projects/List.svelte';
	let hasProject = false;
</script>

{#if hasProject}
	<Board />
{:else}
	<List entity="project" />
{/if}
