import Image from "next/image";
import type { Metadata } from "next";
import ServicesFaq from "@/components/website/services/ServicesFaq";
import {
  ArrowDown,
  ArrowLeft,
  Camera,
  CircleHelp,
  FileCheck2,
  MapPin,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات المنشآت على Google",
  description:
    "خدمات تأسيس وإدارة الملف التجاري للمنشآت على بحث Google وخرائط Google، من إثبات الملكية إلى المحتوى والتصوير",
};

const contactEmail = "Alaqari2006@hotmail.com";
const contactPhone = "+966551946666";

const serviceGroups = [
  {
    number: "1-",
    title: "التأسيس والتجهيز",
    icon: Store,
    services: [
      {
        title: "تأسيس حساب",
        description:
          "إنشاء الملف التجاري للمنشأة وتجهيزه بالبيانات الأساسية التي تقدمها",
        icon: Store,
      },
      {
        title: "إثبات الملكية",
        description:
          "إرشادك خلال خطوات إثبات ملكية المنشأة الرسمية، مع إتمام التحقق من جانب المالك",
        icon: ShieldCheck,
      },
      {
        title: "إكمال الملف التجاري",
        description:
          "مراجعة بيانات الملف وإضافة المعلومات والصور المتاحة بالتنسيق مع منشأتك",
        icon: FileCheck2,
      },
    ],
  },
  {
    number: "2-",
    title: "الإدارة والتواصل",
    icon: MessageCircle,
    services: [
      {
        title: "إدارة المحتوى",
        description:
          "تنظيم وتحديث محتوى الملف وفق المعلومات والعروض التي تعتمدها المنشأة",
        icon: SearchCheck,
      },
      {
        title: "الرد على المراجعات",
        description:
          "إعداد ردود مهنية على مراجعات العملاء، بما يعكس أسلوب المنشأة ويحترم تجربتهم",
        icon: MessageCircle,
      },
    ],
  },
  {
    number: "3-",
    title: "التصوير والتوثيق",
    icon: Camera,
    services: [
      {
        title: "التصوير والتوثيق",
        description:
          "تصوير المكان أو المنتجات وتجهيز صور مناسبة لإضافتها إلى الملف التجاري، وفق نطاق يتم الاتفاق عليه مسبقًا",
        icon: Camera,
      },
    ],
  },
];

const processSteps = [
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
];

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

