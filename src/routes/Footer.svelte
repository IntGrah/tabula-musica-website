<script>
	import Restrict from './components/util/Restrict.svelte';
</script>

<footer id="contact" class="px-8 bg-gray-900">
	<Restrict>
		<div class="flex flex-wrap py-6 gap-8 font-serif">
			<hgroup>
				<h2 class="text-lg uppercase tracking-widest text-cyan-100">Contact</h2>
				<div class="py-4 font-mono text-neutral-200">
					<p>
						<img class="inline" src="icons/email.png" alt="Email icon" width={20} />
						<a href="mailto:tabulamusica@cambridgesu.co.uk">tabulamusica@cambridgesu.co.uk</a>
					</p>
					<p>
						<img class="inline" src="icons/instagram.png" alt="Instagram logo" width={20} />
						<a href="https://www.instagram.com/tabula_musica">@tabula_musica</a>
					</p>
				</div>
			</hgroup>
			<hgroup>
				<h2 class="text-lg uppercase tracking-widest text-cyan-100">Subscribe</h2>
				<div class="flex flex-wrap gap-4">
					<a
						style:color="green"
						class="px-4 py-2 rounded-full tracking-wider font-serif text-cyan-800 transition-colors bg-amber-100 hover:bg-amber-100/90"
						href="https://lists.srcf.net/mailman/listinfo"
					>
						Mailing&nbsp;list
					</a>
					<a
						class="px-4 py-2 rounded-full tracking-wider font-serif text-cyan-800 transition-colors bg-amber-100 hover:bg-amber-100/90"
						href="/#contact"
					>
						Magazine
					</a>
				</div>
			</hgroup>
		</div>
		<hr class="border-neutral-600" />
		<p class="py-4 text-xs font-mono tracking-wide text-neutral-400">
			© 2024 Tabula Musica. All rights reserved.
		</p>
	</Restrict>
</footer>
