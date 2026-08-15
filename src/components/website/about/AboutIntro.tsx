import { BadgeCheck, GraduationCap, MapPinned } from "lucide-react";

const info = [
  { title: "بكالوريوس", detail: "جامعة الملك عبدالعزيز", icon: GraduationCap },
  { title: "الرخصة الإعلامية", detail: "الهيئة العامة لتنظيم الإعلام", icon: BadgeCheck },
  { title: "المقيم في", detail: "جدة - المملكة العربية السعودية", icon: MapPinned },
];

export function AboutIntro() {
  return (
    <section className="relative z-10 mx-auto -mt-3 max-w-[1780px] px-4 sm:px-8 lg:px-10">
      <div dir="ltr" className="grid overflow-hidden rounded-[30px] border border-(--color-accent)/50 bg-(--color-surface)/80 shadow-2xl lg:grid-cols-[340px_1fr]">
        <aside dir="rtl" className="m-6 rounded-[24px] border border-(--color-secondary-text)/35 p-6">
          {info.map(({ title, detail, icon: Icon }) => <div key={title} className="flex items-center gap-5 py-5 not-last:border-b not-last:border-(--color-accent)/20"><Icon className="size-12 shrink-0 text-(--color-accent)" /><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-(--color-secondary-text)">{detail}</p></div></div>)}
        </aside>
        <div dir="rtl" className="flex min-h-[310px] flex-col justify-center px-8 py-12 text-center lg:px-16">
          <div className="flex items-center justify-center gap-4"><i className="h-px w-20 bg-(--color-accent)/70" /><span className="size-2 rounded-full bg-(--color-accent)" /><h2 className="font-alexandria text-2xl font-bold text-(--color-accent) sm:text-3xl">من هو محمد؟</h2><span className="size-2 rounded-full bg-(--color-accent)" /><i className="h-px w-20 bg-(--color-accent)/70" /></div>
          <div className="mt-7 space-y-4 text-lg leading-9 text-(--color-secondary-text) sm:text-xl"><p>محمد بن إبراهيم الإحيوي من مواليد الرياض ومن أصول عنيزة القصيمية ويقيم في مدينة جدة.</p><p>ومن بيت تعليمي حاصل على البكالوريوس من جامعة الملك عبدالعزيز.</p><p>صحفي سعودي ومدير محتوى حاصل على الرخصة الإعلامية من الهيئة العامة لتنظيم الإعلام.</p></div>
        </div>
      </div>
    </section>
  );
}
