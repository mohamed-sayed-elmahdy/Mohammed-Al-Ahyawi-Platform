import Link from "next/link";
import { ArrowLeft, CalendarDays, Star } from "lucide-react";
import type { ReviewItem } from "@/types/website";
import ReviewCard from "./ReviewCard";
import ReviewImageGallery from "./ReviewImageGallery";

type ReviewDetailPageProps = {
  review: ReviewItem;
  relatedReviews: ReviewItem[];
};

export default function ReviewDetailPage({
  review,
  relatedReviews,
}: ReviewDetailPageProps) {
  return (
    <main className="bg-(--color-background) text-(--color-text)" dir="rtl">
      <section className="border-b border-(--color-accent)/15">
        <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-8 lg:px-10">
          <nav aria-label="مسار الصفحة" className="flex min-w-0 items-center gap-2 text-sm">
            <Link
              href="/reviews"
              className="shrink-0 text-(--color-secondary-text) transition hover:text-(--color-accent)"
            >
              التقييمات
            </Link>
            <ArrowLeft className="size-4 shrink-0 text-(--color-accent)" aria-hidden="true" />
            <span className="truncate font-medium text-(--color-text)" aria-current="page">
              {review.title}
            </span>
          </nav>

          <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12">
            <ReviewImageGallery
              images={review.images}
              reviewTitle={review.title}
              locationLabel={review.locationLabel}
              badge={review.badge}
            />

            <header className="order-2 flex flex-col items-start py-1 text-right">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-(--color-accent)/35 bg-(--color-accent)/10 px-3 py-1.5 text-xs font-semibold text-(--color-accent)">
                  {review.categoryLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-(--color-secondary-text)">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {review.dateLabel}
                </span>
              </div>

              <h1 className="mt-5 font-alexandria text-2xl font-bold leading-[1.7] sm:text-3xl sm:leading-[1.65] lg:text-4xl">
                {review.title}
              </h1>

              <div
                className="mt-5 inline-flex items-center gap-2 rounded-md border border-(--color-accent)/25 bg-(--color-surface)/60 px-4 py-3"
                aria-label={`التقييم ${review.rating.toFixed(1)} من 5`}
              >
                <Star className="size-5 fill-(--color-accent) text-(--color-accent)" aria-hidden="true" />
                <span dir="ltr" className="text-lg font-bold text-(--color-text)">
                  {review.rating.toFixed(1)}
                </span>
                <span className="text-sm text-(--color-secondary-text)">من 5</span>
              </div>

              <Link
                href="/reviews"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-(--color-accent)/45 px-4 py-2.5 text-sm font-semibold text-(--color-accent) transition hover:bg-(--color-accent)/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
              >
                العودة إلى التقييمات
                <ArrowLeft className="size-4" aria-hidden="true" />
              </Link>
            </header>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-10 lg:py-16">
        <article>
          <div className="flex items-center gap-3">
            <span className="h-7 w-1 rounded-full bg-(--color-accent)" aria-hidden="true" />
            <h2 className="font-alexandria text-xl font-bold sm:text-2xl">ملخص التجربة</h2>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-9 text-(--color-secondary-text) sm:text-lg sm:leading-10">
            {review.excerpt}
          </p>
        </article>

        <aside aria-label="تفاصيل التقييم" className="self-start border-y border-(--color-accent)/20 py-2">
          <h2 className="py-4 font-alexandria text-base font-bold">تفاصيل التقييم</h2>
          <dl className="divide-y divide-white/10">
            <div className="flex items-center justify-between gap-4 py-4 text-sm">
              <dt className="text-(--color-secondary-text)">الفئة</dt>
              <dd className="font-semibold text-(--color-text)">{review.categoryLabel}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-4 text-sm">
              <dt className="text-(--color-secondary-text)">الموقع</dt>
              <dd className="font-semibold text-(--color-text)">{review.locationLabel}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-4 text-sm">
              <dt className="text-(--color-secondary-text)">تاريخ التقييم</dt>
              <dd className="font-semibold text-(--color-text)">{review.dateLabel}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-4 text-sm">
              <dt className="text-(--color-secondary-text)">التقييم</dt>
              <dd className="font-semibold text-(--color-accent)" dir="ltr">
                {review.rating.toFixed(1)} / 5
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      {relatedReviews.length > 0 ? (
        <section className="border-t border-(--color-accent)/15 bg-(--color-surface)/25 py-12 sm:py-16">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-(--color-accent)">اكتشف المزيد</p>
                <h2 className="mt-2 font-alexandria text-xl font-bold sm:text-2xl">
                  تقييمات قد تهمك
                </h2>
              </div>
              <Link
                href="/reviews"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-(--color-accent) transition hover:text-(--color-text)"
              >
                كل التقييمات
                <ArrowLeft className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {relatedReviews.map((relatedReview) => (
                <ReviewCard key={relatedReview.id} review={relatedReview} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}