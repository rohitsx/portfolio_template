<script lang="ts">
	import ProductTemplete from "./product-templete.svelte";
	import { type Product } from "$lib/types/product-type";

	const products: Product[] = [
		{
			id: 1,
			name: "StreamSync",
			description:
				"StreamSync enhances creator-audience interaction by allowing voice conversations through super chats, moving beyond text-only limitations.",
			buttonText: "Try",
			imageUrl: "https://img.youtube.com/vi/36hbYPvvbVQ/0.jpg",
			buttonUrl: "https://streamsync.fun",
			buttonText2: "Github",
			buttonUrl2: "https://github.com/rohitsx/StreamSync",
		},
	];
</script>

<ProductTemplete {products} title="Chrome Extension" />
