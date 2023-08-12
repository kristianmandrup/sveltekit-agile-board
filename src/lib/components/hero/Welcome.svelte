<script>
	import { Heading, P, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<div class="text-center">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
		>We invest in the world’s potential</Heading
	>
	<P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
		>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
		long-term value and drive economic growth.</P
	>
	<Button href="/">
		Learn more
		<Icon name="arrow-right-outline" class="w-3.5 h-3.5 ml-2" />
	</Button>
</div>
