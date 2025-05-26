<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { type YouTubeVideo } from "$lib/types/youtube-video-type";

	let { videos }: { videos: YouTubeVideo[] } = $props();

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

	function toggleDescription(videoId: string): void {
		expandedDescriptions = {
			...expandedDescriptions,
			[videoId]: !expandedDescriptions[videoId],
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

	function getYouTubeWatchUrl(videoId: string): string {
		return `https://www.youtube.com/watch?v=${videoId}`;
	}
</script>

<div>
	<div class="flex items-center mb-6">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="h-6 w-6 mr-3 text-[#a9b665]"
		>
			<path
				d="M19.615 3.184c-1.342-.164-2.825-.268-4.32-.268C13.43 2.916 12 3 12 3s-1.43.084-3.295.268c-1.495.1-2.978.204-4.32.268C2.56 3.738 2 4.336 2 5.06v13.88C2 19.664 2.56 20.262 3.285 20.364c1.342.164 2.825.268 4.32.268C10.57 21.084 12 21 12 21s1.43-.084 3.295-.268c1.495-.1 2.978-.204 4.32-.268C21.44 20.262 22 19.664 22 18.94V5.06c0-.724-.56-1.322-1.385-1.476zM10.233 15.35V8.65L15.82 12l-5.587 3.35z"
			/>
		</svg>
		<h2 class="text-2xl font-bold text-[#a9b665]">Demo Videos</h2>
	</div>

	<div class="relative w-full">
		<div
			bind:this={scrollContainer}
			class="flex flex-row gap-6 overflow-x-auto custom-scrollbar"
		>
			{#each videos as video (video.id)}
				<div
					class="bg-[#282828] p-4 h-89 rounded-lg shadow-md flex flex-col flex-none w-64"
				>
					<div class="flex-shrink-0 mb-4 rounded-md overflow-hidden">
						<img
							src={video.thumbnailUrl}
							alt={video.title}
							class="w-full h-44 object-cover rounded-md"
						/>
					</div>
					<p
						class="text-base mb-4"
						class:line-clamp-4={!expandedDescriptions[video.id]}
					>
						{video.title}
					</p>
					{#if video.channelName}
						<a
							href={video.channelUrl || "#"}
							target="_blank"
							rel="noopener noreferrer"
							class="text-[#AAAAAA] text-sm mb-2 hover:underline"
						>
							{video.channelName}
						</a>
					{/if}
					<div class="flex gap-4 mt-auto">
						<button
							class="bg-[#b8bb26] text-[#282828] py-2 px-4 rounded-md font-semibold transition duration-200 ease-in-out self-start hover:bg-[#a9b665]"
							onclick={() =>
								window.open(getYouTubeWatchUrl(video.id), "_blank")}
						>
							Watch Now
						</button>
					</div>
				</div>
			{/each}
		</div>

		{#if showRightElements}
			<div
				class="absolute right-0 top-0 h-full w-48 pointer-events-none z-10 flex items-center justify-end pr-4"
				style="background: linear-gradient(to left, rgba(40,40,40,0.7) 0%, rgba(40,40,40,0) 100%);"
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
