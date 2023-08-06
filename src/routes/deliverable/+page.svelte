<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { FieldType } from '$lib/components/form/types';
	import AddItem from '$lib/components/AddItem.svelte';
	import List from '$lib/components/List.svelte';

	export let data;

	// Client API:
	const { posted, enhance, form, errors, constraints, capture, restore } = superForm(data.form);
	export const snapshot = { capture, restore };

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

	const entity = 'deliverable';

	let props = {
		formFields,
		posted,
		form,
		errors,
		constraints
	};

	$: ({ deliverables } = data);
</script>

<layout>
	<div class="grid">
		<AddItem {props} {entity} />
		<List items={deliverables} {entity} />
	</div>
</layout>
