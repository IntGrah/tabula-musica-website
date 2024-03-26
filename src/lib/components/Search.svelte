<script>
	// import { handleSearch } from "@/app/lib/actions";
	import { page } from '$app/stores';
	let query = $page.url.searchParams.get('q');
</script>

<search class="absolute right-4 h-full py-1 max-sm:hidden">
	<form class="h-full" action="/search">
		<label class="sr-only"
			>Search articles
			<input
				name="q"
				class="h-full px-4 w-36 focus:w-48 text-cyan-800 bg-black/5 outline-none rounded-lg border border-transparent transition-all focus:border-gray-400 focus:bg-black/10 placeholder:text-gray-500 focus:placeholder:text-gray-600"
				placeholder="Search articles..."
				value={query ?? ''}
			/>
		</label>
	</form>
</search>
