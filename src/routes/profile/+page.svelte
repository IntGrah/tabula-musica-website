<script lang="ts">
	import type { User } from '@prisma/client';

	export let data: App.Locals;
	// Server hooks do this job
	const user = data.user as User;
</script>

<div class="py-16 text-5xl text-center text-cyan-800">
	Hello, {user.name}!
	<br />
	Logged in as {user.email}
	<br />
	<form method="POST" action="?/signout">
		<button>Sign out</button>
	</form>
	{#if user.role === 'admin'}
		<a href="/admin">Go to admin page</a>
	{/if}
</div>
