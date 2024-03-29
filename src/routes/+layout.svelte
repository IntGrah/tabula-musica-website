<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import HeaderMenu from '$lib/components/HeaderMenu.svelte';
	import HeaderNav from '$lib/components/HeaderNav.svelte';

	import '../app.css';
	import Search from '$lib/components/Search.svelte';

	export let data: App.Locals;
</script>

<svelte:head>
	<title>Tabula Musica</title>
	<meta name="description" content="Tabula Musica" />
</svelte:head>

<div class="relative flex flex-col min-h-screen font-serif bg-amber-50 scroll-smooth">
	<Header>
		<div class="mx-auto max-w-6xl">
			<div class="relative flex h-16 md:justify-center">
				<Logo />
				<HeaderMenu {data} />
			</div>
			<div class="relative h-12">
				<HeaderNav />
				<Search />
			</div>
		</div>
	</Header>
	<main class="grow text-gray-700">
		<slot />
	</main>
	<Footer />
</div>
