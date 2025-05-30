<script lang="ts">
	import ProductTemplete from "./product-templete.svelte";
	import { type Product } from "$lib/types/product-type";

	const products: Product[] = [
		{
			id: 1,
			name: "JobFitResume",
			description: "Tailor your resume to the job description.",
			buttonText: "Tailor Resume",
			imageUrl:
				"https://res.cloudinary.com/dsegnno0z/image/upload/v1748168053/2025-05-25_15-38_1_ejpoyj.png",
			buttonUrl: "https://jobfitresume.vercel.app",
		},
		{
			id: 2,
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
			id: 3,
			name: "JpgToPng",
			description: "Convert JPG to PNG in seconds",
			buttonText: "Try",
			imageUrl:
				"https://res.cloudinary.com/dsegnno0z/image/upload/v1748168053/2025-05-25_15-39_1_wg0tyb.png",
			buttonUrl: "https://jpg-to-png-seven.vercel.app",
		},
	];
</script>

<ProductTemplete {products} title="Tools I Build" />
