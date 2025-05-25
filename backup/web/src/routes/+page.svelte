<script lang="ts">
	import Bio from "../components/bio.svelte";
	import ChromeExtension from "../components/chrome-extension.svelte";
	import Saas from "../components/saas.svelte";
	import SideProject from "../components/side-project.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	const { projectsData, workData, wakatimeData } = data;
	console.log("Page props:", wakatimeData);
</script>

<div class="md:flex py-8 md:flex-row">
	<div class="pr-8 md:pr-16 mb-8 md:mt-18 md:max-w-xl"><Bio /></div>
	<div class="px-8">
		<div class="md:flex md:flex-row gap-8 max-w-6xl">
			<Saas />
			<ChromeExtension />
		</div>
		<div class="max-w-3xl">
			<SideProject />
		</div>
	</div>
</div>
