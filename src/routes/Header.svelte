<script lang="ts">
	import { page } from '$app/stores';
	import Logo from './components/Logo.svelte';
	import Menu from './components/Menu.svelte';
	import Navigation from './components/Navigation.svelte';
	import Restrict from './components/util/Restrict.svelte';

	let solid = true;
	let root = $page.url.pathname === '/';
</script>

<header
	on:scroll={() => (solid = !root || scrollY >= 240)}
	class="top-0 w-full z-50 font-serif transition-all duration-500"
	style:background-color={`rgba(254, 243, 199, ${solid ? 0.8 : 0})`}
	style:backdrop-filter={solid ? 'blur(4px)' : 'none'}
	style:box-shadow={solid ? '0 2px 12px rgba(0, 0, 0, 0.2)' : 'none'}
	style:position={root ? 'fixed' : 'sticky'}
>
	<Restrict
		><div class="relative flex md:justify-center">
			<Logo />
			<Menu />
		</div>
		<Navigation />
	</Restrict>
</header>
