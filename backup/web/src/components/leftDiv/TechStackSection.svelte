<script lang="ts">
	export let title;
	export let items: string[] = [];
</script>

<div class="flex gap-3 flex-wrap">
	<h3>{title}:</h3>
	{#each items as item}
		<p class="bg-[#b8bb26] text-gray-900 px-2 rounded-sm">{item}</p>
	{/each}
</div>
