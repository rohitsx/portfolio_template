<script lang="ts">
	import Bio from "$lib/components/bio.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Work from "$lib/components/work.svelte";

	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	const { projectsData, workData, wakatimeData } = data;
	console.log("Page props:", wakatimeData);
</script>

<div class="p-2">
	<Bio />
	<div class="py-8">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="px-2"><Work {workData} /></div>
			<div class="px-2"><Projects {projectsData} /></div>
		</div>
	</div>
</div>
