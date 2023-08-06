<script lang="ts">
	import Item from './Item.svelte';
	export let items: any[] = [];
</script>

<div>
	{#each items as item}
		<Item {...item} />
	{/each}
</div>
