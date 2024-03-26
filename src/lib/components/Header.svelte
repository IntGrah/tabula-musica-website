<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Restrict from '$lib/components/util/Restrict.svelte';

	export let data: App.Locals;

	let scroll = 0;
	$: solid = scroll <= 240;
	let root = $page.url.pathname === '/';
</script>

<header
	on:scroll={() => (scroll = window.scrollY)}
	class="top-0 w-full z-50 font-serif transition-all duration-500"
	style:background-color={`rgba(254, 243, 199, ${solid ? 0.8 : 0})`}
	style:backdrop-filter={solid ? 'blur(4px)' : 'none'}
	style:box-shadow={solid ? '0 2px 12px rgba(0, 0, 0, 0.2)' : 'none'}
	style:position={root ? 'fixed' : 'sticky'}
>
	<Restrict
		><div class="relative flex md:justify-center">
			<Logo />
			<Menu {data} />
		</div>
		<Navigation />
	</Restrict>
</header>
