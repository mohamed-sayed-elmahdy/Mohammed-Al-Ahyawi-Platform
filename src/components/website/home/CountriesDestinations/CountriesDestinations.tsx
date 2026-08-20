import SectionHeader from "../SectionHeader";
import { countries, destinations } from "./data";
import CountryCard from "./CountryCard";
import DestinationCard from "./DestinationCard";

export default function CountriesDestinations() {
  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="العالم بأكمله"
          title="دليل البلدان والوجهات المختارة"
          description="وجهات مختارة تمثل هوية الرحلات الفاخرة، مع تركيز على البلدان السعودية والإقليمية والعالمية."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] xl:gap-10">
          <div className="space-y-6">
            {countries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
