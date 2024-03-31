<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import HeaderMenu from '$lib/components/HeaderMenu.svelte';
	import HeaderNav from '$lib/components/HeaderNav.svelte';
	import Search from '$lib/components/Search.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import type { LayoutData } from './$types';

	import '../app.css';
	import { page } from '$app/stores';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Tabula Musica</title>
	<meta name="description" content="Tabula Musica" />
</svelte:head>

<div class="relative flex flex-col min-h-screen font-serif text-gray-700 bg-amber-50 scroll-smooth">
	{#if $page.url.pathname === '/'}
		<header class="h-16 px-4 bg-amber-100">
			<div class="mx-auto max-w-6xl">
				<Logo />
				<HeaderMenu {data} />
			</div>
		</header>
	{/if}
	<header class="sticky z-10 top-0 h-12 px-4 bg-amber-100 shadow-md">
		<div class="mx-auto max-w-6xl flex gap-x-4">
			<a class="shrink-0 size-12 p-1" href="/">
				<img class="mx-auto size-10" src="https://placehold.co/40" alt="Treble clef" />
			</a>
			<Search />
			<HeaderNav />
            <Menu />
		</div>
	</header>
	<main class="grow">
		<slot />
	</main>
	<Footer />
</div>
