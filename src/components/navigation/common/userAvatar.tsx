"use client"

import VerifiedBadge from "@/components/logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RohitAvatar } from "@/lib/imageLink"
import { useNavBarStore } from "@/store/useNavBarStore"

interface UserAvatarProps {
  variant?: "navbar" | "sidebar"
}

export const UserAvatar = ({ variant = "navbar" }: UserAvatarProps) => {
  const { isOpen } = useNavBarStore()

  const isSidebar = variant === "sidebar"

  return (
    <div
      className={`flex gap-5 ${
        isSidebar ? "flex-col justify-start" : isOpen ? "flex-col justify-start" : "items-center"
      }`}
    >
      <Avatar className={isSidebar ? "size-20" : isOpen ? "size-20" : "size-10"}>
        <AvatarImage src={RohitAvatar} />
        <AvatarFallback>Rh</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1">
        <div className="flex gap-3 items-center">
          <h3 className="text-xl font-medium">Rohit Bind</h3>
          <VerifiedBadge />
        </div>
        {isSidebar && <p className="text-sm text-neutral-500 font-medium">@rohitsx</p>}
      </div>
    </div>
  )
}

