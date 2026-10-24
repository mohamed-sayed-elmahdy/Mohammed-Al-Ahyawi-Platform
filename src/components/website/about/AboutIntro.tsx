import { BadgeCheck, GraduationCap, MapPinned } from "lucide-react";

const info = [
  { title: "بكالوريوس", detail: "جامعة الملك عبدالعزيز", icon: GraduationCap },
  { title: "الرخصة الإعلامية", detail: "الهيئة العامة لتنظيم الإعلام", icon: BadgeCheck },
  { title: "مقيم في", detail: "جدة - المملكة العربية السعودية", icon: MapPinned },
];

export function AboutIntro() {
  return (
    <section className="relative z-10 mx-auto -mt-3 max-w-[1780px] px-4 sm:px-8 lg:px-10">
      <div dir="ltr" className="grid overflow-hidden rounded-[30px] border border-(--color-accent)/80  shadow-2xl lg:grid-cols-[340px_1fr]">
        <aside className="m-4 rounded-[24px] border border-(--color-secondary-text)/35 p-4 sm:m-6 sm:p-6">
          {info.map(({ title, detail, icon: Icon }) => <div key={title} className="flex items-center gap-4 py-4 not-last:border-b not-last:border-(--color-accent)/20 sm:gap-5 sm:py-5"><Icon className="size-9 shrink-0 text-(--color-accent) sm:size-12" /><div><h3 className="text-sm font-bold sm:text-base lg:text-lg">{title}
          </h3><p className="mt-1 text-[13px] leading-5 text-(--color-secondary-text) sm:text-sm sm:leading-6">{detail}</p>
          </div></div>)}
        </aside>
        <div className="flex min-h-[260px] flex-col justify-center px-5 py-9 text-center sm:min-h-[310px] sm:px-8 sm:py-12 lg:px-16">
              <div dir="rtl" className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Right Line */}
          <div className="flex items-center mt-2">

            <span
              className="
            h-px
            w-8 sm:w-20
            bg-linear-to-r
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
            />
            <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />

          </div>

          {/* Text */}
          <h2
            className="
             font-alexandria text-center text-xl font-bold
              text-(--color-accent)
              sm:text-2xl lg:text-4xl
        "
          >
             من هو محمد؟
          </h2>

          {/* Left Line */}
          <div className="flex items-center mt-2">
            <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />

            <span
              className="
            h-px
            w-8 sm:w-20
            bg-linear-to-l
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
            />

          </div>
        </div>
          <div className="mt-5 space-y-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-7 sm:space-y-4 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
            <p>
              أنا محمد بن إبراهيم الإحيوي، من مواليد الرياض، ومن أصول عنيزة القصيمية، وأقيم في مدينة جدة
            </p>

            <p>
              أنتمي إلى بيت تعليمي، وحاصل على درجة البكالوريوس من جامعة الملك عبدالعزيز
            </p>

            <p>
              أنا صحفي سعودي ومدير محتوى، وحاصل على الرخصة الإعلامية من الهيئة العامة لتنظيم الإعلام
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
