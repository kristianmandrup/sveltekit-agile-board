<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider,
		Input
	} from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import 'iconify-icon';

	// Navbar See: https://flowbite-svelte.com/docs/components/navbar

	let menuItems: any[] = [
		{
			path: '/',
			icon: 'mdi:home'
		}
	];
</script>

<!-- ... existing style rules ... -->

<div class="container">
	<h1>Welcome to AI Project Management System</h1>
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img
				src="/images/flowbite-svelte-icon-logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="GPT-Team Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				GPT-Team
			</span>
		</NavBrand>
		<div class="hidden relative md:block">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 dark:text-white"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/></svg
				>
			</div>
			<Input id="search-navbar" class="pl-10" placeholder="Search..." />
		</div>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Dropdown</Chevron></NavLi>
			<NavLi href="/services">Services</NavLi>
			<NavLi href="/pricing">Pricing</NavLi>
			<NavLi href="/contact">Contact</NavLi>
			<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
				<DropdownItem>Dashboard</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Earnings</DropdownItem>
				<DropdownDivider />
				<DropdownItem>Sign out</DropdownItem>
			</Dropdown>
		</NavUl>
	</Navbar>
	<slot />
</div>
