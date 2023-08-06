<script lang="ts">
	import List from '$lib/components/List.svelte';
	export let entity: string;
	export let items: any[] = [
		{
			name: 'x',
			description: 'x'
		}
	];
</script>

<List {items} {entity} />
