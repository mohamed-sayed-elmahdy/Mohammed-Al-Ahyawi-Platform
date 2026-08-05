import { ArrowLeft, Clock3 } from "lucide-react";
import type { FeaturedStory } from "./data";

type StoryCardProps = { story: FeaturedStory };

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <a
      href={story.href}
      className="group relative block h-[430px] min-w-[188px] snap-start overflow-hidden rounded-xl border border-[#b77b2b]/75 bg-[#101a28] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition duration-500 hover:border-[#f3c15c] hover:shadow-[0_24px_55px_rgba(0,0,0,0.42)] sm:h-[490px] sm:min-w-[210px]"
    >
      <img
        src={story.image}
        alt={story.title}
        className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06101e]/70 via-[#06101e]/5 via-40% to-[#050b14]/95" />
      <div className="absolute inset-0 bg-[#020712]/10 transition duration-500 group-hover:bg-[#020712]/35" />

      <span className="absolute right-0 top-0 m-4 text-xs font-semibold tracking-wide text-[#f3c15c]">
        {story.scene}
      </span>
      <span className="absolute right-1/2 top-11 h-1 w-1 translate-x-1/2 rotate-45 bg-[#d59b40]" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-right sm:p-5">
        <p className="text-xs font-medium text-[#f1bc60]">{story.category}</p>
        <h3 className="mt-2 font-alexandria text-lg font-semibold leading-8 text-white transition duration-500 group-hover:-translate-y-1">
          {story.title}
        </h3>
        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-[#efbd68]">
          <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{story.readingTime}</span>
          <span>{story.location}</span>
        </div>
        <span className="mt-4 flex translate-y-2 items-center gap-2 text-xs font-semibold text-[#f3c15c] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          اقرأ القصة <ArrowLeft className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}
