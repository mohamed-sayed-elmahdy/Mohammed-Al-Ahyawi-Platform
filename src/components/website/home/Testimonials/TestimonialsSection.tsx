import { visitorTestimonials } from "@/data/visitor-testimonials";
import GoldActionLink from "@/components/website/home/GoldActionLink";
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
          <GoldActionLink
            href="/share-feedback"
            aria-label="شاركنا رأيك"
          >
            شاركنا رأيك
          </GoldActionLink>
        </div>
      </div>
    </section>
  );
}
