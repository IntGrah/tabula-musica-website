<script lang="ts">
	import { isSubscriber } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user!;
</script>

<h3 class="text-3xl mb-4">Subscription</h3>
<div class="max-w-3xl">
	<section class="mb-8">
		<hgroup>
			<h4>Paper edition</h4>
			{#if isSubscriber(user.role)}
				<p>You are currently a subscriber.</p>
			{/if}
		</hgroup>
		<div class="grow">
			<button>Change</button>
		</div>
	</section>
	<hr class="mb-8" />
	<section class="mb-8">
		<hgroup>
			<h4>Lorem Ipsum</h4>
			<p>Dolor sit amet consectetur</p>
		</hgroup>
	</section>
</div>

<style lang="postcss">
	hgroup h4 {
		@apply text-lg tracking-wide;
	}

	hgroup p {
		@apply text-gray-500 tracking-wide;
	}
</style>
