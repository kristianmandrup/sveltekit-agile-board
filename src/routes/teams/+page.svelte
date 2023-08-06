<script lang="ts">
	import type { FieldType } from '$lib/components/form/types.js';
	import { superForm } from 'sveltekit-superforms/client';
	import Title from '$lib/components/display/Title.svelte';
	import EditButton from '$lib/components/buttons/EditButton.svelte';
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

	$: ({ teams } = data);
</script>

<div class="grid">
	<div>
		<h2>Teams:</h2>
		{#each teams as team}
			<article>
				<Title title={team.name} />
				<TextDecription text={team.description} />
				<DeleteButton action="deleteTeam" label="Delete" id={team.id} />
				<EditButton route="team" id={team.id} label="Edit" />
			</article>
		{/each}
	</div>
	<form action="?/createTeam" method="POST" use:enhance>
		<h3>New Team</h3>
		<Builder {posted} {formFields} values={$form} errors={$errors} constraints={$constraints} />
		<button type="submit">Add Team</button>
	</form>
</div>
