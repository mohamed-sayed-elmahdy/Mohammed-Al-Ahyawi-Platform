"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { stories } from "./data";
import StoryCard from "./StoryCard";

export default function StorySlider() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const rail = railRef.current;
    if (!rail) return;
    const maximum = rail.scrollWidth - rail.clientWidth;
    setProgress(maximum > 0 ? Math.min(100, Math.round((rail.scrollLeft / maximum) * 100)) : 0);
  };

  const scrollStories = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * 500, behavior: "smooth" });
  };

  return (
    <div className="mt-12 overflow-hidden">
      <div
        ref={railRef}
        onScroll={updateProgress}
        className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {stories.map((story) => <StoryCard key={story.id} story={story} />)}
      </div>

      <div className="mt-7 flex items-center justify-center gap-6" dir="ltr">
        <button type="button" onClick={() => scrollStories(-1)} aria-label="القصة السابقة" className="grid h-12 w-12 place-items-center rounded-full border border-[#9f6926] text-[#efb657] transition hover:border-[#f3c15c] hover:bg-[#f3c15c] hover:text-[#08111f]">
          <ArrowRight className="h-5 w-5" />
        </button>
        <div className="h-1 w-[min(34vw,460px)] overflow-hidden rounded-full bg-white/15">
          <div className="h-full rounded-full bg-[#f3c15c] transition-[width] duration-300" style={{ width: `${Math.max(10, progress)}%` }} />
        </div>
        <button type="button" onClick={() => scrollStories(1)} aria-label="القصة التالية" className="grid h-12 w-12 place-items-center rounded-full border border-[#9f6926] text-[#efb657] transition hover:border-[#f3c15c] hover:bg-[#f3c15c] hover:text-[#08111f]">
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
