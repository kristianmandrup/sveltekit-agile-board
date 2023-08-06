<script>
	import { Listgroup, ListgroupItem, Avatar } from 'flowbite-svelte';
</script>

<Listgroup active class="w-48">
	<h3 class="text-center bg-red-500 text-white font-bold rounded-t-lg">User list</h3>
	<ListgroupItem class="text-base font-semibold gap-2">
		<Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos
	</ListgroupItem>
	<ListgroupItem class="text-base font-semibold gap-2">
		<Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth
	</ListgroupItem>
	<ListgroupItem class="text-base font-semibold gap-2">
		<Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green
	</ListgroupItem>
	<a
		href="/"
		class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline rounded-b-lg"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 mr-3"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
			/></svg
		>
		Delete user
	</a>
</Listgroup>
