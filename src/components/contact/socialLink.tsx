import { Container } from "@/common/component/elements/container";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiWakatime } from "react-icons/si";
import Link from "next/link";

const SocialContainer = ({
  title,
  icon,
  className,
  href = "#",
  ...props
}: {
  title: string;
  icon: ReactNode;
  className?: string;
  href?: string;
}) => {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={twMerge(
        "text-neutral-100 w-full border border-neutral-700 cursor-pointer py-1 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 ease-in-out",
        className
      )}
      {...props}
    >
      {icon}
      {title}
    </Link>
  );
};

export const SocialLinks = () => {
  const commonIconClass = "h-5 w-5";

  return (
    <Container title="Find me on social media">
      <div className="flex md:flex-row flex-col gap-4">
        <SocialContainer
          icon={<FaEnvelope className={commonIconClass} />}
          title="Email"
          href="mailto:rohitbinw@gmail.com"
          className="bg-emerald-600 hover:bg-emerald-500 border-transparent"
        />
        <SocialContainer
          icon={<FaLinkedin className={commonIconClass} />}
          title="LinkedIn"
          href="https://www.linkedin.com/in/rohitsx/"
          className="bg-[#0077B5] hover:bg-[#00669c] border-transparent"
        />
        <SocialContainer
          icon={<FaXTwitter className={commonIconClass} />}
          title="x.com"
          href="https://x.com/rohitsxx"
          className="bg-black hover:bg-neutral-900 border-neutral-800"
        />
        <SocialContainer
          icon={<FaGithub className={commonIconClass} />}
          title="GitHub"
          href="https://github.com/rohitsx/"
          className="bg-[#171515] hover:bg-[#2d2a2a] border-neutral-800"
        />
        <SocialContainer
          icon={<SiWakatime className={commonIconClass} />}
          title="WakaTime"
          href="https://wakatime.com/@rohitsx"
          className="bg-[#43b3ae] hover:bg-[#3ca19c] border-transparent"
        />
      </div>
    </Container>
  );
};
