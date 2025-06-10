<script lang="ts">
	import Bio from "$leftDiv/Bio.svelte";
	import Resume from "$rightDiv/Resume.svelte";
	import SideProject from "$rightDiv/SideProject.svelte";
	import Tools from "$rightDiv/Tools.svelte";
	import Video from "$rightDiv/Video.svelte";
</script>

<div class="px-0 mx-auto text-lg lg:px-9 xl:px-48 2xl:px-113">
	<div class="py-6 md:flex md:gap-8 md:flex-row">
		<div class="pr-6 md:pr-0 md:w-2/5"><Bio /></div>
		<div class="space-y-12 px-3 md:w-3/5 md:pl-0 lg:px-0">
			<Tools />
			<Resume />
			<SideProject />
			<Video />
		</div>
	</div>
</div>
