import { ArrowLeft, Coffee, FerrisWheel, Hotel, Landmark, Palmtree, Plane, Utensils } from "lucide-react";
import type { DiscoveryCategory } from "./data";

type ReviewCardProps = {
  category: DiscoveryCategory;
  featured?: boolean;
};

const icons = {
  utensils: Utensils,
  coffee: Coffee,
  hotel: Hotel,
  palms: Palmtree,
  landmark: Landmark,
  ferrisWheel: FerrisWheel,
  plane: Plane,
};

export default function ReviewCard({ category, featured = false }: ReviewCardProps) {
  const Icon = icons[category.icon];

  return (
    <a
      href={category.href}
      dir="rtl"
      className={`group relative isolate block overflow-hidden border border-[#bf7b20]/55 bg-[#07111d] text-right transition duration-500 hover:-translate-y-1 hover:border-[#e5a234] ${
        featured ? "min-h-[330px] rounded-2xl sm:min-h-[430px]" : "min-h-[236px] rounded-xl"
      }`}
    >
      <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,16,.92)_0%,rgba(3,10,16,.55)_58%,rgba(3,10,16,.2)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030a10]/95 via-transparent to-[#030a10]/10" />

      <div className={`relative z-10 flex h-full flex-col ${featured ? "items-end justify-center p-7 sm:p-10" : "justify-end p-5"}`}>
        <div className={featured ? "max-w-[230px]" : ""}>
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
    </a>
  );
}
