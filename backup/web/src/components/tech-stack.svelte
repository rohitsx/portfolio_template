<script>
	import TechStackSection from "./TechStackSection.svelte";

	const frontEnd = [
		"TypeScript",
		"JavaScript",
		"React",
		"Next.js",
		"Svelte",
		"WebRTC",
		"Vite",
		"crxJS",
		"Chrome Extensions",
	];

	const devOps = [
		"Git",
		"GitHub Actions",
		"CI/CD",
		"Docker",
		"Nginx",
		"AWS EC2",
		"Google Compute Engine",
	];

	const backend = [
		"Deno",
		"Node.js",
		"Python",
		"Express",
		"FastAPI",
		"Oak",
		"SQL",
		"NoSQL",
		"Redis",
		"Prisma ORM",
		"PHP",
	];
</script>

<div
	class="bg-[#282828] space-y-10 p-4 rounded-r-lg md:rounded-sm hidden md:block"
>
	<h2 class="text-2xl font-bold text-[#a9b665]">Tech Stack</h2>
	<div class="space-y-8">
		<TechStackSection title="Frontend" items={frontEnd} />
		<TechStackSection title="Backend" items={backend} />
		<TechStackSection title="Devops" items={devOps} />
	</div>
</div>
