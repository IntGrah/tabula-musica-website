<footer class="px-8 bg-gray-900">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-wrap py-6 gap-x-8">
			<hgroup class="grow mb-4">
				<h4 id="contact" class="mb-4 text-lg uppercase tracking-widest text-cyan-100">Contact</h4>
				<p class="font-mono text-neutral-200">
					<img class="inline" src="/icons/email.png" alt="Email icon" width={20} />
					<a class="tracking-tighter" href="mailto:tabulamusica@cambridgesu.co.uk">
						tabulamusica@cambridgesu.co.uk
					</a>
				</p>
				<p class="font-mono text-neutral-200">
					<img class="inline" src="/icons/instagram.png" alt="Instagram logo" width={20} />
					<a class="tracking-tighter" href="https://www.instagram.com/tabula_musica">
						@tabula_musica
					</a>
				</p>
			</hgroup>
			<hgroup class="grow mb-4">
				<h4 class="mb-4 text-lg uppercase tracking-widest text-cyan-100">Subscribe</h4>
				<div class="flex flex-wrap h-10 gap-x-4">
					<button>Mailing list</button>
					<button>Magazine</button>
				</div>
			</hgroup>
		</div>
		<hr class="mb-4 border-neutral-600" />
		<p class="mb-4 text-xs font-mono tracking-wide text-neutral-400">
			© 2024 Tabula Musica. All rights reserved.
		</p>
	</div>
</footer>

<style lang="postcss">
	button {
		@apply h-full px-4 items-center
        text-cyan-800 transition-colors
        bg-amber-100 hover:bg-amber-100/80
        rounded-full tracking-wider;
	}
</style>
