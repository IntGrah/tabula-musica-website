<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user!;

	let bio = user.bio ?? '';
</script>

<h3 class="text-3xl mb-4">Profile</h3>
<div class="max-w-3xl">
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h4>Name</h4>
			<p>{user.name}</p>
		</hgroup>
		<div class="grow py-2">
			<Button>Change</Button>
		</div>
	</section>
	<section class="mb-8">
		<hgroup class="mb-2">
			<h4>About</h4>
			<p>A short introduction shown on your profile</p>
		</hgroup>
		<textarea
			class="mb-2 w-full min-h-24 max-h-96 p-2 rounded"
			placeholder="Write about yourself..."
			maxlength="240"
			bind:value={bio}
		/>
		<p class="text-sm text-gray-400">{240 - bio.length} Characters left</p>
	</section>
	{#if 2 + 2 === 5}
		<section class="mb-8">
			<hgroup class="mb-4">
				<h4>Avatar</h4>
				<p>Images must be under 2MB</p>
			</hgroup>
			<label class="p-2 border border-black rounded-full cursor-pointer" for="avatar-input">
				Choose an image
				<input id="avatar-input" class="hidden" type="file" />
			</label>
		</section>
	{/if}
	<hr class="mb-8" />
	<section class="mb-8">
		<hgroup>
			<h4>Delete Account</h4>
			<p>Permanently delete this account, along with all its associated data</p>
		</hgroup>
		<div>
			<button id="text-red-500">Delete</button>
		</div>
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
