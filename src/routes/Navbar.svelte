<script>
	import { goto } from '$app/navigation';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		Button
	} from 'flowbite-svelte';
</script>

<Navbar
	navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
	let:hidden
	let:toggle
>
	<NavBrand href="/">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="GPT-Team Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			GPT-Team
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm">Get started</Button>
		<NavHamburger on:click={toggle} />
	</div>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Project</Chevron></NavLi>
		<NavLi href="/account">Account</NavLi>
		<NavLi href="/profile">Profile</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem><a href="/dashboard">Dashboard</a></DropdownItem>
			<DropdownItem><a href="/teams">Board</a></DropdownItem>
			<DropdownItem><a href="/tasks">Tasks</a></DropdownItem>
			<DropdownItem><a href="/deliverables">Deliverables</a></DropdownItem>
		</Dropdown>
	</NavUl>
</Navbar>
