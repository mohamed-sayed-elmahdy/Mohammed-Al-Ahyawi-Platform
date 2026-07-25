import type { Category } from "@/types/website";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0f172a] text-white shadow-[0_24px_80px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-[#f3c15c]/40">
      <div className="aspect-[4/3] bg-slate-900">
        <img
          src={`https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80`}
          alt={category.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.26em] text-[#f3c15c]">{category.title}</p>
        <h3 className="text-xl font-semibold leading-tight text-white">{category.title}</h3>
        <p className="text-sm leading-7 text-slate-400">{category.description}</p>
        <a href={category.href} className="text-sm font-medium text-[#f3c15c] transition hover:text-white">
          استكشف الفئة
        </a>
      </div>
    </article>
  );
}
