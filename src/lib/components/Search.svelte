<script>
	import { page } from '$app/stores';

	let query = $page.url.searchParams.get('q');
</script>

<search class="absolute top-0 right-4 h-full py-1 max-sm:hidden">
	<form class="h-full" action="/search">
		<label class="sr-only" for="search">Search articles</label>
		<input
			id="search"
			name="q"
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

<style lang="postcss">
	input {
		@apply h-full px-4 w-36 focus:w-48
        text-gray-700
        bg-black/5 focus:bg-black/10
        outline-none rounded-lg
        border border-transparent focus:border-gray-400
        transition-all
        placeholder:text-gray-500 focus:placeholder:text-gray-600;
	}
</style>
