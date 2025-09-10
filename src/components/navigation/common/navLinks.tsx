"use client";

import {
  Home,
  LayoutDashboard,
  FolderKanban,
  Info,
  NotebookPen,
  Mail,
  ArrowRight,
  Handshake
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", icon: <Home size={20} />, href: "/" },
    { title: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
    { title: "Projects", icon: <FolderKanban size={20} />, href: "/projects" },
    // { title: "HireMe", icon: <Handshake size={20} />, href: "/Hireme" },
    { title: "Resume", icon: <Info size={20} />, href: "/about" },
    // { title: "Guestbook", icon: <NotebookPen size={20} />, href: "/guestbook" },
    { title: "Contact", icon: <Mail size={20} />, href: "/contact" },
  ];

  return (
    <ul className="space-y-2 pb-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.title} >
            <Link
              href={link.href}
              className={`group flex items-center justify-between rounded-sm px-4 py-2 text-lg font-medium hover:bg-neutral-200 hover:text-neutral-600 ${isActive
                ? "bg-neutral-200 text-neutral-700"
                : "text-neutral-600 "
                }`}
            >
              <div className="flex items-center gap-3">
                <span className={`transition-transform duration-300 group-hover:rotate-12 ${isActive && "text-neutral-500"}`}>
                  {link.icon}
                </span>
                <span className="text-base">{link.title}</span>
              </div>
              <ArrowRight className="size-4 text-neutral-400" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

