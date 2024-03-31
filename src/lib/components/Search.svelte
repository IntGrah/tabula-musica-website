<script>
	import { page } from '$app/stores';

	let query = $page.url.searchParams.get('q');
</script>

<search class="grow h-12 max-xs:hidden">
	<form class="relative h-10 py-1" action="/search">
        <img class="absolute left-2 inset-y-3 size-6" src="/icons/search.svg" alt=""/>
		<input
			name="q"
			class="w-full max-w-64 input !pl-10"
			placeholder="Search articles..."
			autocomplete="off"
			required
			value={query ?? ''}
			on:invalid={(e) => e.preventDefault()}
		/>
	</form>
</search>
