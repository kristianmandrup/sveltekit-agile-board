<script lang="ts">
	import type { FieldType } from '$lib/components/form/types.js';
	import { superForm } from 'sveltekit-superforms/client';
	import AddItem from '$lib/components/AddItem.svelte';
	import List from '$lib/components/List.svelte';

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

	const entity = 'team';

	let props = {
		formFields,
		posted,
		form,
		errors,
		constraints
	};

	$: ({ teams } = data);
</script>

<layout>
	<div class="grid">
		<AddItem {props} {entity} />
		<List items={teams} {entity} />
	</div>
</layout>
