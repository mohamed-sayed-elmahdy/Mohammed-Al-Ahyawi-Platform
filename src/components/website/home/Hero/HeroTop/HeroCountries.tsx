import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import HeroTimeline from "@/components/website/home/Hero/HeroTop/HeroTimeline";

const mobileCountries = [
  { name: "السعودية", flag: "/flags/sa.svg" },
  { name: "مصر", flag: "/flags/eg.svg" },
  { name: "الإمارات", flag: "/flags/ae.svg" },
  { name: "تركيا", flag: "/flags/tr.svg" },
  { name: "جورجيا", flag: "/flags/ge.svg" },
];

export default function HeroCountries() {
  return (
    <aside className="flex w-full flex-col items-center justify-center pe-0 lg:pe-6">
      {/* Mobile / Tablet: horizontal flags */}
      <div className="w-full lg:hidden">
        <div className="mb-4 flex items-center justify-center gap-2 text-(--color-text)">
          <span className="text-base text-(--color-accent)">
            <FaMapMarkerAlt />
          </span>
          <h3 className="text-base font-bold sm:text-lg">وجهاتي</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {mobileCountries.map(({ name, flag }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-(--color-accent)/30 bg-black/30 sm:size-14">
                <Image
                  src={flag}
                  alt={name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xs text-(--color-secondary-text) sm:text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: original vertical timeline */}
      <div className="hidden w-full flex-col items-center lg:flex">
        <div className="mb-4 flex items-center gap-2 pe-8 text-(--color-text)">
          <span className="text-lg text-(--color-accent)">
            <FaMapMarkerAlt />
          </span>
          <h3 className="text-lg font-bold">رحلاتي داخل المملكة</h3>
        </div>

        <div className="relative flex w-full justify-end">
          <HeroTimeline />
        </div>
      </div>
    </aside>
  );
}