<script lang="ts">
	import Bio from "$leftDiv/Bio.svelte";
	import Resume from "$rightDiv/Resume.svelte";
	import SideProject from "$rightDiv/SideProject.svelte";
	import Tools from "$rightDiv/Tools.svelte";
	import Video from "$rightDiv/Video.svelte";

	const name = "Rohit Bind";
	const jobTitle = "Full Stack Developer";
	const location = "Chhattisgarh, India";

	// --- Primary SEO Content ---
	const pageTitle = `${name} | Full Stack Developer & Freelancer in ${location}`;
	const pageDescription = `Hire ${name}, a professional full stack developer and freelancer based in Chhattisgarh, India. Specializing in modern backend technologies to build robust and scalable web applications. Let's build something great together.`;
	const keywords =
		"rohit bind, full stack developer, full stack freelancer, hire full stack developer, web developer, backend developer, developer in chhattisgarh, developer in india, svelte developer, nodejs developer";

	// --- URLs (IMPORTANT: Update these!) ---
	const canonicalUrl = "https://www.devrohit.tech"; // <-- Replace with your actual domain
	const ogImageUrl = "https://avatars.githubusercontent.com/u/90490761?v=4";

	// --- Social Profiles (Pulled from your page) ---
	const socialProfiles = [
		"https://www.linkedin.com/in/rohitsx",
		"https://github.com/rohitsx",
		"https://x.com/rohitsxx",
	];

	// --- JSON-LD Structured Data for Google Rich Results ---
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: name,
		url: canonicalUrl,
		image: ogImageUrl,
		jobTitle: jobTitle,
		description: pageDescription,
		worksFor: {
			"@type": "Organization",
			name: "Freelance",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Chhattisgarh",
			addressCountry: "IN",
		},
		sameAs: socialProfiles,
		knowsAbout: [
			"Full Stack Development",
			"Backend Development",
			"Freelancing",
			"Svelte",
			"Node.js",
			"JavaScript",
			"TypeScript",
			"Software Development",
		],
	};
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={name} />

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook / LinkedIn -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:site_name" content={`${name}'s Portfolio`} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:creator" content="@rohitsxx" />

	<!-- JSON-LD Structured Data for Rich Results -->
	<script type="application/ld+json">
		{JSON.stringify(structuredData)}
	</script>
</svelte:head>

<div class="bg-[#1a1a1a] px-0 mx-auto text-lg lg:px-9 xl:px-48 2xl:px-113">
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
