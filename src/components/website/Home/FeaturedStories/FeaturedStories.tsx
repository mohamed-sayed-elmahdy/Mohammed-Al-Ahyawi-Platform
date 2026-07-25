import SectionHeader from "../SectionHeader";
import { stories } from "./data";

export default function FeaturedStories() {
  return (
    <section>
      <SectionHeader
        eyebrow="القصص"
        title="القصص المميزة"
        description="سرديات وتجارب تروي الهوية والرحلة"
      />
      <p>Placeholder</p>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>{story.title}</li>
        ))}
      </ul>
    </section>
  );
}
