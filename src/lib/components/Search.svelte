<script>
	import { page } from '$app/stores';

	let query = $page.url.searchParams.get('q');
</script>

<search class="absolute top-0 right-4 h-full py-1 max-xs:hidden">
	<form class="h-full" action="/search">
		<input
			name="q"
            class="input w-36 focus:w-48"
			placeholder="Search articles..."
			spellcheck="false"
			autocorrect="off"
			autocomplete="off"
			autocapitalize="none"
			required
			on:invalid={(e) => e.preventDefault()}
			value={query ?? ''}
		/>
	</form>
</search>
