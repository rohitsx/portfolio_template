import { Container } from "@/common/component/elements/container"
import SectionHeading from "@/common/component/elements/sectionHeading"
import { Rocket } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return <><Container title="What I've been working on">
    <p>
    I specialize in turning complex challenges into high-performance web applications. Whether it's building a system from the ground up, implementing real-time features, or integrating AI-powered solutions, I deliver robust, scalable, and well-documented code that helps businesses achieve their goals.
    </p>
    <div className="p-8 border rounded-2xl w-full space-y-4">
      <SectionHeading title="Lets work together!" icon={<Rocket />} />
      <div className="px-2">
        I'm open for freelance projects, feel free to email me to see how can we collaborate.
      </div>
      <Link href="/contact" className="text-white bg-neutral-500 p-2 px-4 rounded-lg hover:cursor-pointer hover:bg-neutral-700 transition">Contact me</Link>
    </div>
  </Container>

    <p>
      Thanks <Link href="https://x.com/aulianzaa" target="_blank" className="underline cursor-pointer">aulianza</Link> for this wonderful UI design.
    </p>

  </>
}
