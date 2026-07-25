import type { Review } from "@/types/website";

type ReviewCardProps = {
  review: Review;
  variant?: "large" | "small";
};

export default function ReviewCard({ review, variant = "small" }: ReviewCardProps) {
  return (
    <article className={
      variant === "large"
        ? "group relative overflow-hidden rounded-[30px] bg-[#0f172a] shadow-[0_32px_120px_rgba(0,0,0,0.35)]"
        : "overflow-hidden rounded-[24px] border border-white/10 bg-[#0f172a] shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
    }>
      <div className="relative overflow-hidden">
        <img
          src={review.image}
          alt={review.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/90 via-[#08111f]/20 to-transparent" />
      </div>

      <div className={variant === "large" ? "p-10" : "p-6"}>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#f3c15c]">
          <span className="font-semibold">{review.rating.toFixed(1)}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-300">{review.location}</span>
        </div>
        <h3 className={variant === "large" ? "mt-5 text-3xl font-semibold text-white" : "mt-4 text-xl font-semibold text-white"}>
          {review.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{review.excerpt}</p>
      </div>
    </article>
  );
}
