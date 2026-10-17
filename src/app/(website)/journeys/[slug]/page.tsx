import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "تفاصيل الجولة",
  description: "تفاصيل الجولات الموثقة لمحمد الإحيوي.",
  path: "/journeys",
  noIndex: true,
});

function JourneyPage() {
  return (
    <main>
      <h1>تفاصيل الجولة</h1>
    </main>
  );
}

export default JourneyPage;