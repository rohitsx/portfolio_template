<script>
	let { children } = $props();
	import "../app.css";
	import Navbar from "$lib/layout/navbar.svelte";
</script>

<div class="max-w-2xl mx-auto mt-4">
	<Navbar />
	{@render children()}
</div>
