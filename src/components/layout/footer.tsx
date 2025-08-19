import { Container } from "@/common/component/elements/container"
import SectionHeading from "@/common/component/elements/sectionHeading"
import { Rocket } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return <Container title="What I've been working on">
    <p>
      I assist brands, companies, institutions, and startups in creating exceptional digital experiences for their businesses through strategic development services.
    </p>
    <div className="p-8 border rounded-2xl w-full space-y-4">
      <SectionHeading title="Lets work together!" icon={<Rocket />} />
      <div className="px-2">
        I'm open for freelance projects, feel free to email me to see how can we collaborate.
      </div>
      <Link href="/contact" className="text-white bg-neutral-500 p-2 px-4 rounded-lg hover:cursor-pointer hover:bg-neutral-700 transition">Contact me</Link>
    </div>
  </Container>

}
