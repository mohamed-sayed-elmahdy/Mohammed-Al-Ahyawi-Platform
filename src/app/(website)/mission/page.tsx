
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "رسالة المنصة",
  description: "رسالة منصة محمد الإحيوي.",
  path: "/mission",
  noIndex: true,
});

function MissionPage() {
  return (
    <main>
      <h1>رسالة المنصة</h1>
    </main>
  );
}

export default MissionPage;