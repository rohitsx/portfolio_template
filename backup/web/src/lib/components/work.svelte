<script>
	let { workData } = $props();
</script>

<div class="text-[#B8BB26] text-xl mb-4">work</div>
<ul>
	{#each workData as data}
		<li class="mb-6">
			<a
				href={data.projectUrl}
				class="text-[#8ec07c] underline hover:text-[#689d6a]"
				target="_blank"
			>
				{data.projectName}
			</a>
			{#if data.github}
				<div>
					<a
						href={data.github}
						class="text-[#fabd2f] text-xs underline hover:text-[#d79921]"
						target="_blank"
					>
						GitHub
					</a>
				</div>
			{/if}
			<div class="text-[#EBDBB2] text-xs mt-1">
				{data.description}
			</div>
			<div class="flex items-center gap-2 mt-1">
				<span class="text-[#fe8019] text-xs">{data.role}</span>
				<span class="text-[#EBDBB2] text-xs">•</span>
				<span class="text-[#EBDBB2] text-xs">{data.company || data.type}</span>
				<span class="text-[#EBDBB2] text-xs">•</span>
				<span class="text-[#EBDBB2] text-xs">{data.duration}</span>
			</div>
		</li>
	{/each}
</ul>
