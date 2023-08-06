<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	export let entity: string;
	export let items: any[] = [];
</script>

<div>
	{#each items as item}
		<Item {...item} {entity} />
	{/each}
</div>
