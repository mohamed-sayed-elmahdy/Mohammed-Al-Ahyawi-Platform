import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReviewDetailPage from "@/components/website/reviews/ReviewDetailPage";
import { reviews } from "@/data/reviews";
import { createPageMetadata } from "@/lib/seo";

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
    return {
      title: "التقييم غير موجود",
      robots: { index: false, follow: false },
    };
  }

  return createPageMetadata({
    title: review.title,
    description: review.excerpt,
    path: `/reviews/${review.id}`,
    image: review.images[0],
    imageAlt: `صورة من تجربة ${review.title}`,
    openGraphType: "article",
  });
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