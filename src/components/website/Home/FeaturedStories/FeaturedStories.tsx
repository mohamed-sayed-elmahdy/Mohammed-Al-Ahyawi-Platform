import SectionHeader from "../SectionHeader";
import { stories } from "./data";
import StoryCard from "./StoryCard";

export default function FeaturedStories() {
  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="سرد الرحلات"
          title="قصص تحفيزية من ساحات التجربة"
          description="لا تتشابه هذه القصص؛ هي صفحات جديدة عن أماكن واستثناءات ذات طابع شخصي ومُفعم بالتصوير السينمائي."
          actionLabel="عرض جميع القصص"
          actionHref="/stories"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            <StoryCard story={stories[0]} />
            <StoryCard story={stories[1]} />
          </div>
          <StoryCard story={stories[2]} />
        </div>
      </div>
    </section>
  );
}
