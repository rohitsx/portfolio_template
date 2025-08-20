import { BookCall } from "@/components/contact/bookCall";
import { SocialLinks } from "@/components/contact/socialLink";

export default function Contact() {
  return <> 
    <section className="space-y-1 border-b border-dashed pb-6 md:pb-5 border-neutral-800">
      <h1 className="text-2xl text-neutral-800 font-medium ">Contact</h1>
      <p className="text-neutral-600">Feel free to get in touch and let's have a discussion about how we can work together.</p>
    </section>
    <SocialLinks/>
    <BookCall/>

  </>
}
