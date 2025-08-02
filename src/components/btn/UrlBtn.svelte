<script lang="ts">
	let { btnText, btnUrl } = $props();
</script>

<button
	class="bg-[#b8bb26] text-[#282828] py-2 px-4 rounded-md font-semibold transition duration-200 ease-in-out self-start hover:bg-[#a9b665]"
	onclick={() => window.open(btnUrl, "_blank")}
>
	{btnText}
</button>
