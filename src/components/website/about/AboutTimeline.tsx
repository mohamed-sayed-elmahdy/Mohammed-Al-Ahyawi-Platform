import { Building2, MapPin, Medal, Newspaper, PenTool } from "lucide-react";

const events = [
  {
    year: "2012",
    title: "بداية مسيرتي الإعلامية",
    text: "بدأت عبر صحيفة نون الإلكترونية كمحرر",
    icon: PenTool,
  },

  {
    year: "2015",
    title: "تملكي صحيفة نون الإلكترونية",
    text: "في أواخر عام 2015م، واصلت التغطيات الإعلامية الرسمية والأمنية بشكل خاص",
    icon: Newspaper,
  },

  {
    year: "2017",
    title: "أصبحت مرشدا محليا على قوقل ماب",
    text: "أنشأت حسابا كمرشد محلي أكتب فيه انطباعاتي عن جولاتي بين الأماكن",
    icon: MapPin,
  },

  {
    year: "2018",
    title: "العمل في إمارة منطقة مكة المكرمة - محافظة جدة",
    text: "عملت في إدارة المراسم والعلاقات العامة ومارست الإعلام الجديد",
    icon: Building2,
  },

  {
    year: "2025",
    title: "المستوى التاسع (مستوى النخبة)",
    text: "وصلت على قوقل ماب إلى المستوى التاسع، بمجموع أكثر من 50,000 نقطة",
    icon: Medal,
  },
];

export function AboutTimeline() {
  return (
    <section className="mx-auto max-w-[1780px] px-4 py-13 sm:px-8 lg:px-10">
      <div
        className="
          overflow-hidden rounded-[30px]
          border border-(--color-accent)
          
          px-7 py-11
          sm:px-12
        "
      >
        <div className="flex items-center justify-center gap-4">
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
            رحلتي في الإعلام والتجارب
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

        <div className="relative mt-11 grid gap-9 md:grid-cols-5 md:gap-6">
          <div
            className="
              absolute left-[10%] right-[10%] top-[90px]
              hidden border-t-2 border-dotted
              border-(--color-accent)
              md:block
            "
          />

          {events.map(({ year, title, text, icon: Icon }) => (
            <article key={year} className="relative z-10 text-center">
              <p className="text-xl font-bold" dir="ltr">
                {year}
              </p>

              <div
                className="
                  mx-auto my-4 flex size-[90px]
                  items-center justify-center
                  rounded-full
                  border border-(--color-accent)
                  bg-(--color-background)
                "
              >
                <Icon className="size-10 text-(--color-text)" />
              </div>

              <h3 className="text-lg font-bold ">
                {title}
              </h3>

              <p
                className="
                  mt-3 text-[15px] leading-7
                  text-(--color-secondary-text)
                "
              >
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}