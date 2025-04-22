"use client";

import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaTerminal,
} from "react-icons/fa";
import { RiSpaceShipFill } from "react-icons/ri";

// Gruvbox Dark Hard Theme Colors
const gruvboxTheme = {
  bg: "#1d2021", // darker background for hard variant
  bg1: "#282828", // slightly lighter background
  fg: "#ebdbb2",
  gray: "#928374",
  red: "#fb4934",
  green: "#b8bb26",
  yellow: "#fabd2f",
  blue: "#83a598",
  purple: "#d3869b",
  aqua: "#8ec07c",
  orange: "#fe8019",
};

// Projects data array
const projectsData = [
  {
    title: "STREAMSYNC",
    description:
      "A Chrome extension for real-time voice interactions and dynamic live chat rendering for YouTube live streams.",
    technologies: [
      "React",
      "TypeScript",
      "Deno",
      "WebRTC",
      "Redis",
      "MongoDB",
      "Docker",
      "Nginx",
      "Google Cloud",
    ],
    demoLink: "https://streamsync.fun/",
    sourceLink: null,
  },
  {
    title: "SQUADX",
    description:
      "A real-time video chat app enabling users to connect with strangers, supporting solo and squad (duo) modes.",
    technologies: [
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
    ],
    demoLink: "http://squadx.devrohit.tech/",
    sourceLink: "https://github.com/rohitsx/SquadX",
  },
  {
    title: "OMEGLECLONE",
    description:
      "Open-source random video chat app inspired by Omegle, featuring real-time video calls and text chats.",
    technologies: [
      "React",
      "Socket.IO",
      "WebRTC",
      "Express.js",
      "Redis",
      "AWS",
      "Nginx",
    ],
    demoLink: null,
    sourceLink: "https://github.com/rohitsx/omegleClone",
  },
  {
    title: "WEB3 WALLET",
    description:
      "A user-friendly crypto wallet supporting Solana and Ethereum blockchains.",
    technologies: ["React", "TypeScript", "Ethers.js", "Solana Web3.js"],
    demoLink: "https://wallet.devrohit.tech/",
    sourceLink: "https://github.com/rohitsx/web3-wallet",
  },
];

// CSS for retro terminal effects
const retroStyles = `
  /* CRT effect */
  .terminal-effect {
    position: relative;
    overflow: hidden;
    text-shadow: 0.06rem 0 0.06rem #ea36af, -0.125rem 0 0.06rem #75fa69;
    letter-spacing: 0.125em;
    animation: textShadow 1.6s infinite;
  }

  .terminal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      transparent 0,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 2px
    );
    pointer-events: none;
    z-index: 100;
  }

  .terminal-overlay::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.15) 50%
    );
    background-size: 100% 4px;
    z-index: 2;
    pointer-events: none;
  }

  /* Flickering */
  .terminal-overlay::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.3s infinite;
  }

  @keyframes flicker {
    0% { opacity: 0.27861; }
    5% { opacity: 0.34769; }
    10% { opacity: 0.23604; }
    15% { opacity: 0.90626; }
    20% { opacity: 0.18128; }
    25% { opacity: 0.83891; }
    30% { opacity: 0.65583; }
    35% { opacity: 0.67807; }
    40% { opacity: 0.26559; }
    45% { opacity: 0.84693; }
    50% { opacity: 0.96019; }
    55% { opacity: 0.08594; }
    60% { opacity: 0.20313; }
    65% { opacity: 0.71988; }
    70% { opacity: 0.53455; }
    75% { opacity: 0.37288; }
    80% { opacity: 0.71428; }
    85% { opacity: 0.70419; }
    90% { opacity: 0.7003; }
    95% { opacity: 0.36108; }
    100% { opacity: 0.24387; }
  }

  /* Text shadow animation */
  @keyframes textShadow {
    0% {
      text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    5% {
      text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    10% {
      text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    15% {
      text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    20% {
      text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    25% {
      text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    30% {
      text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    35% {
      text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    40% {
      text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    45% {
      text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    50% {
      text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    55% {
      text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    60% {
      text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    65% {
      text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    70% {
      text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    75% {
      text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    80% {
      text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    85% {
      text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    90% {
      text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    95% {
      text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    100% {
      text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
  }

  /* Cursor blink animation */
  .cursor-blink {
    animation: cursor-blink 1.5s steps(2) infinite;
  }

  @keyframes cursor-blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  /* Scanlines effect */
  .scanlines {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.03) 50%,
      rgba(255, 255, 255, 0) 51%
    );
    background-size: 100% 8px;
    z-index: 200;
    pointer-events: none;
    opacity: 0.15;
  }

  /* Vignette effect */
  .vignette {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 200px rgba(0,0,0,0.9) inset;
    pointer-events: none;
    z-index: 201;
  }

  /* Project card hover effect */
  .project-card {
    transition: all 0.2s ease;
    position: relative;
  }
  
  .project-card:hover {
    transform: scale(1.01);
    box-shadow: 0 0 15px rgba(142, 192, 124, 0.4);
  }

  .project-card:before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 4px;
    height: 100%;
    background: ${gruvboxTheme.green};
    opacity: 0;
    transition: all 0.3s ease;
  }

  .project-card:hover:before {
    opacity: 1;
  }
`;

