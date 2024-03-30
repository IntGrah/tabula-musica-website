<script>
	import LoremCard from './LoremCard.svelte';
</script>

<div class="mx-auto max-w-6xl px-8 py-4">
	<h1 class="mb-4 text-4xl">Articles</h1>
	<div class="flex max-md:flex-col gap-x-4">
		<LoremCard />

		<div class="shrink-0 grow md:w-96 flex md:flex-col gap-x-4">
			<LoremCard />
			<LoremCard />
		</div>
	</div>

	<LoremCard />
</div>
