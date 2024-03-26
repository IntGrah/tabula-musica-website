<script lang="ts">
	export let data: App.Locals;
	const { user } = data;
</script>

<menu class="absolute top-0 flex justify-end right-4 h-16 py-4 max-sm:hidden">
	<li class="flex">
		<a
			class="flex px-3 items-center rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-violet-900 tracking-wider text-violet-900 hover:text-white group"
			href="/subscribe"
		>
			{#if user && ['subscriber', 'editor', 'admin'].includes(user.role)}
				&#129299;
			{:else}
				Subscribe
			{/if}
		</a>
	</li>
	<div class="mx-2 h-full border-l border-violet-800" />
	<li class="flex">
		<a
			class="flex px-3 items-center rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-violet-900 tracking-wider text-violet-900 hover:text-white group"
			href={user ? '/profile' : '/login'}
		>
			{#if user}
				{user.name}
			{:else}
				Log in
			{/if}
		</a>
	</li>
</menu>
