<script>
	let { children } = $props();
	import "../app.css";
</script>

<div class="px-0 md:px-54 mx-auto text-lg">
	{@render children()}
</div>
