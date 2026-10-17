import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "المقالات",
  description: "مقالات محمد الإحيوي.",
  path: "/articles",
  noIndex: true,
});

function ArticlesPage() {
  return (
    <main>
      <h1>المقالات</h1>
    </main>
  );
}

export default ArticlesPage;