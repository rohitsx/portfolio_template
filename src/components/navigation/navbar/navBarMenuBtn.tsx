"use client";

import { useNavBarStore } from "@/store/useNavBarStore";
import { Menu, X } from "lucide-react";

export const NavBarMenuBtn = () => {
  const { isOpen, toggelIsOpen } = useNavBarStore()

  return (
      <button
        className={`md:hidden cursor-pointer ${isOpen ? "pt-1" : ""}`}
        onClick={toggelIsOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

  );
};

