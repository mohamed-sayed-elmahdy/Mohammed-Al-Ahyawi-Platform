import { Quote } from "lucide-react";
import type { VisitorTestimonial } from "@/types/website";

type TestimonialCardProps = {
  testimonial: VisitorTestimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-(--color-surface)/70 p-5 transition-colors hover:border-(--color-accent)/35 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-(--color-accent)/20 bg-(--color-accent)/5 px-2.5 py-1 text-[16.5px] font-medium text-(--color-accent)">
          رأي زائر
        </span>
        <Quote aria-hidden="true" className="size-5 text-(--color-accent)/70" />
      </div>

      <blockquote className="mt-5 flex-1 text-sm leading-8 text-(--color-secondary-text) sm:text-base">
        {testimonial.quote}
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-(--color-accent)/35 bg-(--color-accent)/10 font-alexandria text-base font-bold text-(--color-accent)"
        >
          {testimonial.name.trim().charAt(0)}
        </span>
        <span className="font-semibold text-(--color-text)">
          {testimonial.name}
        </span>
      </footer>
    </article>
  );
}