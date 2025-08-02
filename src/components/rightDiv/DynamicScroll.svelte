<script lang="ts">
	import type { Items } from "$lib/types/DynamicScroll.type";
	import { onMount, onDestroy } from "svelte";
	import UrlIconSvg from "../Svg/UrlIconSvg.svelte";
	import ScrollBtn from "$btn/ScrollBtn.svelte";
	import UrlBtn from "$btn/UrlBtn.svelte";
	import VideoSvg from "../Svg/VideoSvg.svelte";

	let {
		items,
		title,
		icon = "url",
	}: {
		items: Items[];
		title: string;
		icon?: "url" | "video";
	} = $props();

	let scrollContainer: HTMLDivElement | null;
	let showRightElements: boolean = $state(true);
	let showLeftElements: boolean = $state(false);

	function checkScroll(): void {
		if (scrollContainer) {
			showRightElements =
				scrollContainer.scrollWidth - scrollContainer.scrollLeft >
				scrollContainer.clientWidth + 1;
			showLeftElements = scrollContainer.scrollLeft > 1;
		}
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

	function scrollLeft(): void {
		if (scrollContainer) {
			scrollContainer.scrollBy({
				left: -scrollContainer.clientWidth / 2,
				behavior: "smooth",
			});
		}
	}
</script>

<div>
	<div class="flex items-center mb-5">
		{#if icon == "url"}<UrlIconSvg />{:else}<VideoSvg />{/if}
		<h2 class="text-2xl font-bold text-[#a9b665]">{title}</h2>
	</div>

	<div class="relative w-full">
		<div
			bind:this={scrollContainer}
			class="flex flex-row gap-8 overflow-x-auto custom-scrollbar"
		>
			{#each items as item (item.id)}
				<div
					class="bg-[#282828] p-4 max-h-86 rounded-lg shadow-md flex flex-col flex-none w-64"
				>
					<div class="flex-shrink-0 mb-4 rounded-md overflow-hidden">
						<img
							src={item.imageUrl}
							alt={item.name ? item.name : String(item.id)}
							class="w-full h-32 object-cover rounded-md"
						/>
					</div>

					{#if item.name}
						<h3 class="text-xl font-semibold text-[#a9b665] mb-2">
							{item.name}
						</h3>
					{/if}

					<p class="text-base mb-4">
						{item.description}
					</p>
					<div class="flex gap-4 mt-auto">
						<UrlBtn
							btnText={item.buttonText ? item.buttonText : "watch"}
							btnUrl={item.buttonUrl}
						/>
						{#if item.buttonText2}
							<UrlBtn btnText={item.buttonText2} btnUrl={item.buttonUrl2} />
						{/if}
					</div>
				</div>
			{/each}
		</div>

		{#if showLeftElements}<ScrollBtn handleScroll={scrollLeft} />{/if}

		{#if showRightElements}<ScrollBtn
				rightScroll
				handleScroll={scrollRight}
			/>{/if}
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
