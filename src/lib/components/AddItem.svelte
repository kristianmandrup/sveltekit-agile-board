<script lang="ts">
	import ButtonModal from '$lib/components/buttons/ButtonModal.svelte';
	export let props: any;
	export let entity: string;
	import New from '$lib/components/New.svelte';
</script>

<div class="item">
	<ButtonModal title="Add ${entity}">
		<New {props} {entity} />
	</ButtonModal>
</div>
