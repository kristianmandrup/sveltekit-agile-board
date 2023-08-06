<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	let formModal = false;
	export let title: string;
</script>

<Button on:click={() => (formModal = true)}>${title}</Button>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
	<slot />
</Modal>
