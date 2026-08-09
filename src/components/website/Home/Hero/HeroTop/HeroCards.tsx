"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { heroCards } from "@/components/website/Home/Hero/data";

const getCardAt = (index: number) => {
  return heroCards[(index + heroCards.length) % heroCards.length];
};

const carouselVariants = {
  enter: (slideDirection: number) => ({
    opacity: 0,
    x: slideDirection > 0 ? "-12%" : "12%",
    scale: 0.96,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (slideDirection: number) => ({
    opacity: 0,
    x: slideDirection > 0 ? "12%" : "-12%",
    scale: 0.96,
  }),
};

export default function HeroCards() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(1);
  const visibleCards = [-1, 0, 1].map((offset) => getCardAt(activeIndex + offset));

  const moveCarousel = (direction: number) => {
    setDirection(direction);
    setActiveIndex((current) => (current + direction + heroCards.length) % heroCards.length);
  };

  return (
    <section className="mt-8 w-full max-w-[680px]" aria-label="استكشف التجارب">
      <div className="flex items-center gap-2 sm:gap-3" dir="ltr">
        <button
          type="button"
          onClick={() => moveCarousel(-1)}
          aria-label="التجربة السابقة"
          className="grid size-9 shrink-0 place-items-center rounded-full border border-[#b7802f]/80 bg-[#07101b]/80 text-[#f3c15c] transition hover:bg-[#f3c15c] hover:text-[#08111f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3c15c]"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="relative min-w-0 flex-1 overflow-visible py-3" dir="rtl">
          <div className="aspect-[2.92/1]" aria-hidden="true" />
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-3 grid grid-cols-[minmax(0,1fr)_minmax(0,1.16fr)_minmax(0,1fr)] items-center gap-2 sm:gap-3"
            >
              {visibleCards.map((card, index) => {
                const featured = index === 1;

                return (
                  <article
                    key={`${card.id}-${featured ? "featured" : "side"}`}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                      featured
                        ? "z-10 aspect-[1/1.08] border-[#f3c15c] shadow-[0_0_24px_rgba(243,193,92,0.42)] sm:scale-105"
                        : "aspect-[1/1.04] border-[#9f6926]/80 opacity-85 shadow-[0_0_14px_rgba(243,193,92,0.16)]"
                    }`}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(min-width: 640px) 220px, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101b] via-[#07101b]/20 to-transparent" />
                    <div className="absolute inset-x-2 bottom-2 text-center sm:inset-x-3 sm:bottom-3">
                      <h3 className={`font-alexandria font-bold text-white drop-shadow-md ${featured ? "text-sm sm:text-lg" : "text-[11px] sm:text-sm"}`}>
                        {card.title}
                      </h3>
                      {featured ? (
                        <p className="mt-1 hidden text-xs text-amber-100/85 sm:block">اكتشف أفضل التجارب المختارة</p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => moveCarousel(1)}
          aria-label="التجربة التالية"
          className="grid size-9 shrink-0 place-items-center rounded-full border border-[#b7802f]/80 bg-[#07101b]/80 text-[#f3c15c] transition hover:bg-[#f3c15c] hover:text-[#08111f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3c15c]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
