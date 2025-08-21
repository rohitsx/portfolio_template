import { AboutOptions } from "@/components/about/aboutOptions";

export default function About() {
  return <>
    <section className="space-y-1 border-b border-dashed pb-6 md:pb-5 border-neutral-800">
      <h1 className="text-2xl text-neutral-800 font-medium ">About</h1>
      <p className="text-neutral-600">An insightful glimpse into who I am – because every detail adds depth to the canvas of life.</p>
    </section>

    <AboutOptions/>
  </>
}
