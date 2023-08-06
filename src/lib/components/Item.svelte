<script lang="ts">
	import DeleteButton from '$lib/components/buttons/DeleteButton.svelte';
	import EditButton from '$lib/components/buttons/EditButton.svelte';
	import TextDescription from '$lib/components/display/TextDescription.svelte';
	import Title from '$lib/components/display/Title.svelte';
	import pluralize from 'pluralize-esm';
	export let id: string;
	export let name: string;
	export let description: string;
	export let entity: string;
	let route = pluralize(entity);
</script>

<div class="item">
	<Title title={name} />
	<TextDescription text={description} />
	<DeleteButton action="delete" label="Delete" {id} />
	<EditButton {route} {id} label="Edit" />
</div>
