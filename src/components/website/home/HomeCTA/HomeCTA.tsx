import type { CTA } from "@/types/website";

const cta: CTA = {
  title: "دعوة لزيارة بعين محمد الإحيوي",
  description: "دعوة راقية للعلامات التجارية لاستضافة تجربة مدعومة بسردية وهوية مرئية فريدة.",
  primaryLabel: "اطلب زيارة",
  primaryHref: "/request-visit",
  secondaryLabel: "تعرّف على التجربة",
  secondaryHref: "/",
};

export default function HomeCTA() {
  return (
    <section className="border-t border-white/10 bg-[#08111f] py-20">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f3c15c]">ابدأ رحلتك</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
          {cta.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={cta.primaryHref}
            className="inline-flex rounded-full bg-[#f3c15c] px-8 py-3 text-sm font-semibold text-[#08111f] transition hover:brightness-95"
          >
            {cta.primaryLabel}
          </a>
          <a
            href={cta.secondaryHref}
            className="inline-flex rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-white transition hover:border-[#f3c15c] hover:text-[#f3c15c]"
          >
            {cta.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
