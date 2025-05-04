const fetchIsCoding = () => {
	document.addEventListener("DOMContentLoaded", async () => {
		const codingStats = document.getElementById("coding-stats");
		try {
			codingStats.innerHTML = `
      <span class="w-2 h-2 rounded-full mr-2 bg-[#928364] opacity-50"></span>
      <span class="text-[#928364] italic">checking status...</span>
    `;

			const res = await fetch(`${window.env.API_URL}/iscoding`);
			if (res.status !== 200)
				codingStats.appendChild(`<p>error fetch status</p>`);
			const { status, language, project } = await res.json();

			console.log(status, language, project);
			if (status) {
				codingStats.innerHTML = `
						<span class="w-2 h-2 rounded-full bg-[#928364] mr-2 animate-ping"></span>
  <p>coding right now <span class="italic underline font-bold">i</span></p>

  <div
    class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#1d2021] 
           border border-[#504945] rounded shadow-lg invisible group-hover:visible 
           transition-opacity opacity-0 group-hover:opacity-100 duration-200 pointer-events-none 
           whitespace-nowrap z-10 min-w-[160px]">
    <p class="text-[#83a598]">Project: <span class="text-[#ebdbb2]">${project}</span></p>
    <p class="text-[#83a598]">Language: <span class="text-[#ebdbb2]">${language}</span></p>
  </div>
				`;
			} else {
				codingStats.innerHTML = `
						<span class="w-2 h-2 rounded-full bg-[#928364] mr-2 animate-pulse"></span>
						<p>not coding right now</p>
				`;
			}
		} catch (err) {
			codingStats.appendChild(`<p>error fetch status</p>`);
			return "Error fetching coding stats:", err;
		}
	});
};

export default fetchIsCoding;
