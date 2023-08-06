<script lang="ts">
	import Builder from '$lib/components/form/Builder.svelte';
	import { capitalize } from '$lib/utils/string';
	// export let posted: any;
	// export let values: any;
	// export let errors: any;
	// export let constraints: any;
	// export let formFields: any;
	// export let enhance: any;
	export let props: any;
	export let entity: string;
	let enhance = props.enhance;
	let entityLabel = capitalize(entity);
</script>

<form method="POST" use:enhance>
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<h3>New ${entityLabel}</h3>
		<Builder {...props} />
		<button type="submit">Add ${entityLabel}</button>
	</div>
</form>
