import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Star } from "lucide-react";
import type { ReviewItem } from "@/types/website";

type ReviewCardProps = {
  review: ReviewItem;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className={`group relative h-[285px] overflow-hidden rounded-[22px] border bg-[#060d17] shadow-[0_16px_45px_rgba(0,0,0,0.28)] transition duration-300 sm:h-[305px] ${
        review.featured
          ? "border-(--color-accent)/60 shadow-[0_18px_48px_rgba(217,152,45,0.14)]"
          : "border-(--color-accent)/25 hover:border-(--color-accent)/55"
      } hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(0,0,0,0.42)]`}
    >
      <Link
        href={review.href}
        aria-label={`عرض تقييم ${review.title}`}
        className="relative isolate block h-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
      >
        <Image
          src={review.images[0]}
          alt={`صورة من تقييم ${review.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="-z-20 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,10,18,0.04)_4%,rgba(4,10,18,0.18)_30%,rgba(4,10,18,0.97)_100%)]" />

        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#08111f]/75 px-3 py-1 text-xs font-medium text-(--color-text) backdrop-blur-sm">
          {review.categoryLabel}
        </span>
        {review.badge ? (
          <span className="absolute right-3 top-3 rounded-full border border-(--color-accent)/50 bg-[#08111f]/75 px-3 py-1 text-xs font-semibold text-(--color-accent) backdrop-blur-sm">
            {review.badge}
          </span>
        ) : null}

        <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-(--color-accent)">
            <Star className="size-4 fill-(--color-accent)" aria-hidden="true" />
            <span dir="ltr">{review.rating.toFixed(1)}</span>
          </div>
          <h2 className="font-alexandria line-clamp-2 text-lg font-bold leading-7 text-(--color-text) sm:text-xl sm:leading-8">
            {review.title}
          </h2>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-(--color-secondary-text) sm:text-sm sm:leading-6">
            {review.excerpt}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/15 pt-3 text-xs text-(--color-secondary-text)">
            <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
              <MapPin className="size-4 shrink-0 text-(--color-accent)" aria-hidden="true" />
              <span className="truncate">{review.locationLabel}</span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5">
              <CalendarDays className="size-4 text-(--color-accent)" aria-hidden="true" />
              {review.dateLabel}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
