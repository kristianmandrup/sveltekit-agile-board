<script lang="ts">
	import Board from '$lib/Board.svelte';
	import FrontPage from './FrontPage.svelte';
	import LoggedIn from './LoggedIn.svelte';

	let loggedIn = false;
</script>

<FrontPage>
	{#if loggedIn}
		<Board />
	{:else}
		<LoggedIn />
	{/if}
</FrontPage>
