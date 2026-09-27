
import Link from "next/link";
import { ArrowLeft, Coffee, FerrisWheel, Globe2, Hotel, Landmark, Palmtree, Utensils } from "lucide-react";
import { discoveryCategories } from "./data";
import CategoryCard from "@/components/website/home/FeaturedCategories/CategoryCard";
import { MdOutlineLocationOn } from "react-icons/md";


const categoryIcons = [Utensils, Coffee, Hotel, Palmtree, Landmark, FerrisWheel, Globe2];

export default function FeaturedCategories() {
  const [featured, ...cards] = discoveryCategories;

  return (
    <section className="overflow-hidden  bg-linear-to-b from-black via-[#050d16] to-[#08111f] pb-16 pt-10 text-[var(--color-text)] sm:pb-24">
      <div className="mx-auto max-w-360 px-5 sm:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-[.9fr_1.4fr]">
          <div className="text-right xl:pr-6">
            <h2 className="font-alexandria text-4xl font-semibold leading-[1.35] sm:text-5xl">
              استكشف التجارب<br />
              <span className="text-(--color-accent)">حسب الفئة</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-(--color-secondary-text)">
              كل تجربة تروي قصة مختلفة، وكل فئة تمنحك زاوية جديدة لاستكشاف العالم بأسلوب محمد الإحيوي. اختر ما يهمك اليوم وابدأ رحلة جديدة
            </p>

            <Link
              href="/categories"
              aria-label=" استعرض جميع الفئات "
              className="discoveryButton discoveryButton-colors min-w-38.75 mt-4 relative inline-flex items-center justify-center gap-2 rounded-[10px] px-2 sm:px-6 py-3 text-sm font-semibold text-(--color-text) sm:py-2"
            >
              استعرض جميع الفئات <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 lg:grid-cols-7">
            {discoveryCategories.map((category, index) => {
              const Icon = categoryIcons[index];
              const active = index === 0;
              return (
                <a key={category.id} href={category.href} className="group text-center">
                  <span className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border transition sm:h-24 sm:w-24 ${active ? "border-[#f0b344] bg-[#0c0d0d] text-[#f2b63e] shadow-[0_0_28px_rgba(229,162,52,.46)]" : "border-white/15 text-[#d9962c] group-hover:border-[#e5a234] group-hover:bg-[#e5a234]/10"}`}>
                    <Icon className="h-8 w-8" strokeWidth={1.45} />
                  </span>
                  <p className="mt-3 text-sm font-semibold sm:text-base">{category.title}</p>
                  <p className="mt-1 text-sm text-[#e7ae44]">{category.count}</p>
                  <p className="text-xs text-slate-400">تجربة موثقة</p>
                  {active ? <span className="mx-auto mt-3 block h-px w-12 bg-[#e7ae44]" /> : null}
                </a>
              );
            })}
          </div>
        </div>

        {featured ? (
          <div className="mt-16 grid gap-3 lg:grid-cols-[1.15fr_2fr]" dir="ltr">
            <div className="grid gap-3">
              <CategoryCard category={featured} featured />
              <CategoryCard category={{ ...discoveryCategories[3] }} />
            </div>
            <div className="grid gap-3">
              <div className="grid gap-3 md:grid-cols-2">
                <CategoryCard category={discoveryCategories[1]} />
                <CategoryCard category={discoveryCategories[2]} />
              </div>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                {cards.slice(2).map((category) => <CategoryCard key={category.id} category={category} />)}
              </div>
            </div>
          </div>
        ) : null}

        <p className="mt-10 text-center text-base text-slate-400">
          <span className="ml-5 inline-block h-px w-12 align-middle bg-[#b87820]" />
          اختر فئتك المفضلة وابدأ رحلتك القادمة
          <span className="mr-5 inline-block h-px w-12 align-middle bg-[#b87820]" />
        </p>
      </div>
    </section>
  );
}
