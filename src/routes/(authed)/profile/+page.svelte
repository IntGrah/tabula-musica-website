<script lang="ts">
	import type { Profile, User } from '@prisma/client';

	export let user: User;
	export let profile: Profile;
</script>

<div>
	{user}{profile}
</div>

{#if !user || !profile}
	<main>
		<div class="py-16 text-5xl text-center text-cyan-800">
			Please sign in:
			<br />
			<form>
				<a href="/login">Sign in</a>
			</form>
		</div>
	</main>
{:else}
	<main>
		<div class="py-16 text-5xl text-center text-cyan-800">
			Hello, {profile.name}!
			<br />
			Logged in as {user.email}
			<br />
			<form method="POST">
				<button>Sign out</button>
			</form>
		</div>
	</main>
{/if}
