import type { Metadata } from "next";
import { AboutHero } from "@/components/website/about/AboutHero";
import { AboutIntro } from "@/components/website/about/AboutIntro";
import { AboutTimeline } from "@/components/website/about/AboutTimeline";
import { GoogleMapsProfile } from "@/components/website/about/GoogleMapsProfile";
import { ExperienceImpact } from "@/components/website/about/ExperienceImpact";
import { MissionVision } from "@/components/website/about/MissionVision";
import { GlobalJourneys } from "@/components/website/about/GlobalJourneys";
import { DigitalPresence } from "@/components/website/about/DigitalPresence";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "نبذة عن محمد الإحيوي",
  description:
    "تعرّف على الإعلامي محمد الإحيوي ورحلته في توثيق التجارب والجولات والتعريف بالوجهات داخل المملكة وحول العالم.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div  className="about-page overflow-hidden bg-(--color-background) text-(--color-text)">
      <AboutHero />
      <AboutIntro />
      <AboutTimeline />
      <GoogleMapsProfile />
      <div className="mx-auto grid max-w-[1780px] gap-7 px-4 pb-7 sm:px-8 lg:px-10 lg:grid-cols-2">
        <ExperienceImpact />
        <MissionVision />
      </div>
      <div className="mx-auto grid max-w-[1780px] gap-7 px-4 pb-20 sm:px-8 lg:px-10 lg:grid-cols-2">
         <DigitalPresence />
        <GlobalJourneys />
      
      </div>
    </div>
  );
}
