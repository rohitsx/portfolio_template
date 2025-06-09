<script lang="ts">
	import { onMount } from "svelte";
	import TechStack from "./tech-stack.svelte";
	import type { LanguagesProp } from "$lib/types/WakaTime.type";

	let codingActivity: any = null;
	let languages: LanguagesProp | null = null;

	onMount(async () => {
		let lares = await fetch(
			"https://wakatime.com/share/@rohitsx/8ddff605-587d-4c35-bf4a-d09b21d26194.json",
		);
		// let cares = await fetch(
		// 	"https://wakatime.com/share/@rohitsx/31429488-010d-4ae1-90b4-403b1049b880.json",
		// );

		languages = await lares.json();
		console.log(languages);
		// codingActivity = await cares.json();
	});

	console.log(languages);
</script>

<div>
	<div
		class="flex flex-wrap mb-4 space-x-4 text-sm pl-4 md:space-x-3 lg:space-x-4 lg:text-lg"
	>
		<a href="mailto:rohitbindw@gmail.com" class="text-[#B8BB26] hover:underline"
			>rohitbindw@gmail.com</a
		>
		<a
			href="https://www.linkedin.com/in/rohitsx"
			target="_blank"
			class="text-[#B8BB26] hover:underline">LinkedIn</a
		>
		<a
			href="https://wakatime.com/@rohitsx"
			target="_blank"
			class="text-[#B8BB26] hover:underline md:hidden 2xl:block">Wakatime</a
		>
		<a
			href="https://github.com/rohitsx"
			target="_blank"
			class="text-[#B8BB26] hover:underline">GitHub</a
		>
		<a
			href="https://x.com/rohitsxx"
			target="_blank"
			class="text-[#B8BB26] hover:underline">X</a
		>
	</div>
	<div class="space-y-10">
		<div class="bg-[#282828] space-y-2 p-4 rounded-r-lg md:rounded-sm">
			<div class="flex flex-row gap-3 items-baseline">
				<h1 class="text-4xl font-bold text-[#B8BB26]">Rohit</h1>
				<p class="text-[#A7C9A7] italic">India</p>
			</div>
			<p>
				final-year cs student with intrest in software development, primarily
				focused on backend technologies.
			</p>
		</div>

		{#if languages}
			<div class="bg-[#282828] p-4 h-80 rounded-r-lg md:rounded-sm md:block">
				<h2 class="text-xl font-bold text-[#a9b665] mb-4">
					Languages <span class="text-[#A7C9A7] text-xs italic"
						>Powered by <a href="https://wakatime.com/">wakatime</a></span
					>
				</h2>
				<div class="overflow-y-auto no-scrollbar space-y-1 h-61">
					{#each languages.data as { name, percent, color }}
						<div class="flex gap-3 items-center">
							<h1 class="w-1/4">{name}</h1>
							<div class="w-3/4 flex items-center gap-3">
								<div
									class="bg-amber-50 rounded-sm h-4"
									style="width: {percent +
										(90 - Number(languages.data[0].percent))}%"
								></div>
								<div class="text-[#A7C9A7] italic text-sm">{percent}%</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- <div -->
		<!-- 	class="bg-[#282828] p-4 rounded-r-lg md:rounded-sm hidden md:block" -->
		<!-- ></div> -->
		<TechStack />
	</div>
</div>
