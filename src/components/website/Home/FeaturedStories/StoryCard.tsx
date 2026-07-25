import type { Story } from "@/types/website";

type StoryCardProps = {
  story: Story;
};

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0f172a] shadow-[0_24px_90px_rgba(0,0,0,0.25)] transition hover:-translate-y-1">
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/95 via-[#08111f]/30 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#f3c15c]">{story.location}</p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">{story.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{story.excerpt}</p>
        </div>
      </div>
    </article>
  );
}
