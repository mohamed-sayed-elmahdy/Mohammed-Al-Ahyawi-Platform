import { Building2, MapPin, Medal, Newspaper, PenTool } from "lucide-react";

const events = [
  { year: "2012", title: "بداية المسيرة الإعلامية", text: "عبر صحيفة نون الإلكترونية كمحرر.", icon: PenTool },
  { year: "2015", title: "تملك صحيفة نون الإلكترونية", text: "في أواخر عام 2015م، واصل التغطيات الإعلامية الرسمية والأمنية بشكل خاص.", icon: Newspaper },
  { year: "2017", title: "المرشد المحلي على قوقل ماب", text: "أنشأ حساباً كمرشد محلي يكتب انطباعه عن جولاته بين الأماكن.", icon: MapPin },
  { year: "2018", title: "العمل في إمارة منطقة مكة المكرمة - محافظة جدة", text: "في إدارة المراسم والعلاقات العامة وممارسة الإعلام الجديد.", icon: Building2 },
  { year: "2025", title: "المستوى التاسع (مستوى النخبة)", text: "على قوقل ماب، بمجموع أكثر من 50,000 نقطة.", icon: Medal },
];

export function AboutTimeline() {
  return <section className="mx-auto max-w-[1780px] px-4 py-13 sm:px-8 lg:px-10"><div className="overflow-hidden rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 px-7 py-11 sm:px-12"><div className="flex items-center justify-center gap-4"><i className="h-px w-20 bg-(--color-accent)/70" /><span className="size-2 rounded-full bg-(--color-accent)" /><h2 className="font-alexandria text-center text-3xl font-bold text-(--color-accent) sm:text-4xl">رحلتي في الإعلام والتجارب</h2><span className="size-2 rounded-full bg-(--color-accent)" /><i className="h-px w-20 bg-(--color-accent)/70" /></div><div className="relative mt-11 grid gap-9 md:grid-cols-5 md:gap-6"><div className="absolute left-[10%] right-[10%] top-[68px] hidden border-t-2 border-dotted border-(--color-accent)/75 md:block" />{events.map(({ year, title, text, icon: Icon }) => <article key={year} className="relative z-10 text-center"><p className="text-xl font-bold" dir="ltr">{year}</p><div className="mx-auto my-4 flex size-[90px] items-center justify-center rounded-full border border-(--color-accent) bg-(--color-background)"><Icon className="size-10 text-(--color-text)" /></div><h3 className="min-h-14 text-lg font-bold leading-7">{title}</h3><p className="mt-3 text-[15px] leading-7 text-(--color-secondary-text)">{text}</p></article>)}</div></div></section>;
}
