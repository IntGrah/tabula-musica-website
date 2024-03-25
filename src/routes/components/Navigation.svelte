<script>
	import Search from './Search.svelte';

	let navLinks = [
		{ href: '/articles', text: 'Articles' },
		{ href: '/events', text: 'Events' },
		{ href: '/#about', text: 'About' },
		{ href: '/profile', text: 'Profile' }
	];
</script>

<nav class="relative flex px-4 md:justify-center">
	{#each navLinks as { href, text }}
		<a class="relative w-20 lg:w-28 xl:w-32 py-3 text-center group" {href}>
			<span class="tracking-wider text-cyan-800 group-hover:text-cyan-600">
				{text}
			</span>
			<hr
				class="absolute bottom-2 left-1/2 w-0 border-cyan-500 transition-all group-hover:left-[20%] group-hover:w-[60%]"
			/>
		</a>
	{/each}
	<Search />
</nav>
