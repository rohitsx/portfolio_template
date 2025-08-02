<script lang="ts">
	import DynamicScroll from "./DynamicScroll.svelte";
	import type { Items } from "$lib/types/DynamicScroll.type";

	const products: Items[] = [
		{
			id: 1,
			name: "StreamSync",
			description:
				"Voice to Super Chats for direct creator-audience interaction.",
			buttonText: "Try",
			imageUrl: "https://img.youtube.com/vi/36hbYPvvbVQ/0.jpg",
			buttonUrl: "https://streamsync.fun",
			buttonText2: "Github",
			buttonUrl2: "https://github.com/rohitsx/StreamSync",
		},

		{
			id: "36hbYPvvbVQ",
			name: "StreamSync Demo",
			description: "StreamSync Youtube Demo video",
			imageUrl: "https://img.youtube.com/vi/36hbYPvvbVQ/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=36hbYPvvbVQ",
		},

		{
			id: "ruUl1iP9fH8",
			name: "JobFit Resume",
			description:
				"Tailor your resume to the job description. (Youtube Demo Video)",
			imageUrl:
				"https://res.cloudinary.com/dsegnno0z/image/upload/v1748168053/2025-05-25_15-38_1_ejpoyj.png",
			buttonUrl: "https://www.youtube.com/watch?v=ruUl1iP9fH8",
		},
	];
</script>

<DynamicScroll items={products} title="Featured" />
