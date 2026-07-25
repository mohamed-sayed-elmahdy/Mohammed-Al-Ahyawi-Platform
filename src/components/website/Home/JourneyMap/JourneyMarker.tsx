import type { Journey } from "@/types/website";

type JourneyMarkerProps = {
  journey: Journey;
};

export default function JourneyMarker({ journey }: JourneyMarkerProps) {
  return (
    <li className="relative grid gap-3 rounded-[24px] border border-white/10 bg-[#0f172a]/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
      <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f3c15c]">
        {journey.year}
      </span>
      <h3 className="text-2xl font-semibold leading-tight text-white">{journey.title}</h3>
      <p className="text-sm leading-7 text-slate-300">{journey.description}</p>
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{journey.route}</span>
        <a href={journey.href} className="text-[#f3c15c] transition hover:text-white">
          عرض الخريطة
        </a>
      </div>
    </li>
  );
}
