<script lang="ts">
	import ProductTemplete from "./product-templete.svelte";
	import { type Product } from "$lib/types/product-type";

	const products: Product[] = [
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
	];
</script>

<ProductTemplete {products} title="Chrome Extension" urlIcon={false} />
