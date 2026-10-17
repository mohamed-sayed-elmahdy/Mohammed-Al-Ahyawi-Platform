import type { Metadata } from "next";
import JourneysHero from "@/components/website/journeys/JourneysHero";
import JourneysPageContent from "@/components/website/journeys/JourneysPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "الجولات",
  description:
    "استكشف جولات محمد الإحيوي الموثقة في مدن المملكة ووجهات حول العالم، مع تفاصيل التجارب والأماكن.",
  path: "/journeys",
});

export default function JourneysPage() {
  return (
    <div className="overflow-hidden bg-(--color-background) text-(--color-text)">
      <JourneysHero />
      <JourneysPageContent />
    </div>
  );
}
