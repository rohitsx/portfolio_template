<script>
	import TechStackSection from "./TechStackSection.svelte";

	const frontEnd = [
		"TypeScript",
		"JavaScript",
		"React",
		"Next.js",
		"Svelte",
		"tailwindcss",
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
		"RAG",
		"Langchain",
		"Chroma",
		"Pinecone",
		"Qdrant",
		"Vector Db",
	];

	const others = ["Nvim", "Claude", "Gemini"];
</script>

<div
	class="bg-[#282828] space-y-6 p-4 rounded-r-lg md:rounded-sm hidden md:block"
>
	<h2 class="text-xl font-bold text-[#a9b665]">Tech Stack</h2>
	<div class="space-y-5 text-sm">
		<TechStackSection title="Frontend" items={frontEnd} />
		<TechStackSection title="Backend" items={backend} />
		<TechStackSection title="Devops" items={devOps} />
		<TechStackSection title="Other" items={others} />
	</div>
</div>
