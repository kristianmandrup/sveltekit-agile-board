<script lang="ts">
	import { Button } from 'flowbite-svelte';
	export let id: string;
	export let action: string;
	export let label: string = 'Delete';
</script>

<form action="?/${action}&id={id}" method="POST">
	<Button type="submit" class="outline secondary">${label}</Button>
</form>
