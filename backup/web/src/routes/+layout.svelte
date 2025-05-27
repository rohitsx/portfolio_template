<script>
	let { children } = $props();
	import "../app.css";
</script>

<div class="px-0 md:px-50 mx-auto text-lg">
	{@render children()}
</div>
