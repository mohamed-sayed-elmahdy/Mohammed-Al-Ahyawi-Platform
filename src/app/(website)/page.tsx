import type { Metadata } from "next";
import Home from "@/components/website/home/Home";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "الصفحة الرئيسية",
  description:
    "أول منصة رقمية لإعلامي ومرشد سعودي لتوثيق وتقييم تجارب المطاعم والكافيهات والوجهات والجولات داخل المملكة وخارجها على قوقل ماب | منصة الإعلامي محمد الإحيوي",
  path: "/",
});

export default function Page() {
  return <Home />;
} 
  