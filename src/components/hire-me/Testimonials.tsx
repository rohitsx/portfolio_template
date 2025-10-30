"use client";

import { Container } from "@/common/component/elements/container";
import SectionHeading from "@/common/component/elements/sectionHeading";
import { Testimonial, testimonialsData } from "@/common/constant/hireMeData";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const IconComponent = testimonial.source.icon;

  const CardContent = () => (
  <div className="relative flex flex-col justify-between h-full p-6 bg-white border border-neutral-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    
    <Quote className="absolute top-4 left-5 w-16 h-16 text-neutral-100 -z-10" />

    <div className="z-10">
      <p className="text-neutral-700 text-base leading-relaxed whitespace-pre-line italic">
        {`"${testimonial.quote}"`}
      </p>
    </div>
    <div className="mt-6 pt-4 border-t border-neutral-200/80">
      <p className="font-semibold text-neutral-800">{testimonial.author}</p>
      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <IconComponent size={16} />
        <span>{testimonial.title}</span>
      </div>
    </div>
  </div>
);

  return testimonial.source.url ? (
    <Link
      href={testimonial.source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-[1.02]"
    >
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
};

export const Testimonials = () => {
  return (
    <Container title="Testimonials" icon={<Quote />}>
      <div className="grid md:grid-cols-2 gap-4">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
};


export const TestimonialsHomeRoute = () => {
  return (
    <div className="space-y-8 border-b pb-8 border-neutral-200">
      <div className="flex justify-between items-center">
        <SectionHeading title="Testimonials" />
        <div className="flex gap-2 items-center text-sm">
          <Link href="/hire-me">Hire Me</Link>
          <ArrowRight size={16} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};
