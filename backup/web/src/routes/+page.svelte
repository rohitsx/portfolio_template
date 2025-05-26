<script lang="ts">
	import Bio from "../components/bio.svelte";
	import ChromeExtension from "../components/chrome-extension.svelte";
	import Resume from "../components/resume.svelte";
	import Saas from "../components/saas.svelte";
	import SideProject from "../components/side-project.svelte";
	import Videos from "../components/video.svelte";
</script>

<div class="md:flex py-8 md:flex-row md:max-w-8xl">
	<div class="pr-8 md:pr-16 mb-8 md:ml-16 md:max-w-2xl"><Bio /></div>
	<div>
		<div class="md:flex md:flex-row gap-6 max-w-6xl">
			<Saas />
			<ChromeExtension />
		</div>
		<div class="max-w-3xl space-y-8">
			<Resume />
			<SideProject />
			<Videos />
		</div>
	</div>
</div>
