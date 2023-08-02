<script lang="ts">
	import type { FieldType } from '$lib/components/form/types.js';
	import { superForm } from 'sveltekit-superforms/client';
	import Title from '$lib/components/display/Title.svelte';
	import EditButton from './../../lib/components/buttons/EditButton.svelte';
	import DeleteButton from '$lib/components/buttons/DeleteButton.svelte';
	import TextDecription from '$lib/components/display/TextDecription.svelte';
	import Builder from '$lib/components/form/Builder.svelte';

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

	$: ({ tasks } = data);
</script>

<div class="grid">
	<div>
		<h2>Tasks:</h2>
		{#each tasks as task}
			<article>
				<Title title={task.name} />
				<TextDecription text={task.description} />
				<DeleteButton action="deleteTask" label="Delete" id={task.id} />
				<EditButton route="task" id={task.id} label="Edit" />
			</article>
		{/each}
	</div>
	<form action="?/createTask" method="POST" use:enhance>
		<h3>New Task</h3>
		<Builder {posted} {formFields} values={$form} errors={$errors} constraints={$constraints} />
		<button type="submit">Add Task</button>
	</form>
</div>
