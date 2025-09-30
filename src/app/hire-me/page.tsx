import { CallToAction } from "@/components/hire-me/CallToAction";
import { ClientWork } from "@/components/hire-me/ClientWork";
import { Testimonials } from "@/components/hire-me/Testimonials";
import Link from "next/link";

export default function HireMe() {
  return (
    <>
      <section className="space-y-1 border-b border-dashed pb-6 md:pb-5 border-neutral-800">
        <h1 className="text-2xl text-neutral-800 font-medium ">Hire Me</h1>
        <p className="text-neutral-600">
          A showcase of my professional collaborations, successful projects, and client feedback. Interested in working together? <Link href='/contact' className="border-b-2 border-gray-400 hover:text-black hover:border-gray-500">Let's connect</Link>.
        </p>
      </section>
      <Testimonials />
      <ClientWork />
      <CallToAction />
    </>
  );
}
