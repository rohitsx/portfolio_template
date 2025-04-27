import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, data }) => {
  const projectsData = () => [
    {
      full_name: "streamsync",
      description:
        "StreamSync integrates voice with super chats for a more interactive streaming experience.",
      homepage: "https://streamSync.fun",
      html_url: "https://github.com/rohitsx/streamSync",
      techStack: ["react", "crjsx vite background ", "webrtc"],
    },
    {
      full_name: "omegle-clone",
      description:
        "real-time video chat app inspired by Omegle. It allows users to connect with strangers for live video calls and text chats.",
      html_url: "https://github.com/rohitsx/omegleClone",
      techStack: ["react", "nodejs", "socket.io", "webrtc"],
    },
    {
      full_name: "ai-movie-chatbot",
      description:
        "REST API chatbot allows users to interact with movie characters, retrieve movie scripts, and perform semantic searches using AI techniques.",
      html_url: "https://github.com/rohitsx/aiMovieChatbot",
      techStack: ["python", "fastapi", "langchain", "gemini"],
    },
  ];

  const workData = () => [
    {
      type: "freelance",
      projectName: "jpg to png converter",
      description:
        "Built a responsive image conversion web app (JPG to PNG) from scratch. Features include user authentication, cloud uploads (Google Drive, Dropbox), image history, scalable backend processing.",
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
      projectUrl: "https://squadx.devrohit.tech/",
      role: "fullstack developer",
      github: "https://github.com/rohitsx/SquadX",
    },
  ];

  const fetchRepos = async () => {
    const priority = [
      "rohitsx/streamSync",
      "rohitsx/omegleClone",
      "rohitsx/aiMovieChatbot",
      "rohitsx/webRTC",
    ];

    const priorityMap = new Map(priority.map((name, index) => [name, index]));
    const res = await fetch(
      "https://api.github.com/users/rohitsx/repos?per_page=100&sort=updated&type=owner",
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch repositories: ${res.status}`);
    }

    const repos = await res.json();

    return repos
      .map((repo: any) => ({
        full_name: repo.full_name,
        description: repo.description,
        homepage: repo.homepage,
        html_url: repo.html_url,
        priority: priorityMap.get(repo.full_name) ?? Infinity,
      }))
      .sort((a: any, b: any) => a.priority - b.priority);
  };

  return {
    // gitRepos: await fetchRepos(),
    ...data,
    projectsData: projectsData(),
    workData: workData(),
  };
};
