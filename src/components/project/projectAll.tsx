import { projectsList } from "@/common/constant/projectsList"
import { ProjectCard } from "./projectCard"

export const ProjectAll = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {projectsList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

