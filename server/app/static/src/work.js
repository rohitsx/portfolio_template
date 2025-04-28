const addWork = () => {
	const workData = [
	{
		type: "freelance",
		projectName: "jpg to png converter",
		description:
			"Built a responsive image conversion app. Features include user authentication, cloud uploads (Google Drive, Dropbox), image history, scalable backend processing.",
		company: "upwork",
		duration: "feb 25 - present",
		projectUrl: "https://jpg-to-png-seven.vercel.app/",
		role: "fullstack developer",
	},
	{
		type: "freelance",
		projectName: "SquadX",
		duration: "aug 24 - nov 24",
		description:
			"build social media platform from scratch that lets you connect with strangers via video chat, alongside other engaging social media features.",
		role: "fullstack developer",
		github: "https://github.com/rohitsx/SquadX",
	},
];


document.addEventListener("DOMContentLoaded", function() {
	const worklist = document.getElementById("work-list");


	workData.forEach(project => {
		const listItem = document.createElement("li");
		listItem.classList.add("mb-6");

		let techStackHtml = "";
		listItem.innerHTML = `
      <a href="${project.projectUrl || project.github}" class="text-[#8ec07c] underline hover:text-[#689d6a] text-xl" target="_blank">
        ${project.projectName}
      </a>
			<div class="text-[#83a598] mt-3">
				${project.company || "Freelance Gig"} 		
			</div>
			<div class="text-[#458588]">
				( ${project.duration} ) 		
			</div>
      <div class="text-[#EBDBB2] mt-2">
        ${project.description}
      </div>
      ${techStackHtml}
    `;

		worklist.appendChild(listItem);
	});
});


}



export default addWork;
