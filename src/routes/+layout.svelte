<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>Tabula Musica</title>
	<meta name="description" content="Tabula Musica" />
</svelte:head>

<Header />

<div class="relative flex flex-col min-h-screen bg-amber-200/20 scroll-smooth">
	<main class="grow">
		<slot />
	</main>
	<Footer />
</div>
