<script lang="ts">
	import Bio from "../components/bio.svelte";
	import Resume from "../components/resume.svelte";
	import SideProject from "../components/side-project.svelte";
	import Tools from "../components/tools.svelte";
	import Videos from "../components/video.svelte";
</script>

<div class="px-0 mx-auto text-lg lg:px-20 xl:px-50">
	<div class="py-6 md:flex md:gap-8 md:flex-row">
		<div class="pr-6 md:pr-0 md:w-2/5"><Bio /></div>
		<div class="space-y-12 px-3 md:w-3/5 md:pl-0 lg:px-0">
			<Tools />
			<Resume />
			<SideProject />
			<Videos />
		</div>
	</div>
</div>
