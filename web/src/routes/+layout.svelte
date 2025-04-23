<script>
	let { children } = $props();
	import "../app.css";
	import Navbar from "./layout/navbar.svelte";
</script>

<div class="antialiased max-w-3xl mx-4 mt-8 mx-auto">
	<Navbar />
	{@render children()}
</div>

<style>
	:root {
		background-color: #030a14; /* Dark blue-black background */
		--font-sans: "iA Writer Quattro", -apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
	}
	:global(html)::before {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 9999;
		background: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 0.2px,
			rgba(110, 100, 20, 0.25) 1px,
			rgba(110, 100, 20, 0.25) 2px
		);
		background-size: 100% 4px;
	}
</style>
