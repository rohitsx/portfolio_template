<script lang="ts">
	import ProductTemplete from "./product-templete.svelte";
	import { type Product } from "$lib/types/product-type";

	const products: Product[] = [
		{
			id: 1,
			name: "JobFitResume",
			description: "Generate AI UGC video ads for your product",
			buttonText: "Tailor Resume",
			imageUrl:
				"https://res.cloudinary.com/dsegnno0z/image/upload/v1748168053/2025-05-25_15-38_1_ejpoyj.png",
			productUrl: "https://jobfitresume.vercel.app",
		},

		{
			id: 2,
			name: "JpgToPng",
			description: "Convert JPG to PNG in seconds",
			buttonText: "Try",
			imageUrl:
				"https://res.cloudinary.com/dsegnno0z/image/upload/v1748168053/2025-05-25_15-39_1_wg0tyb.png",
			productUrl: "https://jpg-to-png-seven.vercel.app",
		},
	];
</script>

<ProductTemplete {products} title="SAAS I Build" />
