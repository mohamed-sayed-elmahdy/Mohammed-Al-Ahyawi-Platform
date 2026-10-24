import Image from "next/image";
import {
  ChartNoAxesCombined,
  MapPin,
  Star,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const methods = [
  { label: "نزور", icon: MapPin },
  { label: "نجرب", icon: UtensilsCrossed },
  { label: "نقيم", icon: Star },
  { label: "نحسن", icon: ChartNoAxesCombined },
];

export function AboutHero() {
  return (
    <section className="mb-3 bg-[url('/hero7.png')] bg-position-[700px_-420px] 
     bg-no-repeat relative isolate min-h-[clamp(330px,33vw,630px)] overflow-hidden">
      <div className="relative z-10 mx-auto grid min-h-[inherit] max-w-[1780px] grid-cols-1 md:grid-cols-[40%_60%]">

        <div className="relative min-h-92.5  md:min-h-0 ">
          <Image
            src="/mohamedwhite1.png"
            alt="الإعلامي محمد الإحيوي"
            fill
            priority
            className="z-20 object-contain object-bottom"

          />
        </div>

        <div  className=" rounded-br-full border-r-4 border-(--color-accent)/85 rounded-tr-full bg-(--color-background) z-20 flex min-h-92.5 flex-col items-center justify-center px-5 pb-8 pt-12 md:pt-16 text-center sm:px-10 md:py-12 lg:px-14">
          <p className="text-lg font-bold text-(--color-accent) sm:text-3xl lg:text-5xl">
            من هو
          </p>
          <h1 className="mt-3 text-xl font-bold leading-[1.4] tracking-tight text-(--color-text) sm:mt-4 sm:text-3xl md:whitespace-nowrap lg:text-[clamp(2.7rem,4.35vw,4.7rem)]">
            الإعلامي محمد الإحيوي
          </h1>
          <p className="mt-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-4 sm:text-lg sm:leading-8 lg:text-2xl lg:leading-10">
            إعلامي يوثق التجارب وينقل الواقع ويسعى للتحسين
          </p>
          <div className="mt-6 flex w-fit divide-x divide-x-reverse divide-(--color-accent)/50 overflow-hidden rounded-[18px] border border-(--color-accent)/75 sm:mt-7">
            {methods.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-(--color-text) sm:gap-2 sm:px-4 sm:py-3 sm:text-sm md:px-6 md:text-base lg:text-xl">
                <Icon className="size-4 text-(--color-accent) sm:size-5 lg:size-6" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





export default function AboutSectionTitle() {
  return (
    <div className="relative inline-block">
      {/* Bottom Border Extension */}
      <div className="absolute left-0 right-12 top-full h-px bg-[#9C6A17]" />

      <div
        className="
          flex items-center gap-3
          px-8 py-4
          rounded-[24px]
          border border-[#9C6A17]
          bg-[#010C24]
        "
      >
        <Users
          size={22}
          strokeWidth={1.8}
          className="text-[#9C6A17]"
        />

        <span className="text-white text-[22px] font-semibold">
          نبذة عنا
        </span>
      </div>
    </div>
  );
}