<script lang="ts">
	import { page } from '$app/stores';

	let scroll = 0;
	$: solid = scroll <= 240;
	let root = $page.url.pathname === '/';
</script>

<header
	on:scroll={() => (scroll = window.scrollY)}
	class="top-0 w-full z-50 transition-all duration-500"
	style:background-color={`rgba(254, 243, 199, ${solid ? 0.8 : 0})`}
	style:backdrop-filter={solid ? 'blur(4px)' : 'none'}
	style:box-shadow={solid ? '0 2px 12px rgba(0, 0, 0, 0.2)' : 'none'}
	style:position={root ? 'fixed' : 'sticky'}
>
	<slot />
</header>
