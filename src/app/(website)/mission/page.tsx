
import type { Metadata } from "next";
import { MissionStatement } from "@/components/website/mission/MissionStatement";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "رسالة المنصة",
  description:
    "تعرف على رسالة منصة محمد الإحيوي في نقل التجارب وخدمة الزوار وتحسين الخدمات.",
  path: "/mission",
});

export default function MissionPage() {
  return (
    <div className="min-h-[65vh] bg-(--color-background) text-(--color-text)">
      <div className="mx-auto flex min-h-[65vh] max-w-[1780px] items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
        <MissionStatement />
      </div>
    </div>
  );
}