function createServiceEmail(serviceTitles: string[]) {
  const serviceList = serviceTitles.map((title) => `- ${title}`).join("\n");
  const requestDescription =
    serviceTitles.length === 1
      ? `أرغب في الاستفسار عن خدمة ${serviceTitles[0]}`
      : `أرغب في الاستفسار عن الخدمات التالية:\n${serviceList}`;
  const subject = encodeURIComponent(
    serviceTitles.length === 1
      ? `طلب خدمة: ${serviceTitles[0]}`
      : "طلب مجموعة خدمات"
  );
  const body = encodeURIComponent(
    `السلام عليكم،\n\n${requestDescription}\n\nاسم المنشأة:\nنوع النشاط:\nالمدينة:\nرابط الملف التجاري إن وجد:\nتفاصيل إضافية:\n\n`
  );

  return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

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
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-(--color-accent) px-5 py-3 font-bold text-[#08111f] transition hover:bg-[#e8c76a]"
            >
              استعرض الخدمات
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
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
              src="/services.jpg"
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

      <section id="services" className="scroll-mt-16 border-y border-white/10 bg-white/2">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pb-10">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-3 text-sm font-semibold text-(--color-accent)">
                <span className="h-px w-8 bg-(--color-accent)" />
                خدمات المنشآت
              </p>
              <h2 className="font-alexandria mt-4 text-2xl font-bold leading-relaxed sm:text-3xl lg:text-4xl">
                كل ما يحتاجه ملف منشأتك في مكان واحد
              </h2>
              <p className="mt-3 max-w-xl leading-8 text-(--color-secondary-text)">
                من التأسيس والتحقق، إلى الإدارة والتصوير؛ اختر نقطة البداية
                المناسبة لمنشأتك
              </p>
            </div>
            <div className="flex w-fit items-center gap-3 border rounded-lg border-(--color-accent)/25 bg-(--color-accent)/5 px-4 py-2">
              <span className="font-alexandria text-2xl font-bold text-(--color-accent)">
                {String(
                  serviceGroups.reduce(
                    (count, group) => count + group.services.length,
                    0
                  )
                )}
              </span>
              <span className="text-sm text-(--color-secondary-text)">
                خدمات متخصصة
              </span>
            </div>
          </div>

          <div className="mt-2">
            {serviceGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <section
                  key={group.number}
                  aria-labelledby={`service-group-${group.number}`}
                  className="grid gap-5 border-b border-white/10 py-8 last:border-b-0 sm:py-10 lg:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.8fr)] lg:gap-12 lg:py-12"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-lg border border-(--color-accent)/30 bg-(--color-accent)/10 text-(--color-accent)">
                        <GroupIcon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="font-alexandria text-base font-semibold tracking-[0.12em] text-(--color-accent)">
                        {group.number}
                      </span>
                              <h3
                        id={`service-group-${group.number}`}
                        className="font-alexandria  text-lg font-bold leading-relaxed  sm:text-xl"
                      >
                        {group.title}
                      </h3>
                    </div>
                    <div>
              
                    </div> 
                  </div>

                  <div className="grid gap-3 sm:block">
                    {group.services.map((service) => {
                      const ServiceIcon = service.icon;

                      return (
                        <article
                          key={service.title}
                          className="group grid grid-cols-[40px_minmax(0,1fr)] items-start gap-x-3 gap-y-3 rounded-lg border border-white/10 bg-(--color-surface)/50 p-4 transition-colors hover:border-(--color-accent)/30 hover:bg-(--color-surface) sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:items-center sm:gap-x-5 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:border-white/20 sm:bg-transparent sm:px-4 sm:py-5 sm:hover:bg-white/[0.03]"
                        >
                          <span className="flex size-10 items-center justify-center rounded-lg border border-(--color-accent)/20 bg-(--color-accent)/10 text-(--color-accent) transition-colors group-hover:border-(--color-accent)/40 sm:size-11 sm:border-white/10 sm:bg-(--color-surface)/70 sm:group-hover:bg-(--color-accent)/10">
                            <ServiceIcon aria-hidden="true" className="size-5" />
                          </span>
                          <div>
                            <h4 className="font-alexandria text-base font-semibold leading-7 sm:text-lg">
                              {service.title}
                            </h4>
                            <p className="mt-1 text-sm leading-7 text-(--color-secondary-text)">
                              {service.description}
                            </p>
                          </div>
                          <a
                            // href={createServiceEmail([service.title])}
                            
                            className="col-span-2 cursor-pointer inline-flex w-full items-center justify-between rounded-md border-t border-white/10 pt-3 text-sm font-bold text-(--color-accent) transition-colors hover:text-[#e8c76a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:col-span-1 sm:w-fit sm:justify-self-end sm:border-0 sm:py-1"
                          >
                            اطلب الخدمة
                            <ArrowLeft
                              aria-hidden="true"
                              className="size-4 transition-transform group-hover:-translate-x-1"
                            />
                          </a>
                        </article>
                      );
                    })}
                  </div>
                  {group.services.length > 1 && (
                    <a
                      href={createServiceEmail(
                        group.services.map((service) => service.title)
                      )}
                      aria-label={`اطلب جميع خدمات ${group.title}`}
                      className="inline-flex w-fit items-center gap-3 rounded-lg border border-(--color-accent)/35 bg-(--color-accent)/10 px-4 py-3 text-sm font-bold text-(--color-accent) transition-colors hover:border-(--color-accent)/60 hover:bg-(--color-accent)/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) lg:col-start-2"
                    >
                      <span>اطلب جميع خدمات المجموعة</span>
                      <span className="border-s border-(--color-accent)/30 ps-3 text-xs font-semibold">
                        {group.services.length}
                      </span>
                      <ArrowLeft aria-hidden="true" className="size-4" />
                    </a>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
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
      </section>

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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-(--color-accent) px-5 py-3 font-bold text-[#08111f] transition hover:bg-[#e8c76a]"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              راسلنا بالبريد
            </a>
            <a
              href={`tel:${contactPhone}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <MapPin aria-hidden="true" className="size-4" />
              اتصل بنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}