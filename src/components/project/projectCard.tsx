"use client";
import Image from "next/image";
import Link from "next/link";
import { STACKS } from "@/common/constant/stack";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
  image: string;
  stacks: (keyof typeof STACKS)[];
  featured?: boolean;
  github?: string;
  youtube?: string;
};

export const ProjectCard = ({
  title,
  description,
  link,
  image,
  stacks,
  featured = false,
  github,
  youtube,
}: ProjectCardProps) => {
  return (
    <div className="relative group w-full h-full border border-neutral-200 shadow-2xs rounded-xl">
      {/* Image + Overlay */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={320}
          height={180}
          className="w-full rounded-t-xl h-50 object-cover"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3 text-gray-200 text-sm rounded-t-xl">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaGithub /> GitHub
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaExternalLinkAlt /> Live
            </Link>
          )}
          {youtube && (
            <Link
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaYoutube className="text-red-500" /> YouTube
            </Link>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-4 pb-8 space-y-6">
        <Link
          href={link || ""}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link && "hover:underline"}`}
        >
          {title}
        </Link>
        <p className="text-sm/relaxed text-neutral-700">
          {description}
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          {stacks.map((stack) => (
            <div key={stack} className="relative group/stack flex items-center">
              {STACKS[stack]}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black text-white opacity-0 group-hover/stack:opacity-100 transition whitespace-nowrap pointer-events-none">
                {stack}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
