import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Category } from "@/types/website";

type CategoryCardProps = {
  category: Category;
  featured?: boolean;
};

export default function CategoryCard({ category, featured = false }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link
      href={category.href}
      dir="rtl"
      className={`group relative isolate block overflow-hidden border border-[#bf7b20]/55 bg-[#07111d] text-right transition duration-500 hover:-translate-y-1 hover:border-[#e5a234] ${
        featured ? "min-h-[330px] rounded-2xl sm:min-h-[430px]" : "min-h-[236px] rounded-xl"
      }`}
    >
      <Image
        src={category.featuredCardImage || category.img}
        alt={category.title}
        fill
        sizes={featured ? "(min-width: 1024px) 36vw, 100vw" : "(min-width: 1024px) 24vw, 50vw"}
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,16,.52)_0%,rgba(3,10,16,.25)_58%,rgba(3,10,16,.1)_100%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-[#030a10]/65 via-transparent to-[#030a10]/10" />

      <div className={`relative z-10 flex h-full flex-col ${featured ? "justify-end   p-7 sm:p-10" : "justify-end p-5"}`}>
        <div className={featured ? "max-w-57.5" : ""}>
          <div className="flex items-center justify-start gap-2 text-[#e9a52d]">
            <Icon className="h-5 w-5" strokeWidth={1.7} />
            <h3 className={featured ? "text-2xl font-semibold text-white" : "text-lg font-semibold text-white"}>{category.title}</h3>
          </div>
          <p className={`mt-3 leading-7 text-slate-200/85 ${featured ? "text-sm" : "text-xs"}`}>{category.description}</p>
          <p className="mt-4 text-sm text-white">تجربة موثقة <span className="text-[#f3bd4c]">{category.count}</span></p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#edaf3b]">
            استكشف التجارب <ArrowLeft className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
