import SectionHeader from "../SectionHeader";
import { journeys } from "./data";

export default function JourneyMap() {
  return (
    <section>
      <SectionHeader
        eyebrow="الخريطة"
        title="خريطة الرحلة"
        description="رحلة التجارب والوجهات عبر الزمن والمناطق"
      />
      <p>Placeholder</p>
      <ul>
        {journeys.map((journey) => (
          <li key={journey.id}>{journey.title}</li>
        ))}
      </ul>
    </section>
  );
}
