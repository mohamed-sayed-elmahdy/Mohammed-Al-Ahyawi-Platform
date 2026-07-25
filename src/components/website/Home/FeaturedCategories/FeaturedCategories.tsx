import SectionHeader from "../SectionHeader";
import { categories } from "./data";

export default function FeaturedCategories() {
  return (
    <section>
      <SectionHeader
        eyebrow="الأقسام"
        title="الفئات المميزة"
        description="مجموعة مختارة من التجارب التي نركز عليها"
      />
      <p>Placeholder</p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </section>
  );
}
