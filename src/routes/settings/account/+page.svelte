<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { user, credentials, google } = data;
	let emailModal: HTMLDialogElement;
	let passwordModal: HTMLDialogElement;
	let deleteAccountModal: HTMLDialogElement;
</script>

<h3 class="text-3xl mb-4">Account settings</h3>
<div class="max-w-3xl">
	<section>
		<hgroup class="mr-4">
			<h4>Email address</h4>
			<p>{user?.email}</p>
		</hgroup>
		<div class="grow py-2">
			<Button on:click={() => emailModal.showModal()}>Change</Button>
		</div>
	</section>
	{#if credentials}
		<section>
			<hgroup class="mr-4">
				<h4>Password</h4>
				<p>Password must be at least 8 characters long</p>
			</hgroup>
			<div class="grow py-2">
				<Button on:click={() => passwordModal.showModal()}>Change</Button>
			</div>
		</section>
	{/if}
	{#if google}
		<section>
			<hgroup class="mr-4">
				<h4>Connected to Google</h4>
				<p>Account linked to Google</p>
			</hgroup>
			<div class="grow py-2">
				<Button>Disconnect</Button>
			</div>
		</section>
	{/if}
	<hr class="mb-8" />
	<section>
		<hgroup>
			<h4>Delete Account</h4>
			<p>Permanently delete this account, along with all its associated data</p>
		</hgroup>
		<div class="grow py-2">
			<Button on:click={() => deleteAccountModal.showModal()}>Change</Button>
		</div>
	</section>
</div>

<Modal bind:dialog={emailModal}>
	<h3 class="mb-4 text-2xl">Change your email address</h3>
	<hr class="mb-4" />
	<form>
		<input class="mb-4" type="password" placeholder="Current password" required />
		<input type="email" placeholder="New email" required />
	</form>
</Modal>

<Modal bind:dialog={passwordModal}>
	<h3 class="mb-4 text-2xl">Change your password</h3>
	<hr class="mb-4" />
	<form>
		<input class="mb-4" type="password" placeholder="Current password" required />
		<hr class="mb-4" />
		<p>New password must</p>
		<ul class="mb-4">
			<li>Be at least 8 characters long</li>
			<li>Contain at least one uppercase letter</li>
			<li>Contain at least one lowercase letter</li>
			<li>Contain at least one number</li>
		</ul>
		<input class="mb-4" type="password" placeholder="New password" required />
		<input class="mb-4" type="password" placeholder="Confirm new password" required />
	</form>
</Modal>

<Modal bind:dialog={deleteAccountModal}>C</Modal>

<style lang="postcss">
	section {
		@apply mb-8 flex flex-wrap;
	}

	h4 {
		@apply text-lg tracking-wide;
	}

	p,
	li {
		@apply text-gray-500 tracking-wide;
	}

    li {
        @apply ml-4 list-disc;
    }
</style>
