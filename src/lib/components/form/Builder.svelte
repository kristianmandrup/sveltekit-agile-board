<script lang="ts">
	import TextField from '$lib/components/form/TextField.svelte';
	import TextArea from '$lib/components/form/TextArea.svelte';
	import type { IFormMap } from './types';

	export let formFields: IFormMap[];
	export let posted;
	export let errors;
	export let allErrors: any[] = [];
	export let valid = posted && allErrors.length == 0;
	export let values;
	export let constraints;
	// Client API:
</script>

{#each formFields as entry}
	<label for={entry.id}>Name </label>
	{#if entry.type == 'text'}
		<TextField
			id={entry.id}
			{valid}
			label={entry.label || entry.id}
			error={$errors[entry.id]}
			value={$values[entry.id]}
			constraint={$constraints[entry.id]}
		/>
	{/if}
	{#if entry.type == 'textarea'}
		<TextArea
			id={entry.id}
			error={$errors[entry.id]}
			value={$values[entry.id]}
			constraint={$constraints[entry.id]}
		/>
	{/if}
{/each}
