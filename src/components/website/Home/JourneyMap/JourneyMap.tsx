import SectionHeader from "../SectionHeader";
import { journeys } from "./data";
import JourneyMarker from "./JourneyMarker";

export default function JourneyMap() {
  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="مسار الرحلة"
          title="خريطة سردية لتجارب محمد الإحيوي"
          description="رحلة تنظيمية توضح مراحل التجربة والبلدان التي شكلت السردية منذ انطلاقتها وحتى اليوم."
        />

        <div className="grid gap-6 xl:grid-cols-[0.7fr_0.3fr] xl:items-start">
          <div className="space-y-6">
            <article className="overflow-hidden rounded-[30px] bg-[#111827] p-10 shadow-[0_30px_110px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f3c15c]">منهج سردي</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">السفر ليس المكان فقط، بل التفاصيل عبر الزمن</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                هذه القطعة تعبر عن الرحلة المتدرجة بين السعودية والعالم، مع محطات وثيقة وتجارب غنية بالبُعد الثقافي.
              </p>
            </article>

            <ul className="space-y-5">
              {journeys.map((journey) => (
                <JourneyMarker key={journey.id} journey={journey} />
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-[#0f172a] p-8 shadow-[0_30px_110px_rgba(0,0,0,0.22)]">
            <h4 className="text-xl font-semibold text-white">محطات بارزة</h4>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              استكشاف المكامن السردية في كل رحلة من خلال الأماكن والأعوام والمسارات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
