<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';

	const links = [
		{ href: '/settings/account', text: 'Account' },
		{ href: '/settings/profile', text: 'Profile' },
		{ href: '/settings/subscription', text: 'Subscription' },
		{ href: '/settings/404', text: '404' }
	];
</script>

<Navigation title="Settings" {links}>
	<slot />
</Navigation>
