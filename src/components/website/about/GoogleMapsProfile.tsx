import {
  ClipboardCheck,
  MessageCircleMore,
  Share2,
  Trophy,
} from "lucide-react";

const features = [
  {
    title: "التخصص والمنهجية في التقييم",
    text: "نزور، نجرّب، نقيّم، نحسّن. توصيات تطويرية عملية تساعد النشاط على تحسين التجربة والخدمة",
    icon: ClipboardCheck,
    border: "sm:border-e border-(--color-accent)/35",
  },
  {
    title: "نبرة التقييم",
    text: "أسلوب إعلامي مهني ودقيق يشرح تجربة المكان والخدمة بوضوح، ويقدم ملاحظات قابلة للتحسين",
    icon: MessageCircleMore,
    border: "md:border-e border-(--color-accent)/35",
  },
  {
    title: "التكامل الرقمي والانتشاري",
    text: "يستثمر خلفيته الصحفية في مراجعات منظمة، وينشر التجارب عبر منصات التواصل للوصول إلى شريحة أوسع",
    icon: Share2,
  },
];

export function GoogleMapsProfile() {
  return (
    <section className="mx-auto max-w-[1780px] px-4 py-7 sm:px-8 lg:px-10">
      <div className="rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-7 sm:p-10">
        <h2 className="font-alexandria text-center text-3xl font-bold leading-relaxed text-(--color-accent) sm:text-4xl">
          نبذة عن حسابه على قوقل ماب ومزاياه وتأثيره للزائر والنشاط التجاري معاً
        </h2>
        <div dir="ltr" className="mt-8 grid gap-7 lg:grid-cols-[310px_1fr]">
          <aside
            dir="rtl"
            className="min-h-[480px] rounded-[26px] border border-(--color-accent)/70 bg-(--color-background)/55 p-7 text-center"
          >
            <p dir="ltr" className="text-xl font-medium">
              LEVEL 9
            </p>
            <p className="text-base text-(--color-secondary-text)">
              Local Guide
            </p>
            <div className="mx-auto my-6 flex size-28 items-center justify-center rounded-[34px] border-2 border-(--color-accent) text-6xl font-bold text-(--color-accent)">
              9
            </div>
            <div className="border-t border-(--color-accent)/35 pt-6">
              <p className="text-lg text-(--color-accent)">أكثر من</p>
              <strong
                dir="ltr"
                className="block text-5xl text-(--color-accent)"
              >
                75,500
              </strong>
              <p className="mt-2 text-xl font-bold text-(--color-accent)">
                نقطة
              </p>
            </div>
            <p className="mt-6 text-sm leading-7 text-(--color-secondary-text)">
              تم تحقيقها عبر مراجعات موثوقة وتجارب حقيقية على مدى سنوات
            </p>
          </aside>
          <div
            dir="rtl"
            className="rounded-[26px] border border-(--color-accent)/35 bg-(--color-background)/25 p-6 md:p-6"
          >
            <p className="text-center text-lg leading-10 text-(--color-secondary-text) sm:text-xl">
              ويُعد حساب الإعلامي والصحفي السعودي محمد الإحيوي واحداً من أبرز
              وأقوى حسابات التقييم والمراجعات الموثوقة على قوقل ماب
            </p>
            <div className="mt-9 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {features.map(({ title, text, icon: Icon, border }) => (
                <article
                  key={title}
                  className={`border-(--color-accent)/35 pt-5 text-center ${border} md:border-t-0 md:border-l-(--color-accent)/35 md:pl-5 md:first:border-e`}
                >
                  <Icon className="mx-auto size-11 text-(--color-accent)" />
                  <h3 className="mt-4 text-lg font-bold text-(--color-accent)">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-(--color-secondary-text)">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
