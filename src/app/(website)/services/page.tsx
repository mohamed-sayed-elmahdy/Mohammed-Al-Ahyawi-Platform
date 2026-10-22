import Image from "next/image";
import type { Metadata } from "next";
import GoldActionLink from "@/components/shared/GoldActionLink";
import ServicesFaq from "@/components/website/services/ServicesFaq";
import ServiceCatalog from "@/components/website/services/ServiceCatalog";
import {
  ArrowLeft,
  CircleHelp,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "خدمات المنشآت على Google",
  description:
    "خدمات تأسيس وإدارة الملف التجاري للمنشآت على بحث Google وخرائط Google، من إثبات الملكية إلى المحتوى والتصوير",
  path: "/services",
  image: "/services1.jpg",
  imageAlt: "خدمات تأسيس وإدارة وتصوير ملفات المنشآت على Google",
});

const contactEmail = "Alaqari2006@hotmail.com";
const contactPhone = "+966551946666";

/* const processSteps = [
  {
    number: "١",
    title: "اختر الخدمة",
    description: "حدد الخدمة المناسبة، ويمكنك طلب أكثر من خدمة معًا",
  },
  {
    number: "٢",
    title: "أرسل بيانات المنشأة",
    description: "أرسل اسم النشاط ومدينته ورابط ملفه إن كان موجودًا",
  },
  {
    number: "٣",
    title: "اتفق على التفاصيل",
    description: "نراجع احتياجك ونوضح نطاق العمل والتكلفة قبل البدء",
  },
]; */

const faqs = [
  {
    question: "هل يمكنني طلب خدمة واحدة فقط؟",
    answer:
      "نعم. يمكنك طلب خدمة منفردة أو الجمع بين عدة خدمات، ويحدد نطاق العمل بعد مراجعة احتياج المنشأة",
  },
  {
    question: "هل تضمن الخدمات ظهور منشأتي في النتائج الأولى؟",
    answer:
      "لا يمكن ضمان ترتيب محدد في نتائج بحث Google أو خرائط Google؛ فالترتيب يخضع لعوامل متعددة وسياسات Google",
  },
  {
    question: "هل أحتاج إلى مشاركة كلمة المرور؟",
    answer:
      "لا تشارك كلمة المرور أو رموز التحقق. تظل ملكية الملف للمنشأة، وترتب صلاحيات الوصول اللازمة بطريقة آمنة عند الحاجة",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-(--color-background) text-(--color-text)">
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent)">
        
            خدمات مخصصة لأصحاب المنشآت
          </p>
          <h1 className="font-alexandria mt-5 max-w-2xl text-3xl font-bold leading-[1.6] sm:text-4xl lg:text-[3.25rem]">
            حضور منشأتك على Google يبدأ من ملف واضح ومتكامل
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-(--color-secondary-text) sm:text-lg">
            من تأسيس الملف التجاري وإكمال بياناته، إلى إدارة محتواه وتصوير
            منشأتك؛ خدمات عملية تساعدك على تقديم معلومات أدق للعملاء
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <GoldActionLink
              href="#services"
              className="min-h-12"
            >
              استعرض الخدمات
            </GoldActionLink>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("استفسار عن خدمات المنشآت")}`}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              تحدث معنا
            </a>
          </div>
          <p className="mt-5 text-sm leading-7 text-(--color-secondary-text)/80">
            تحدد تفاصيل كل خدمة وتكلفتها بعد معرفة احتياج منشأتك
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-135 lg:me-0">
          <div className="absolute -inset-3 rounded-[10px] border border-(--color-accent)/20" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-(--color-surface)">
            <Image
              src="/services1.jpg"
              alt="تصميم ترويجي لخدمات الملف التجاري على Google أمام مقهى"
              width={1280}
              height={720}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <ServiceCatalog />

      {/* <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-(--color-accent)">آلية العمل</p>
            <h2 className="font-alexandria mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">
              خطوات واضحة قبل بدء التنفيذ
            </h2>
            <p className="mt-3 leading-8 text-(--color-secondary-text)">
              نراجع احتياجك أولًا، ونتفق على المطلوب والتكلفة قبل البدء
            </p>
          </div>

          <ol className="divide-y divide-white/10 border-y border-white/10">
            {processSteps.map((step) => (
              <li key={step.number} className="grid gap-3 py-5 sm:grid-cols-[52px_1fr] sm:gap-5">
                <span className="font-alexandria text-2xl font-bold text-(--color-accent)">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-(--color-secondary-text)">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section> */}

      <section className="border-y border-(--color-accent)/15 bg-[#0b1726]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.5fr] lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-(--color-accent)">الشفافية أولًا</p>
            <h2 className="font-alexandria mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">
              خدمة تحترم ملكية منشأتك
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {[
              "لا نطلب كلمة المرور أو رموز التحقق",
              "تنفذ خطوات التحقق الرسمية بمشاركة مالك المنشأة",
              "لا نضمن ترتيبًا محددًا في نتائج البحث",
              "تحدد تفاصيل العمل والتكلفة قبل البدء",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-(--color-secondary-text)">
                <ShieldCheck aria-hidden="true" className="mt-1 size-5 shrink-0 text-(--color-accent)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent)">
              <CircleHelp aria-hidden="true" className="size-4" />
              أسئلة شائعة
            </p>
            <h2 className="font-alexandria mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">
              قبل أن تطلب الخدمة
            </h2>
          </div>
          <ServicesFaq items={faqs} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-(--color-surface)/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-16">
          <div>
            <h2 className="font-alexandria text-xl font-bold leading-relaxed sm:text-2xl">
              هل أنت مستعد لتحسين ملف منشأتك؟
            </h2>
            <p className="mt-2 text-sm leading-7 text-(--color-secondary-text)">
              أرسل تفاصيل نشاطك، وسنتواصل معك لمناقشة الخدمة المناسبة
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("استفسار عن خدمات المنشآت")}`}
              className="discoveryButton discoveryButton-colors relative inline-flex min-h-12 min-w-38.75 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold text-(--color-text) transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:px-6 sm:py-2"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              راسلنا بالبريد
              <ArrowLeft aria-hidden="true" className="size-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}