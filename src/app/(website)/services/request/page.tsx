import type { Metadata } from "next";
import { Suspense } from "react";
import ServiceRequestForm from "@/components/website/services/ServiceRequestForm";

export const metadata: Metadata = {
  title: "طلب خدمات المنشآت",
  description: "أرسل تفاصيل منشأتك والخدمات التي تحتاجها لمراجعة طلبك",
};

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
