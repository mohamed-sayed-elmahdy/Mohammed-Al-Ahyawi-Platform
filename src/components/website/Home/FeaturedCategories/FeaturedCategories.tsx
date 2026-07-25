import SectionHeader from "../SectionHeader";
import { categories } from "./data";
import CategoryCard from "./CategoryCard";

export default function FeaturedCategories() {
  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="استكشاف"
          title="الفئات المميزة لاكتشاف الخبرات"
          description="مجموعة عن الفئات الأكثر وضوحًا في هوية محمد الإحيوي، من المطاعم الراقية إلى الرحلات العالمية والوجهات الترفيهية."
          actionLabel="عرض جميع الفئات"
          actionHref="/"
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] xl:gap-10">
          <div className="group relative overflow-hidden rounded-[28px] bg-[#111827] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="مطعم فاخر بإضاءة دافئة"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/90 via-[#08111f]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <span className="inline-flex rounded-full border border-[#f3c15c]/40 px-3 py-1 text-xs text-[#f3c15c]">
                تجربة مختارة
              </span>
              <h3 className="mt-4 text-3xl font-semibold text-white">مطاعم ومقاهي تحكي هوية المكان</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                استكشف أهم الفئات التي تعكس الذوق المحلي والعالمي من خلال سرد تجارب محمد الإحيوي المميزة.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
