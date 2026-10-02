
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CategoryCard from "@/components/website/home/FeaturedCategories/CategoryCard";
import FeaturedCategoriesItems from "@/components/website/home/FeaturedCategories/FeaturedCategoriesItems";
import { categories } from "@/data/categories";

const featuredCardCategories = categories.filter((category) => category.featuredCard);
const [primaryCategory, topLeftCategory, topRightCategory, lowerLeftCategory, ...bottomCategories] = featuredCardCategories;

export default function FeaturedCategories() {
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
              href="/reviews"
              aria-label=" استعرض جميع الفئات "
              className="discoveryButton discoveryButton-colors min-w-38.75 mt-4 relative inline-flex items-center justify-center gap-2 rounded-[10px] px-2 sm:px-6 py-3 text-sm font-semibold text-(--color-text) sm:py-2"
            >
              استعرض جميع الفئات <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 lg:grid-cols-7">
            <FeaturedCategoriesItems />
          </div>
        </div>

        {featuredCardCategories.length > 0 ? (
          <div className="mt-16 grid gap-3 lg:grid-cols-[1.15fr_2fr]" dir="ltr">
            <div className="grid gap-3">
              {primaryCategory ? <CategoryCard category={primaryCategory} featured /> : null}
              {lowerLeftCategory ? <CategoryCard category={lowerLeftCategory} /> : null}
            </div>
            <div className="grid gap-3">
              <div className="grid gap-3 md:grid-cols-2">
                {topLeftCategory ? <CategoryCard category={topLeftCategory} /> : null}
                {topRightCategory ? <CategoryCard category={topRightCategory} /> : null}
              </div>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                {bottomCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <p className="mt-10 text-center text-base text-slate-400">
          <span className="me-4 inline-block h-px w-7 [450px]:w-12 align-middle bg-[#b87820]" />
          اختر فئتك المفضلة وابدأ رحلتك القادمة
          <span className="ms-4 inline-block h-px w-7 [450px]:w-12 align-middle bg-[#b87820]" />
        </p>
      </div>
    </section>
  );
}
