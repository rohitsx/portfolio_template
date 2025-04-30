<script>
	const navdata = [
		{ name: "home", href: "/" },
		{ name: "about", href: "/about" },
		{ name: "contact", href: "/contact" },
	];
</script>

<header class="py-4">
	<div class="px-2">
		<nav
			class="bg-[#282828] x-auto px-4 py-1.5 flex justify-between rounded-xs"
		>
			<ul class="flex space-x-4">
				{#each navdata as { name, href }}
					<li class="flex flex-col items-center justify-center" id={name}>
						<a {href} class="text-[#8ec07c] underline hover:text-[#689d6a]">
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
