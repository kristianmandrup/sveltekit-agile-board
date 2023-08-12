<script lang="ts">
	import Guest from './Guest.svelte';
	import LoggedIn from './LoggedIn.svelte';

	let loggedIn = false;
</script>

{#if loggedIn}
	<LoggedIn />
{:else}
	<Guest />
{/if}
