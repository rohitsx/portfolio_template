<script lang="ts">
	import Bio from "$leftDiv/Bio.svelte";
	import Resume from "$rightDiv/Resume.svelte";
	import SideProject from "$rightDiv/SideProject.svelte";
	import Tools from "$rightDiv/Tools.svelte";
	import Video from "$rightDiv/Video.svelte";
	import {name, pageTitle, keywords, pageDescription,canonicalUrl, ogImageUrl } from "$lib/metaData"

</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={name} />

	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:site_name" content={`${name}'s Portfolio`} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:creator" content="@rohitsxx" />

	<script type="application/ld+json">
		{JSON.stringify(structuredData)}
	</script>
</svelte:head>

<div class="bg-[#1a1a1a] px-0 mx-auto text-lg lg:px-9 xl:px-48 2xl:px-150">
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
