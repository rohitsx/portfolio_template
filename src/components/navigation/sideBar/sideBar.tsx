import { NavLinks } from "../common/navLinks"
import { UserAvatar } from "../common/userAvatar"

export const SideBar = () => {
  return <div className="w-full space-y-8 max-w-[220px] hidden md:block">
    <UserAvatar variant="sidebar" />
    <NavLinks/>
  </div>

}