const GruvboxTerminal = ({ children }) => (
  <div className="terminal-effect relative overflow-hidden">
    {children}
    <div className="terminal-overlay absolute top-0 left-0 right-0 bottom-0 pointer-events-none"></div>
  </div>
);

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [typedText, setTypedText] = useState("");
  const fullText = "FULL STACK DEVELOPER";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="min-h-screen font-mono relative"
      style={{
        backgroundColor: gruvboxTheme.bg,
        color: gruvboxTheme.fg,
        fontFamily: "'Geist Mono', 'JetBrains Mono', monospace",
      }}
    >
      <style>{retroStyles}</style>
      <div className="scanlines"></div>
      <div className="vignette"></div>

      <GruvboxTerminal>
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          {/* Header with terminal-like intro */}
          <header
            className="mb-10 pb-6"
            style={{
              borderBottomWidth: "2px",
              borderBottomColor: gruvboxTheme.yellow,
            }}
          >
            <div className="flex items-center mb-4">
              <FaTerminal
                style={{ color: gruvboxTheme.aqua }}
                className="mr-2"
              />
              <span style={{ color: gruvboxTheme.gray }} className="text-sm">
                terminal@rohit-bind ~ %
              </span>
            </div>

            <h1
              className="text-5xl font-bold mb-2"
              style={{ color: gruvboxTheme.orange }}
            >
              ROHIT BIND
            </h1>
            <div className="h-6 mb-4">
              <span
                style={{ color: gruvboxTheme.green }}
                className="inline-block"
              >
                {typedText}
              </span>
              <span
                className="cursor-blink"
                style={{ color: gruvboxTheme.green }}
              >
                _
              </span>
            </div>

            <div className="mt-5" style={{ color: gruvboxTheme.gray }}>
              <a
                href="mailto:rohitbindw@gmail.com"
                className="hover:underline"
                style={{
                  color: gruvboxTheme.gray,
                  "&:hover": { color: gruvboxTheme.yellow },
                }}
              >
                rohitbindw@gmail.com
              </a>{" "}
              <span style={{ color: gruvboxTheme.fg }}>|</span>{" "}
              <a
                href="https://github.com/rohitsx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{
                  color: gruvboxTheme.gray,
                  "&:hover": { color: gruvboxTheme.yellow },
                }}
              >
                github.com/rohitsx
              </a>
            </div>

            <div className="flex gap-5 mt-5">
              <a
                href="https://twitter.com/rohitsxx"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: gruvboxTheme.blue,
                  "&:hover": { color: gruvboxTheme.aqua },
                }}
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://devrohit.tech"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: gruvboxTheme.blue,
                  "&:hover": { color: gruvboxTheme.aqua },
                }}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/rohitsx"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: gruvboxTheme.blue,
                  "&:hover": { color: gruvboxTheme.aqua },
                }}
              >
                <FaGithub size={24} />
              </a>
            </div>
          </header>

          {/* Main content */}
          <main className="space-y-8">
            {/* Completed Projects */}
            {activeSection === "projects" && (
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <RiSpaceShipFill
                    style={{ color: gruvboxTheme.purple }}
                    className="mr-2"
                    size={24}
                  />
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: gruvboxTheme.aqua }}
                  >
                    COMPLETED PROJECTS
                  </h2>
                </div>

                {/* Projects mapped from array */}
                {projectsData.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 transition-colors project-card"
                    style={{
                      borderWidth: "2px",
                      borderColor: gruvboxTheme.aqua,
                      backgroundColor: gruvboxTheme.bg,
                      "&:hover": { backgroundColor: gruvboxTheme.bg1 },
                    }}
                  >
                    <h3
                      className="text-xl font-bold mb-4 tracking-wider"
                      style={{ color: gruvboxTheme.orange }}
                    >
                      &gt; {project.title}
                    </h3>
                    <p
                      className="mb-4 leading-relaxed"
                      style={{ color: gruvboxTheme.fg }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm tech-badge"
                          style={{
                            borderWidth: "1px",
                            borderColor: gruvboxTheme.aqua,
                            color: gruvboxTheme.aqua,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1"
                          style={{
                            color: gruvboxTheme.blue,
                            "&:hover": { color: gruvboxTheme.aqua },
                          }}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                      {project.sourceLink && (
                        <a
                          href={project.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1"
                          style={{
                            color: gruvboxTheme.blue,
                            "&:hover": { color: gruvboxTheme.aqua },
                          }}
                        >
                          <FaGithub /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

          {/* Footer */}
          <footer
            className="mt-16 pt-6 text-center"
            style={{
              borderTopWidth: "2px",
              borderTopColor: gruvboxTheme.yellow,
            }}
          >
            <p className="mb-2" style={{ color: gruvboxTheme.gray }}>
              © {new Date().getFullYear()} Rohit Bind
            </p>
          </footer>
        </div>
      </GruvboxTerminal>

      {/* Startup animation script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          // Add retro startup animation
          document.addEventListener('DOMContentLoaded', function() {
            const terminal = document.querySelector('.terminal-effect');
            if (terminal) {
              terminal.style.opacity = '0';
              terminal.style.filter = 'brightness(0)';
              
              // Start with a flash
              setTimeout(() => {
                terminal.style.transition = 'all 0.1s ease';
                terminal.style.opacity = '0.8';
                terminal.style.filter = 'brightness(1.5)';
              }, 100);
              
              // Then dim to normal
              setTimeout(() => {
                terminal.style.transition = 'all 0.4s ease';
                terminal.style.opacity = '1';
                terminal.style.filter = 'brightness(1)';
              }, 250);
              
              // Random glitches
              const glitchInterval = setInterval(() => {
                if (Math.random() > 0.98) {
                  terminal.style.transform = 'translateX(${Math.random() * 4 - 2}px)';
                  terminal.style.opacity = '${0.9 + Math.random() * 0.1}';
                  
                  setTimeout(() => {
                    terminal.style.transform = 'translateX(0)';
                    terminal.style.opacity = '1';
                  }, 50);
                }
              }, 1000);
            }
          });
        `,
        }}
      />
    </div>
  );
};

export default HomePage;
