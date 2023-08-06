<script lang="ts">
	import ButtonModal from '$lib/components/buttons/ButtonModal.svelte';
	export let props: any;
	import New from './New.svelte';
</script>

<div class="item">
	<ButtonModal title="Add project">
		<New {props} />
	</ButtonModal>
</div>
