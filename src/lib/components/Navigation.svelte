<script lang="ts">
	export let title: string;
	export let links: { href: string; text: string }[];
</script>

<div class="mx-auto max-w-6xl px-8">
	<h2 class="mb-4 mt-4 text-2xl">{title}</h2>

	<nav class="mb-4 relative flex flex-wrap">
		{#each links as { href, text }}
			<a class="relative px-4 py-3 group" {href}>
				<span class="tracking-wider group-hover:text-gray-500">
					{text}
				</span>
				<hr
					class="absolute -bottom-2 left-1/2 w-0 border-gray-600 transition-all group-hover:left-[20%] group-hover:w-[60%]"
				/>
			</a>
		{/each}
	</nav>

	<hr class="mb-4" />

	<slot />
</div>
