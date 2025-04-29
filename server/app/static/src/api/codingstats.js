export default function getCodingStats() {

	try{

    document.addEventListener("DOMContentLoaded", async () => {
		      const res = await fetch(`${window.env.API_URL}/weekstats`);
			const data = await res.json();

    const {
        daily_average,
        time_coding,
        main_project,
        main_editor,
        languages
    } = data

				function addCodingStats(){
									const timeCoding = document.getElementById("time-coding")
									const mainProject = document.getElementById("main-project")
									const dailyAverage = document.getElementById("daily-average")
									const mainEditor = document.getElementById("main-editor")

				timeCoding.innerText = time_coding
				mainProject.innerText = main_project
				dailyAverage.innerText = daily_average
				mainEditor.innerText = main_editor

			}

			function addLangBreakDown(){

				languages.forEach(lang => {
					const langBreakDown = document.getElementById("language-breakdown");
													      const listItem = document.createElement("li");
					listItem.innerHTML =
					`
							<div class="text-zinc-200 font-mono text-sm p-2 w-full ">
								<div class="flex justify-between mb-2 text-[#EBDBB2]">
									<span class="font-bold">${lang.name}</span>
									<span>${lang.hours}h (${lang.percent}%)</span>
								</div>
								<div class="w-full bg-zinc-800 rounded-full ">
									<div class="bg-orange-400 h-2 rounded-full" style="width: ${lang.percent}%"></div>
								</div>
							</div>
`

						
						langBreakDown.appendChild(listItem)

				})

			}
			addCodingStats()
			addLangBreakDown()
			

})
	}
	catch(err) {
		return "Error fetching coding stats:", err;
	}

	console.log(`${window.env.API_URL}/weekstats`)
}
