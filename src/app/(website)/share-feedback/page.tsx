import type { Metadata } from "next";
import FeedbackForm from "@/components/website/feedback/FeedbackForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "شاركنا رأيك",
  description:
    "شاركنا انطباعك أو اقتراحك أو ملاحظتك حول منصة محمد الإحيوي",
  path: "/share-feedback",
  noIndex: true,
});

export default function ShareFeedbackPage() {
  return (
    <main className="relative isolate min-h-[70vh] overflow-hidden bg-(--color-background) px-5 py-12 text-(--color-text) sm:px-8 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_70%)]" />

      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="text-sm font-semibold text-(--color-accent)">
            صوتك يهمنا
          </p>
          <h1 className="font-alexandria mt-3 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            شاركنا رأيك
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-(--color-secondary-text) sm:text-base">
            أخبرنا عن تجربتك مع المنصة، أو شاركنا اقتراحًا أو ملاحظة أو سؤالًا
            يساعدنا على تطويرها
          </p>
        </header>

        <FeedbackForm />
      </div>
    </main>
  );
}