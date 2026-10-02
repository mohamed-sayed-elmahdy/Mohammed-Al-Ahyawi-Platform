import { ArrowLeft } from "lucide-react";
import { reviews } from "@/data/featured-reviews";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

export default function FeaturedReviews() {
  const [featured, cafe, hotel, ...moreReviews] = reviews;

  return (
    <section className="bg-[#08111f] pb-16 text-white sm:pb-24 ">
      <div className="mx-auto max-w-360 px-5 sm:px-8">
        <div className="grid gap-3 lg:grid-cols-[1.05fr_1fr]">
          <div className="grid  gap-3">
            <header className="pb-1 pt-2 text-right ">
              <h2 className="mt-5 font-alexandria text-4xl font-semibold leading-tight sm:text-5xl">مختارات من أبرز التجارب</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">مجموعة من التجارب التي نرشحها لك بناءً على جودة المكان وقيمة التجربة والانطباع النهائي</p>
              <Link
                href="/categories"
                aria-label="استعرض جميع التجارب"
                className="discoveryButton discoveryButton-colors min-w-38.75 mt-4 relative inline-flex items-center justify-center gap-2 rounded-[10px] px-2 sm:px-6 py-3 text-sm font-semibold text-(--color-text) sm:py-2"
              >
                استعرض جميع التجارب <ArrowLeft className="h-5 w-5" />
              </Link>
            </header>
            <div className="grid gap-3 sm:grid-cols-2">
              {cafe ? <ReviewCard review={cafe} /> : null}
              {hotel ? <ReviewCard review={hotel} /> : null}
            </div>
          </div>
          {featured ? <ReviewCard review={featured} featured /> : null}


        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {moreReviews.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
      </div>
    </section>
  );
}
