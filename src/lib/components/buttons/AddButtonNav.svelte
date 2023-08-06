<script lang="ts">
	import { Button } from 'flowbite-svelte';
	export let route: string;
	export let label: string = '+';
</script>

<Button href={route}>${label}</Button>
