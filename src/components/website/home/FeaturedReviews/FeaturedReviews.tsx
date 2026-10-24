import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";
import GoldActionLink from "@/components/shared/GoldActionLink";

export default function FeaturedReviews() {
  const featuredReviews = reviews
    .filter((review) => review.badge === "تجربة مميزة")
    .slice(0, 6);
  const [featured, cafe, hotel, ...moreReviews] = featuredReviews;

  return (
    <section className="bg-[#08111f] pb-16 text-white sm:pb-24 ">
      <div className="mx-auto max-w-360 px-5 sm:px-8">
        <div className="grid gap-3 lg:grid-cols-[1.05fr_1fr]">
          <div className="grid  gap-3">
            <header className="pb-1 pt-2 text-right ">
              <h2 className="mt-5 font-alexandria text-4xl font-semibold leading-tight sm:text-5xl">مختارات من أبرز التجارب</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">مجموعة من التجارب التي نرشحها لك بناءً على جودة المكان وقيمة التجربة والانطباع النهائي</p>
              <GoldActionLink
                href="/reviews"
                aria-label="استعرض جميع التجارب"
                className="mt-4"
              >
                استعرض جميع التجارب
              </GoldActionLink>
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
