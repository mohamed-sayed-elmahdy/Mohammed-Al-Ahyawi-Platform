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
        <aside className="m-6 rounded-[24px] border border-(--color-secondary-text)/35 p-6">
          {info.map(({ title, detail, icon: Icon }) => <div key={title} className="flex items-center gap-5 py-5 not-last:border-b not-last:border-(--color-accent)/20"><Icon className="size-12 shrink-0 text-(--color-accent)" /><div><h3 className="text-lg font-bold">{title}
          </h3><p className="mt-1 text-sm leading-6 text-(--color-secondary-text)">{detail}</p>
          </div></div>)}
        </aside>
        <div className="flex min-h-[310px] flex-col justify-center px-8 py-12 text-center lg:px-16">
              <div dir="rtl" className="flex items-center justify-center gap-4">
          {/* Right Line */}
          <div className="flex items-center mt-2">

            <span
              className="
            h-px
            w-20
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
             font-alexandria text-center text-3xl font-bold
              text-(--color-accent)
              sm:text-4xl
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
            w-20
            bg-linear-to-l
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
            />

          </div>
        </div>
          <div className="mt-7 space-y-4 text-lg leading-9 text-(--color-secondary-text) sm:text-xl">
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
