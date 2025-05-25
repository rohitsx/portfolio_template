<script>
	const navdata = [
		{ name: "linkedin", href: "https://www.linkedin.com/in/rohitsx" },
		{ name: "twitter", href: "https://x.com/rohitsxx" },
		{ name: "githube", href: "https://github.com/rohitsx" },
		{
			name: "Resume",
			href: "https://docs.google.com/document/d/1j6KBYvxVcRZ79GQ9qP_KID6wdPgkyY3Y/edit",
		},
	];
</script>

<header class="py-4">
	<nav class=" py-1.5 flex justify-end mr-4">
		<ul class="flex space-x-4">
			{#each navdata as { name, href }}
				<li class="flex flex-col" id={name}>
					<a {href} target="_blank" class="text-[#A7C9A7] hover:text-[#689d6a]">
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
