<script lang="ts">
	import { Label, Input, Helper } from 'flowbite-svelte';
	export let id: string;
	export let label: string = id;
	export let placeholder: string = '';
	export let valid = false;
	export let error: string;
	export let value: string;
	export let constraint = {};

	let ariaInvalid = error ? 'true' : undefined;
	let errorColor = error && 'red';
	let validColor = valid && 'green';
	let statusColor: any = errorColor || validColor || '';
</script>

<div class="mb-6">
	<Label for={id} class="block mb-2">${label}</Label>
	<Input
		{id}
		size="lg"
		color={statusColor}
		{placeholder}
		aria-invalid={ariaInvalid}
		bind:value
		{...constraint}
	/>
	{#if error}
		<Helper class="mt-2" color={statusColor}>${error}</Helper>
	{/if}
</div>
