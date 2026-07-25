import SectionHeader from "../SectionHeader";
import { countries, destinations } from "./data";

export default function CountriesDestinations() {
  return (
    <section>
      <SectionHeader
        eyebrow="الوجهات"
        title="البلدان والوجهات"
        description="تصنيف مختصر للبلدان والوجهات التي نغطيها"
      />
      <p>Placeholder</p>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>{destination.name}</li>
        ))}
      </ul>
    </section>
  );
}
