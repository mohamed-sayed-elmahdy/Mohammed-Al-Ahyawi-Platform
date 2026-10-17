import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "طلب زيارة",
  description: "أرسل طلب زيارة وتواصل مع فريق محمد الإحيوي.",
  path: "/request-visit",
  noIndex: true,
});

export default function RequestVisitLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
