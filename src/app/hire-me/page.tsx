import { CallToAction } from "@/components/hire-me/CallToAction";
import { ClientWork } from "@/components/hire-me/ClientWork";
import { Testimonials } from "@/components/hire-me/Testimonials";

export default function HireMe() {
  return (
    <>
      <section className="space-y-1 border-b border-dashed pb-6 md:pb-5 border-neutral-800">
        <h1 className="text-2xl text-neutral-800 font-medium ">Hire Me</h1>
        <p className="text-neutral-600">
          A showcase of my professional collaborations, successful projects, and client feedback. Interested in working together? Let's connect.
        </p>
      </section>
      <Testimonials />
      <ClientWork />
      <CallToAction />
    </>
  );
}
