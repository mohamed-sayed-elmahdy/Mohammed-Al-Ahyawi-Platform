export default function JourneysHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-(--color-accent)/15 bg-(--color-background) py-14 sm:py-14 lg:py-18">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(217,152,45,0.16),transparent_62%)]" />
      <div className="mx-auto max-w-[1600px] px-4 text-center sm:px-8 lg:px-10">
        <h1 className="font-alexandria mt-4 text-3xl font-bold leading-tight text-(--color-text) sm:text-4xl lg:text-5xl">
          الجولات
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--color-secondary-text) sm:text-base sm:leading-8">
          اكتشف رحلات موثقة عبر مدن المملكة العربية السعودية ووجهات حول العالم
        </p>
      </div>
    </section>
  );
}
