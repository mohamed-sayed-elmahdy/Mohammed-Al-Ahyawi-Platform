import type { Metadata } from "next";
import { categories } from "@/data/categories";
import ReviewsHero from "@/components/website/reviews/ReviewsHero";
import ReviewsPageContent from "@/components/website/reviews/ReviewsPageContent";

type ReviewsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export const metadata: Metadata = {
  title: "التقييمات",
  description:
    "استكشف تقييمات موثقة لتجارب المطاعم والمقاهي والفنادق والوجهات",
  keywords: [
    "تقييمات مطاعم",
    "تقييمات مقاهي",
    "تجارب السعودية",
    "محمد الإحيوي",
    "تجارب موثقة",
  ],
  authors: [{ name: "محمد الإحيوي" }],
  openGraph: {
    title: "التقييمات | محمد الإحيوي",
    description:
      "استكشف تقييمات موثقة وتجارب حقيقية في المطاعم والمقاهي والفنادق والوجهات",
    url: "https://mohammedalahyawi.com/reviews",
    siteName: "محمد الإحيوي",
    images: [
      {
        url: "/images/og/reviews-cover.jpg",
        width: 1200,
        height: 630,
        alt: "تقييمات محمد الإحيوي",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "التقييمات | محمد الإحيوي",
    description: "تقييمات موثقة لتجارب المطاعم والمقاهي والفنادق والوجهات",
    images: ["/images/og/reviews-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mohammedalahyawi.com/reviews",
  },
};

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
