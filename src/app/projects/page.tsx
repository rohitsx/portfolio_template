import { FeaturedVideos } from "@/components/layout/featuredVideos";
import { ProjectAll } from "@/components/project/projectAll";

export default function Projects() {
  return <>
    <FeaturedVideos />
    <div>
      <section className="space-y-1 border-b border-dashed pb-6 md:pb-5 border-neutral-800">
        <h1 className="text-2xl text-neutral-800 font-medium ">Projects</h1>
        <p className="text-neutral-600">Several projects that I have worked on, both private and open source.</p>
      </section>
      <ProjectAll />
    </div>
  </>
}
