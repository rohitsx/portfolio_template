import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-500 mb-2">Rohit Bind</h1>
          <p className="text-gray-500 text-lg">Full Stack Developer</p>
          <div className="mt-5 text-gray-500">
            <a
              href="mailto:rohitbindw@gmail.com"
              className="text-green-500 hover:underline"
            >
              rohitbindw@gmail.com
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/rohitsx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              GitHub
            </a>
          </div>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://twitter.com/rohitsxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://devrohit.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/rohitsx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </header>

        {/* Projects */}
        <main className="space-y-8">
          {/* StreamSync */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-green-500 mb-4">
              StreamSync
            </h3>
            <p className="text-gray-300 mb-4">
              A Chrome extension for real-time voice interactions and dynamic
              live chat rendering for YouTube live streams.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React",
                "TypeScript",
                "Deno",
                "WebRTC",
                "Redis",
                "MongoDB",
                "Docker",
                "Nginx",
                "Google Cloud",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-white px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://streamsync.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* SquadX */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-green-500 mb-4">SquadX</h3>
            <p className="text-gray-300 mb-4">
              A real-time video chat app enabling users to connect with
              strangers, supporting solo and squad (duo) modes.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "Socket.IO",
                "WebRTC",
                "Prisma ORM",
                "PostgreSQL",
                "Docker",
                "Nginx",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-white px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="http://squadx.devrohit.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href="https://github.com/rohitsx/SquadX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>

          {/* OmegleClone */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-green-500 mb-4">
              OmegleClone
            </h3>
            <p className="text-gray-300 mb-4">
              Open-source random video chat app inspired by Omegle, featuring
              real-time video calls and text chats.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React",
                "Socket.IO",
                "WebRTC",
                "Express.js",
                "Redis",
                "AWS",
                "Nginx",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-white px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/rohitsx/omegleClone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>

          {/* Web3 Wallet */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-green-500 mb-4">
              Web3 Wallet
            </h3>
            <p className="text-gray-300 mb-4">
              A user-friendly crypto wallet supporting Solana and Ethereum
              blockchains.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-white px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://wallet.devrohit.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href="https://github.com/rohitsx/web3-wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline flex items-center gap-1"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
