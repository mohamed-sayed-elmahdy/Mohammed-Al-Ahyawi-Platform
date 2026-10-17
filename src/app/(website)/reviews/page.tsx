import type { Metadata } from "next";
import { categories } from "@/data/categories";
import ReviewsHero from "@/components/website/reviews/ReviewsHero";
import ReviewsPageContent from "@/components/website/reviews/ReviewsPageContent";
import { createPageMetadata } from "@/lib/seo";

type ReviewsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export const metadata: Metadata = createPageMetadata({
  title: "التقييمات",
  description:
    "اقرأ تقييمات وتجارب موثقة للمطاعم والمقاهي والفنادق والوجهات في السعودية وحول العالم.",
  path: "/reviews",
});

export default async function ReviewsPage({ searchParams }: ReviewsPageProps) {
  const { category } = await searchParams;
  const initialCategory =
    typeof category === "string" &&
    categories.some((item) => item.id === category)
      ? category
      : "all";

  return (
    <div className="overflow-hidden bg-(--color-background) text-(--color-text)">
      <ReviewsHero />
      <ReviewsPageContent
        key={initialCategory}
        initialCategory={initialCategory}
      />
    </div>
  );
}
