<script lang="ts">
	const profile = { name: 'John Doe' };
</script>

<menu class="absolute top-0 flex justify-end right-4 h-16 py-4 max-sm:hidden">
	<li class="flex">
		<a
			class="flex px-3 items-center rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-violet-900 tracking-wider text-violet-900 hover:text-white group"
			href="/subscribe"
		>
			Subscribe
		</a>
	</li>
	<div class="mx-2 h-full border-l border-violet-800" />
	<li class="flex">
		<a
			class="flex px-3 items-center rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-violet-900 tracking-wider text-violet-900 hover:text-white group"
			href={profile ? '/profile' : '/login'}
		>
			{profile ? profile.name : 'Log in'}
		</a>
	</li>
</menu>
