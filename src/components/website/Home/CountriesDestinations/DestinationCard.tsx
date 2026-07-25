import type { Destination } from "@/types/website";

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0f172a] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition hover:-translate-y-1">
      <img
        src={destination.image}
        alt={destination.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
        <a href={destination.href} className="mt-3 inline-block text-sm font-medium text-[#f3c15c] transition hover:text-white">
          استكشف الوجهة
        </a>
      </div>
    </article>
  );
}
