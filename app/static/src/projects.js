const addProjects = () => {
  const projectsData = () => [
    {
      full_name: "streamsync",
      description:
        "streamsync integrates voice with super chats for a more interactive streaming experience.",
      homepage: "https://streamSync.fun",
      html_url: "https://github.com/rohitsx/streamSync",
      techStack: [
        "react", // frontend
        "typescript", // frontend
        "webrtc", // backend
        "deno", // backend
        "redis", // backend
        "mongodb", // backend
        "docker", // devops
        "nginx", // devops
        "google cloud", // devops
      ],
    },
    {
      full_name: "omegle-clone",
      description:
        "real-time video chat app inspired by omegle. It allows users to connect with strangers for live video calls and text chats.",
      html_url: "https://github.com/rohitsx/omegleClone",
      techStack: [
        "react", // Frontend
        "webrtc", // Backend
        "nodejs", // Backend
        "socket.io", // Backend
        "redis", // Backend
      ],
    },
    {
      full_name: "ai-movie-chatbot",
      description:
        "rest api chatbot allows users to interact with movie characters, retrieve movie scripts, and perform semantic searches using ai techniques.",
      html_url: "https://github.com/rohitsx/aiMovieChatbot",
      techStack: [
        "python", // Backend
        "fastapi", // Backend
        "redis", // Backend
        "langchain", // Backend
        "gemini", // Backend
      ],
    },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const projectsList = document.getElementById("projects-list");
    const projects = projectsData();

    projects.forEach((project) => {
      const listItem = document.createElement("li");
      listItem.classList.add("mb-6");

      let techStackHtml = "";
      if (project.techStack && project.techStack.length > 0) {
        techStackHtml = `
        <div class="flex flex-wrap gap-2 mt-1">
          ${project.techStack.map((tech) => `<span class="text-[#fe8019] text-xs">${tech}</span>`).join("")}
        </div>
      `;
      }

      listItem.innerHTML = `
      <a href="${project.homepage || project.html_url}" class="text-[#8ec07c] underline hover:text-[#689d6a] text-xl" target="_blank">
        ${project.full_name}
      </a>
      <div class="text-[#EBDBB2]  mt-3">
        ${project.description}
      </div>
      ${techStackHtml}
    `;

      projectsList.appendChild(listItem);
    });
  });
};

export default addProjects;
