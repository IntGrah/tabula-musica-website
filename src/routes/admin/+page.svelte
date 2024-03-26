<script lang="ts">
	import type { User } from '@prisma/client';

	export let data: { users: User[] };
</script>

<form method="POST" action="?/reset">
	<button class="text-4xl">Reset DB</button>
</form>

<table class="font-mono">
	{#each data.users as user}
		<tr>
			{#each [user.id, user.name, user.email, user.role] as datum}
				<td class="px-2 border border-black">{datum}</td>
			{/each}
		</tr>
	{/each}
</table>
