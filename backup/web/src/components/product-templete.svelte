<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { type Product } from "$lib/types/product-type";

	let {
		products,
		title,
		urlIcon = true,
	}: { products: Product[]; title: string; urlIcon?: boolean } = $props();

	let scrollContainer: HTMLDivElement | null;
	let showRightElements: boolean = $state(true);

	let expandedDescriptions: { [key: string]: boolean } = $state({});

	function checkScroll(): void {
		if (scrollContainer) {
			showRightElements =
				scrollContainer.scrollWidth - scrollContainer.scrollLeft >
				scrollContainer.clientWidth + 1;
		}
	}

	function toggleDescription(productId: string): void {
		expandedDescriptions = {
			...expandedDescriptions,
			[productId]: !expandedDescriptions[productId],
		};
	}

	onMount(() => {
		checkScroll();
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", checkScroll);
		}
	});

	onDestroy(() => {
		if (scrollContainer) {
			scrollContainer.removeEventListener("scroll", checkScroll);
		}
	});

	function scrollRight(): void {
		if (scrollContainer) {
			scrollContainer.scrollBy({
				left: scrollContainer.clientWidth / 2,
				behavior: "smooth",
			});
		}
	}
</script>

<div>
	<div class="flex items-center mb-5">
		{#if urlIcon}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="h-6 w-6 mr-3 text-[#a9b665]"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
				/>
			</svg>
		{/if}
		<h2 class="text-2xl font-bold text-[#a9b665]">{title}</h2>
	</div>

	<div class="relative w-full">
		<div
			bind:this={scrollContainer}
			class="flex flex-row gap-8 overflow-x-auto custom-scrollbar"
		>
			{#each products as product (product.id)}
				<div
					class="bg-[#282828] p-4 h-86 rounded-lg shadow-md flex flex-col flex-none w-64"
				>
					<div class="flex-shrink-0 mb-4 rounded-md overflow-hidden">
						<img
							src={product.imageUrl}
							alt={product.name}
							class="w-full h-32 object-cover rounded-md"
						/>
					</div>
					<h3 class="text-xl font-semibold text-[#a9b665] mb-2">
						{product.name}
					</h3>
					<p
						class="text-base mb-4"
						class:line-clamp-4={!expandedDescriptions[product.id]}
					>
						{product.description}
					</p>
					{#if product.description.length > 100}
						<button
							class="text-[#A7C9A7] text-sm mb-4 self-start hover:underline"
							onclick={() => toggleDescription(String(product.id))}
						>
							{expandedDescriptions[product.id] ? "Show Less" : "Read More"}
						</button>
					{/if}
					<div class="flex gap-4 mt-auto">
						<button
							class="bg-[#b8bb26] text-[#282828] py-2 px-4 rounded-md font-semibold transition duration-200 ease-in-out self-start hover:bg-[#a9b665]"
							onclick={() => window.open(product.buttonUrl, "_blank")}
						>
							{product.buttonText}
						</button>
						{#if product.buttonText2}
							<button
								class="bg-[#b8bb26] text-[#282828] py-2 px-4 rounded-md font-semibold transition duration-200 ease-in-out self-start hover:bg-[#a9b665]"
								onclick={() => window.open(product.buttonUrl2, "_blank")}
							>
								{product.buttonText2}
							</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		{#if showRightElements}
			<div
				class="absolute right-0 top-0 h-full w-48 pointer-events-none z-10 flex items-center justify-end pr-4"
				style="background: linear-gradient(to left, rgba(60,56,54,0.7) 0%, rgba(60,56,54,0) 100%);"
			>
				<button
					onclick={scrollRight}
					class="hidden md:block pointer-events-auto bg-[#b8bb26] text-[#282828] rounded-full p-3 shadow-lg hover:bg-[#a9b665] transition-colors duration-200 flex items-center justify-center"
					aria-label="Scroll right"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.custom-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.custom-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
