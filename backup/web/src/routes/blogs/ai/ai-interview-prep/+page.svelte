<script>
	import AiInterviewBlog from "./AiInterviewBlog.svelte";

	// --- Page & SEO Content ---
	const title = "The Ultimate Guide to Acing Your AI Interview";
	const description =
		"Your one-stop guide to acing AI and Machine Learning interviews. We cover the entire process from theory and algorithms to system design, coding challenges, and role-specific advice for MLEs, Data Scientists, and Research Scientists.";

	// IMPORTANT: Replace these placeholder URLs with your actual production URLs
	const canonicalUrl = "https://www.devrohit.tech/blogs/ai-interview-guide";
	const ogImageUrl = "https://avatars.githubusercontent.com/u/90490761?v=4";

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": canonicalUrl,
		},
		headline: title,
		description: description,
		image: ogImageUrl,
		author: {
			"@type": "Organization", // Or "Person" if it's a personal blog
			name: "Your Company Name", // Or "Author Name"
		},
		publisher: {
			"@type": "Organization",
			name: "Your Company Name",
			logo: {
				"@type": "ImageObject",
				url: "https://avatars.githubusercontent.com/u/90490761?v=4", // IMPORTANT: Replace with your logo URL
			},
		},
		// IMPORTANT: Replace with the actual publication date
		datePublished: "2023-10-27",
		dateModified: "2023-10-27",
	};

	// --- Table of Contents Content ---
	const sections = [
		{ id: "part1", title: "Part 1: The AI Interview Landscape" },
		{ id: "part2", title: "Part 2: The Foundation - Your Syllabus" },
		{ id: "part3", title: "Part 3: The Gauntlet - Anatomy of an AI Interview" },
		{ id: "part4", title: "Part 4: The Final Touches" },
	];
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:site_name" content="Your Company Name" />
	<meta
		property="article:published_time"
		content={structuredData.datePublished}
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />
	<!-- Optional: Add your site's and the author's Twitter handle -->
	<!-- <meta name="twitter:site" content="@YourCompanyHandle" /> -->
	<!-- <meta name="twitter:creator" content="@AuthorHandle" /> -->

	<!-- JSON-LD Structured Data for Rich Results -->
	<script type="application/ld+json">
		{JSON.stringify(structuredData)}
	</script>
</svelte:head>
<div class="bg-gray-50 dark:bg-gray-900 py-8">
	<AiInterviewBlog />
</div>
