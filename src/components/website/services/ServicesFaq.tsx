"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type ServicesFaqProps = {
  items: FaqItem[];
};

export default function ServicesFaq({ items }: ServicesFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `services-faq-answer-${index}`;

        return (
          <article key={item.question} className="py-1">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-14 w-full items-center justify-between gap-5 py-4 text-right font-semibold leading-7 transition-colors hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-5 shrink-0 text-(--color-accent) transition-transform duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 text-sm leading-8 text-(--color-secondary-text)">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}