import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReviewDetailPage from "@/components/website/reviews/ReviewDetailPage";
import { reviews } from "@/data/reviews";

type ReviewPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.id }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews.find((item) => item.id === slug);

  if (!review) {
    return { title: "التقييم غير موجود" };
  }

  return {
    title: review.title,
    description: review.excerpt,
    openGraph: {
      title: `${review.title} | تقييمات محمد الإحيوي`,
      description: review.excerpt,
      images: [review.images[0]],
      type: "article",
    },
  };
}

export default async function ReviewRoute({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = reviews.find((item) => item.id === slug);

  if (!review) {
    notFound();
  }

  const relatedReviews = reviews
    .filter((item) => item.id !== review.id)
    .sort((first, second) => {
      const firstMatchesCategory = first.categoryId === review.categoryId;
      const secondMatchesCategory = second.categoryId === review.categoryId;

      if (firstMatchesCategory !== secondMatchesCategory) {
        return firstMatchesCategory ? -1 : 1;
      }

      return second.dateISO.localeCompare(first.dateISO);
    })
    .slice(0, 3);

  return <ReviewDetailPage review={review} relatedReviews={relatedReviews} />;
}