import { ArrowLeft } from "lucide-react";
import { reviews } from "./data";
import ReviewCard from "./ReviewCard";

export default function FeaturedReviews() {
  const [featured, cafe, hotel, ...moreReviews] = reviews;

  return (
    <section className="bg-[#08111f] py-16 text-white sm:py-24" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-3 lg:grid-cols-[1.05fr_1fr]">
             <div className="grid content-start gap-3">
            <header className="pb-1 pt-2 text-right ">
              <div className="flex items-center gap-3 text-sm text-[#e8aa3d]"><span className="h-px w-8 bg-[#d99a32]" /> مختارات خاصة</div>
              <h2 className="mt-5 font-alexandria text-4xl font-semibold leading-tight sm:text-5xl">مختارات من أبرز التجارب</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">مجموعة من التجارب التي نرشحها لك بناءً على جودة المكان وقيمة التجربة والانطباع النهائي.</p>
              <a href="/reviews" className="mt-5 inline-flex items-center gap-4 rounded-md border border-[#d09234] px-6 py-3 text-sm font-semibold text-[#ecb34c] transition hover:bg-[#d09234] hover:text-[#07111d]">عرض جميع التجارب <ArrowLeft className="h-4 w-4" /></a>
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
