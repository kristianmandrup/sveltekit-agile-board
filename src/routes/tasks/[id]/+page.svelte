<script lang="ts">
	import Builder from '$lib/components/form/Builder.svelte';
	import type { FieldType } from '$lib/components/form/types.js';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	const formFields = [
		{
			id: 'name',
			type: 'text' as FieldType
		},
		{
			id: 'description',
			type: 'textarea' as FieldType
		}
	];

	const { form, posted, enhance, errors, constraints, capture, restore } = superForm(data.form);
	export const snapshot = { capture, restore };
</script>

<form method="PUT" use:enhance>
	<Builder {posted} {formFields} values={$form} errors={$errors} constraints={$constraints} />
	<button type="submit">Update</button>
</form>
