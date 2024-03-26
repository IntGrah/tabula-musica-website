<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';

	export let data: App.Locals;
</script>

<svelte:head>
	<title>Tabula Musica</title>
	<meta name="description" content="Tabula Musica" />
</svelte:head>

<div class="relative flex flex-col min-h-screen bg-amber-200/20 scroll-smooth">
	<Header {data} />
	<main class="grow">
		<slot />
	</main>
	<Footer />
</div>
