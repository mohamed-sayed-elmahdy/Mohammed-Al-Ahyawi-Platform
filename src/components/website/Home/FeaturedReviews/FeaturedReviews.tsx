import SectionHeader from "../SectionHeader";
import { reviews } from "./data";

export default function FeaturedReviews() {
  return (
    <section>
      <SectionHeader
        eyebrow="التقييمات"
        title="المراجعات المميزة"
        description="أبرز ما يقال عن التجارب والوجهات"
      />
      <p>Placeholder</p>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.title}</li>
        ))}
      </ul>
    </section>
  );
}
