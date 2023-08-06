<script lang="ts">
	import List from '$lib/components/List.svelte';
	const entity = 'project';
	export let items: any[] = [
		{
			name: 'x',
			description: 'x'
		}
	];
</script>

<List {items} {entity} />
