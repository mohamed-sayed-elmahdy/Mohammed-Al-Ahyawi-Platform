import type { Country } from "@/types/website";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111827] text-white shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
      <img
        src={country.image}
        alt={country.name}
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <span className="text-sm uppercase tracking-[0.28em] text-[#f3c15c]">{country.name}</span>
        <p className="mt-3 text-lg font-semibold leading-tight text-white">{country.description}</p>
        <a href={country.href} className="mt-5 inline-block text-sm font-medium text-[#f3c15c] transition hover:text-white">
          استكشف البلد
        </a>
      </div>
    </article>
  );
}
