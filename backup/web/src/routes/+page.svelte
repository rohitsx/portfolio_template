<script lang="ts">
	import Bio from "$lib/components/bio.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Work from "$lib/components/work.svelte";

	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	const { projectsData, workData, wakatimeData } = data;
	console.log("Page props:", wakatimeData);
</script>

<Bio />
<div class="py-8">
	<Work {workData} />
	<Projects {projectsData} />
</div>
