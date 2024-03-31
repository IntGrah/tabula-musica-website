<script lang="ts">
	import { isSubscriber } from '$lib/util';

	export let data: App.Locals;

	const { user } = data;
</script>

<nav class="float-right h-16 py-4 max-xs:hidden">
	<a
		class="inline-flex h-8 px-3 items-center rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-violet-900 tracking-wider text-violet-900 hover:text-white group"
		href="/subscribe"
	>
		{#if user && isSubscriber(user.role)}
			Subscribed
		{:else}
			Subscribe
		{/if}
	</a>
	<a
		class="inline-flex h-8 px-3 items-center rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-violet-900 tracking-wider text-violet-900 hover:text-white group"
		href="/settings/profile"
	>
		{#if user}
			{user.name}
		{:else}
			Log in
		{/if}
	</a>
</nav>
