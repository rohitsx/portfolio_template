<script lang="ts">
	let { projectsData } = $props();
</script>

<div class="text-[#B8BB26] text-xl mb-4">projects</div>
<ul>
	{#each projectsData as data}
		<li class="mb-6">
			<a
				href={data.homepage || data.html_url}
				class="text-[#8ec07c] underline hover:text-[#689d6a]"
				target="_blank"
			>
				{data.full_name}
			</a>
			<div class="text-[#EBDBB2] text-xs mt-1">
				{data.description}
			</div>
			{#if data.techStack && data.techStack.length > 0}
				<div class="flex flex-wrap gap-2 mt-1">
					{#each data.techStack as tech}
						<span class=" text-[#fe8019] text-xs">
							{tech}
						</span>
					{/each}
				</div>
			{/if}
		</li>
	{/each}
</ul>
<div class="text-[#fb4934]">
	<a
		class="underline-offset-4 underline text-[#8ec07c] hover:text-[#689d6a]"
		target="_blank"
		rel="noopener noreferrer"
		href="https://github.com/rohitsx">all projects →</a
	>
</div>
