import type { Metadata } from "next";
import Home from "@/components/website/home/Home";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "تجارب وجولات وتقييمات موثقة",
  description:
    "اكتشف تجارب المطاعم والمقاهي والوجهات، وجولات موثقة داخل المملكة وحول العالم مع الإعلامي محمد الإحيوي.",
  path: "/",
});

export default function Page() {
  return <Home />;
} 
  