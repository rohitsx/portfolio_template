"use client"

import { useNavBarStore } from "@/store/useNavBarStore"
import { UserAvatar } from "../common/userAvatar"
import { NavBarMenuBtn } from "./navBarMenuBtn"
import { NavLinks } from "../common/navLinks"
import { useEffect } from "react"
import { usePathname } from "next/navigation"


export const NavBar = () => {
  const { isOpen, toggelIsOpen} = useNavBarStore()
  const pathName = usePathname()
  
  useEffect(() => {
    isOpen &&  toggelIsOpen()
  },[pathName])


  return <div className="md:hidden w-full space-y-8">
    <div className={`pb-5 w-full flex justify-between ${isOpen ? 'items-start' : 'items-center border-b border-neutral-200 '}`}>
      <UserAvatar variant="navbar" />
      <NavBarMenuBtn />
    </div>
    <div className={`w-full ${isOpen ? '' : 'hidden'}`}>
      <NavLinks />
    </div>
  </div>
}
