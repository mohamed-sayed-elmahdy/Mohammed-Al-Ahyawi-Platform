import SectionHeader from "../SectionHeader";
import { reviews } from "./data";
import ReviewCard from "./ReviewCard";

export default function FeaturedReviews() {
  const [featured, ...others] = reviews;

  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="خبرات موثوقة"
          title="تجارب حقيقية بنكهة استثنائية"
          description="منصة محمد الإحيوي تقدم مراجعات دقيقة لوجهات مطاعم ومقاهي وفنادق ملفتة تتناول التفاصيل التي تهم الزوار."
          actionLabel="عرض كل المراجعات"
          actionHref="/reviews"
        />

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] xl:gap-8">
          {featured ? <ReviewCard review={featured} variant="large" /> : null}
          <div className="grid gap-6">
            {others.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
