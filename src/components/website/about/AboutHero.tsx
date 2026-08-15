import Image from "next/image";
import { MapPin, Star, UtensilsCrossed, ChartNoAxesCombined, Users } from "lucide-react";

const methods = [
  { label: "نزور", icon: MapPin },
  { label: "نجرب", icon: UtensilsCrossed },
  { label: "نقيم", icon: Star },
  { label: "نحسن", icon: ChartNoAxesCombined },
];

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[630px] overflow-hidden border-b border-(--color-accent)/30 bg-[radial-gradient(circle_at_72%_28%,color-mix(in_srgb,var(--color-surface)_84%,transparent),transparent_40%),linear-gradient(110deg,var(--color-background),var(--color-surface))] px-4 pt-18 sm:px-8 lg:min-h-[700px] lg:px-10 lg:pt-22">
      <div className="absolute -right-12 -top-56 size-[900px] rounded-full border-[3px] border-(--color-accent)/75" />
      <div className="absolute -right-16 -top-52 size-[890px] rounded-full border border-(--color-accent)/20" />
      <div className="absolute left-5 top-6 z-20 flex items-center gap-2 rounded-r-none rounded-[18px] border border-(--color-accent)/75 px-6 py-3 text-lg font-bold"><Users className="size-5 text-(--color-accent)" />نبذة عنا</div>
      <div dir="ltr" className="relative mx-auto grid max-w-[1780px] items-center lg:grid-cols-[1.12fr_.88fr]">
        <div dir="rtl" className="order-2 pt-14 text-center lg:order-1 lg:pt-6 lg:text-right">
          <p className="font-alexandria text-2xl font-bold text-(--color-accent)">من هو</p>
          <h1 className="font-alexandria mt-5 text-4xl font-bold leading-[1.5] tracking-tight sm:text-5xl xl:text-7xl">الإعلامي محمد الإحيوي</h1>
          <p className="mt-6 text-xl leading-10 text-(--color-secondary-text) sm:text-2xl">إعلامي يوثق التجارب، ينقل الواقع، ويسعى للتحسين</p>
          <div className="mx-auto mt-9 flex w-fit divide-x divide-x-reverse divide-(--color-accent)/50 overflow-hidden rounded-[18px] border border-(--color-accent)/75 lg:mx-0">
            {methods.map(({ label, icon: Icon }) => <div key={label} className="flex items-center gap-2 px-5 py-4 text-lg font-semibold sm:px-7 sm:text-xl"><Icon className="size-6 text-(--color-accent)" />{label}</div>)}
          </div>
        </div>
        <div className="relative order-1 mx-auto h-[400px] w-full max-w-[520px] lg:order-2 lg:h-[680px] lg:max-w-[720px]">
          <div className="absolute inset-x-8 bottom-2 h-32 rounded-full bg-(--color-accent)/15 blur-3xl" />
          <Image src="/mohamedwhite.png" alt="الإعلامي محمد الإحيوي" fill priority className="object-contain object-bottom drop-shadow-[0_20px_26px_rgba(0,0,0,.48)]" sizes="(max-width: 1024px) 520px, 720px" />
        </div>
      </div>
    </section>
  );
}
