import type { CTA } from "@/types/website";

const cta: CTA = {
  title: "ابدأ رحلتك",
  description: "اطلب زيارة لمكانك أو استكشف التجارب المميزة",
  primaryLabel: "اطلب زيارة",
  primaryHref: "/request-visit",
  secondaryLabel: "استكشف التجارب",
  secondaryHref: "/",
};

export default function HomeCTA() {
  return (
    <section>
      <h2>{cta.title}</h2>
      <p>{cta.description}</p>
      <a href={cta.primaryHref}>{cta.primaryLabel}</a>
      {cta.secondaryLabel && cta.secondaryHref ? (
        <a href={cta.secondaryHref}>{cta.secondaryLabel}</a>
      ) : null}
    </section>
  );
}
