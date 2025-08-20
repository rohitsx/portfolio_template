import { NavLinks } from "../common/navLinks"
import { UserAvatar } from "../common/userAvatar"

export const SideBar = () => {
  return <div className="sticky top-0 h-screen max-w-[220px] w-full space-y-8 hidden md:block">
    <UserAvatar variant="sidebar" />
    <NavLinks />
  </div>
}
