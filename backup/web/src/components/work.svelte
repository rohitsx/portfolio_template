<script>
	let { workData } = $props();
</script>

<div class="text-[#B8BB26] text-xl">work</div>
<ul>
	{#each workData as data}
		<li class="mb-6">
			<a href={data.projectUrl} target="_blank">
				{data.projectName}
			</a>

			<div class="flex items-center gap-1">
				<span class="text-[#fe8019] text-xs">{data.role}</span>
				<span class="text-[#EBDBB2] text-xs">•</span>
				<span class="text-[#EBDBB2] text-xs">{data.company || data.type}</span>
				<span class="text-[#EBDBB2] text-xs">•</span>
				<span class="text-[#EBDBB2] text-xs">{data.duration}</span>
			</div>
			<div class="text-[#EBDBB2] text-xs mt-1">
				{data.description}
			</div>
		</li>
	{/each}
</ul>
