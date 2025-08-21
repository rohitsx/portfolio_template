"use client"

import { SetAboutProps, useAboutOption } from "@/store/useAboutOptionStore"
import { ReactNode } from "react"
import { Bookmark, FileText, Briefcase, GraduationCap } from "lucide-react"
import { Intro } from "./intro"
import { Resume } from "./resume"
import { Career } from "./career"
import { Education } from "./education"

export const AboutOptions = () => {
  const { aboutOption, setAboutOption } = useAboutOption()

  const OptionBtn = ({ icon, title }: { icon?: ReactNode, title: SetAboutProps }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 font-medium w-full py-1 px-3 cursor-pointer 
        ${aboutOption === title ? "bg-neutral-500 text-neutral-100" : "bg-neutral-200 text-neutral-800"}`}
        onClick={() => setAboutOption(title)}
      >
        {icon}
        <p>{title}</p>
      </button>
    )
  }

  return (
    <div className="h-[800px] flex flex-col">      <div className="flex flex-col md:flex-row gap-2">
        <OptionBtn icon={<Bookmark size={16} />} title="Intro" />
        <OptionBtn icon={<FileText size={16} />} title="Resume" />
        <OptionBtn icon={<Briefcase size={16} />} title="Career" />
        <OptionBtn icon={<GraduationCap size={16} />} title="Education" />
      </div>
      <div className="h-full border border-neutral-200 border-t-0 p-4 md:p-8">
        {aboutOption === "Intro" && <Intro />}
        {aboutOption === "Resume" && <Resume />}
        {aboutOption === "Career" && <Career />}
        {aboutOption === "Education" && <Education />}
      </div>
    </div>
  )
}

