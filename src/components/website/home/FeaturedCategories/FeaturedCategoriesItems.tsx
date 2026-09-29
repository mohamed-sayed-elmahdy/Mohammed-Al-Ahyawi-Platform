import { categories } from "@/data/categories";
import Link from "next/link";


const featuredCategories = categories.filter(
    (category) => category.featured
);

export default function FeaturedCategories() {
    return (
        <>
            {featuredCategories.map((category, index) => {
                const Icon = category.icon;
                const active = index === 0;

                return (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="group text-center">
                        <span className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border sm:h-24 sm:w-24 transition-all duration-200 ${active ? "border-(--color-accent) text-(--color-accent) shadow-[0_0_28px_rgba(229,162,52,.46)]" : "border-white/15 text-(--color-text) group-hover:border-(--color-accent) group-hover:bg-[--color-accent]/10"}`}>
                            <Icon className="h-8 w-8" strokeWidth={1.45} />
                        </span>
                        <p className="mt-3 text-sm font-semibold sm:text-base">{category.title}</p>
                        <p className="mt-1 text-sm text-(--color-accent)">{category.count}</p>
                        <p className="text-xs text-slate-400">تجربة</p>
                        {active ? <span className="mx-auto mt-3 block h-px w-[80%] bg-(--color-accent)" /> : null}
                    </Link>
                );
            })}
        </>
    );
}