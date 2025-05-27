<script lang="ts">
	import Bio from "../components/bio.svelte";
	import ChromeExtension from "../components/chrome-extension.svelte";
	import Resume from "../components/resume.svelte";
	import Saas from "../components/saas.svelte";
	import SideProject from "../components/side-project.svelte";
	import Videos from "../components/video.svelte";
</script>

<div class="md:flex gap-8 py-8 md:flex-row">
	<div class="pr-8 md:pr-0 md:w-2/5"><Bio /></div>
	<div class="md:w-3/5 space-y-12 px-3 md:px-0">
		<div class="space-y-12 md:space-y-0 md:flex md:flex-row md:gap-8">
			<Saas />
			<ChromeExtension />
		</div>
		<div class="space-y-12">
			<Resume />
			<SideProject />
			<Videos />
		</div>
	</div>
</div>
