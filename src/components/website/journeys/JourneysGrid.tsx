import type { Journey } from "@/types/website";
import JourneyCard from "./JourneyCard";

type JourneysGridProps = {
  journeys: Journey[];
};

export default function JourneysGrid({ journeys }: JourneysGridProps) {
  return (
    <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {journeys.map((journey) => (
        <JourneyCard key={journey.id} journey={journey} />
      ))}
    </div>
  );
}
