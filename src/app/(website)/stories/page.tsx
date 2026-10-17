import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "القصص",
  description: "قصص وتجارب محمد الإحيوي.",
  path: "/stories",
  noIndex: true,
});

function StoriesPage() {
  return (
    <main>
      <h1>القصص</h1>
    </main>
  );
}

export default StoriesPage;