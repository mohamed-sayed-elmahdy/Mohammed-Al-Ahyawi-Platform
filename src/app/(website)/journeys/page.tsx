import type { Metadata } from "next";
import JourneysHero from "@/components/website/journeys/JourneysHero";
import JourneysPageContent from "@/components/website/journeys/JourneysPageContent";

export const metadata: Metadata = {
  title: "الجولات",
  description: "استكشف الجولات الموثقة لمحمد الإحيوي داخل المملكة وحول العالم.",
};

export default function JourneysPage() {
  return (
    <div className="overflow-hidden bg-(--color-background) text-(--color-text)">
      <JourneysHero />
      <JourneysPageContent />
    </div>
  );
}
