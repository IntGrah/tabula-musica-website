<script>
    import InstagramLogo from "/static/social/instagram.jpg"
</script>

<div class="flex max-sm:flex-col py-6">
	<div class="grow min-w-80">
		<h2 class="text-lg font-serif uppercase tracking-widest text-cyan-100/80">Contact</h2>
		<div class="py-4 font-mono text-neutral-200">
			<p>
				<a class="hover:underline" href="mailto:tabulamusica@cambridgesu.co.uk">
					tabulamusica@cambridgesu.co.uk
				</a>
			</p>
			<p>
				<a class="group" href="https://www.instagram.com/tabula_musica">
					<img class="inline" src={InstagramLogo} alt="Instagram logo" width={20} />{' '}
					<span class="group-hover:underline"> @tabula_musica </span>
				</a>
			</p>
		</div>
	</div>
	<div class="grow">
		<h3 class="text-lg font-serif uppercase tracking-widest text-cyan-100/80">Subscribe</h3>
		<div class="flex sm:max-md:flex-col gap-4 py-4 text-lg text-neutral-200">
			<p>
				<a
					class="px-4 py-2 rounded-full tracking-wider font-serif text-cyan-800 transition-colors bg-amber-100 hover:bg-amber-100/90"
					href="https://lists.srcf.net/mailman/listinfo"
				>
					Mailing&nbsp;List
				</a>
			</p>
			<p>
				<a
					class="px-4 py-2 rounded-full tracking-wider font-serif text-cyan-800 transition-colors bg-amber-100 hover:bg-amber-100/90"
					href="/#contact"
				>
					Magazine
				</a>
			</p>
		</div>
	</div>
</div>
