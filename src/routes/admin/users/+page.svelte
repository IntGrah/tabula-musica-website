<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { users, ms, page, size } = data;
</script>

<div class="mx-auto max-w-6xl">
	<h2 class="text-3xl">Users</h2>
	<p>
		Search returned {users.length} records ({ms / 1000} seconds).
	</p>
	<p>
		Showing rows {size * page + 1} to {Math.min(size * (page + 1), users.length)} of {users.length}.
	</p>

	<div class="overflow-x-scroll">
		<table class="w-full border-collapse font-mono">
			<tr>
				<th>Email</th>
				<th>Name</th>
				<th>Role</th>
			</tr>
			{#each data.users as { name, email, role }}
				<tr>
					<td class="min-w-64">{email}</td>
					<td class="min-w-48">{name}</td>
					<td class="min-w-36 capitalize">{role}</td>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style lang="postcss">
	h2,
	p,
	table {
		@apply mb-4;
	}

	tr {
		@apply h-12;
	}

	tr:nth-child(even) {
		@apply bg-gray-200;
	}

	tr:nth-child(odd) {
		@apply bg-gray-300;
	}

	th {
		@apply text-left;
	}

	th,
	td {
		@apply px-4;
	}
</style>
