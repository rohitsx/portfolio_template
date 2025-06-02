<script lang="ts">
	import LeftScrollSvg from "../Svg/LeftScrollSvg.svelte";
	import RightScrollSvg from "../Svg/RightScrollSvg.svelte";

	let {
		rightScroll,
		handleScroll,
	}: { rightScroll?: boolean; handleScroll: () => void } = $props();

	let divClassName = `absolute top-0 h-full w-48 pointer-events-none z-10 flex items-center  ${rightScroll ? "pr-4 justify-end right-0" : "pl-4 justify-start left-0"} `;
	let btnAriaLabel = rightScroll ? "Scroll right" : "Scroll left";
</script>

<div class={divClassName}>
	<button
		onclick={handleScroll}
		class="pointer-events-auto bg-[#b8bb26] text-[#282828] rounded-full p-3 shadow-lg hover:bg-[#a9b665] transition-colors duration-200 flex items-center justify-center"
		aria-label={btnAriaLabel}
	>
		{#if rightScroll}
			<RightScrollSvg />
		{:else}
			<LeftScrollSvg />
		{/if}
	</button>
</div>
