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
			description: "StreamSync Demo Youtube video",
			imageUrl: "https://img.youtube.com/vi/36hbYPvvbVQ/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=36hbYPvvbVQ",
		},

		{
			id: "ruUl1iP9fH8",
			description: "JobFiteResume Demo Youtube Video",
			imageUrl: "https://img.youtube.com/vi/ruUl1iP9fH8/0.jpg",
			buttonUrl: "https://www.youtube.com/watch?v=ruUl1iP9fH8",
		},
	];
</script>

<DynamicScroll items={products} title="Featured" />
