<script>
	import Navigation from '$lib/components/Navigation.svelte';

	const links = [
		{ href: '/admin', text: 'Dashboard' },
		{ href: '/admin/users', text: 'Users' },
		{ href: '/admin/posts', text: 'Posts' }
	];
</script>

<Navigation title="Admin" {links}>
	<slot />
</Navigation>
