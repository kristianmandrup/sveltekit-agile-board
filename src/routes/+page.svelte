<script lang="ts">
	import Board from '$lib/Board.svelte';
	import Guest from './Guest.svelte';
	import LoggedIn from './LoggedIn.svelte';

	let loggedIn = false;
</script>

{#if loggedIn}
	<LoggedIn />
{:else}
	<Guest />
{/if}
