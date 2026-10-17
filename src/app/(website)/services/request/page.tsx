import type { Metadata } from "next";
import { Suspense } from "react";
import ServiceRequestForm from "@/components/website/services/ServiceRequestForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "طلب خدمات المنشآت",
  description:
    "أرسل بيانات منشأتك والخدمات التي تحتاجها ليراجع فريق محمد الإحيوي نطاق العمل والتكلفة.",
  path: "/services/request",
  noIndex: true,
});

export default function ServiceRequestPage() {
  return (
    <main className="bg-(--color-background) px-5 py-12 text-(--color-text) sm:px-8 sm:py-16">
      <Suspense
        fallback={
          <p className="mx-auto max-w-3xl py-16 text-center text-(--color-secondary-text)">
            جارٍ تحميل نموذج الطلب...
          </p>
        }
      >
        <ServiceRequestForm />
      </Suspense>
    </main>
  );
}
