import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { visitorTestimonials } from "@/data/visitor-testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="border-y border-white/10 bg-[#0a1422] py-16 text-(--color-text) sm:py-24">
      <div className="mx-auto max-w-360 px-5 sm:px-8">
        <header className="border-b border-white/10 pb-7 text-center sm:pb-9">
          <h2 className="font-alexandria text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            آراء الزوار
          </h2>
        </header>

        <div className="mt-7 grid gap-3 md:grid-cols-3 md:gap-4">
          {visitorTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-7 flex justify-center sm:mt-9">
          <Link
            href="/share-feedback"
            aria-label="شاركنا رأيك"
            className="discoveryButton discoveryButton-colors min-w-38.75 relative inline-flex items-center justify-center gap-2 rounded-[10px] px-2 py-3 text-sm font-semibold text-(--color-text) transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:px-6 sm:py-2"
          >
            شاركنا رأيك
            <ArrowLeft aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}