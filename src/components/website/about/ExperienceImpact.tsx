import { Store, UserRoundCheck } from "lucide-react";

export function ExperienceImpact() {
  return (
    <section className="min-h-full rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-5 sm:p-8 lg:p-10">
      <h2 className="font-alexandria text-center text-xl font-bold text-(--color-accent) sm:text-2xl lg:text-3xl">
        أثر تجربتي
      </h2>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
        <article className="rounded-[24px] border border-(--color-secondary-text)/30 bg-(--color-background)/30 p-5 text-center sm:p-7">
          <Store className="mx-auto size-10 text-(--color-accent) sm:size-12" />
          <h3 className="mt-4 text-lg font-bold text-(--color-accent) sm:text-xl">
            للنشاط التجاري
          </h3>
          <p className="mt-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-4 sm:text-[15px] sm:leading-8 lg:text-base">
            تقديم ملاحظات بناءة تسهم في تحسين جودة الخدمة، ورفع رضا العملاء، وبناء سمعة رقمية أكثر موثوقية
          </p>
        </article>

        <article className="rounded-[24px] border border-(--color-secondary-text)/30 bg-(--color-background)/30 p-5 text-center sm:p-7">
          <UserRoundCheck className="mx-auto size-10 text-(--color-accent) sm:size-12" />
          <h3 className="mt-4 text-lg font-bold text-(--color-accent) sm:text-xl">
            للزائر
          </h3>
          <p className="mt-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-4 sm:text-[15px] sm:leading-8 lg:text-base">
            توفير معلومات موثوقة وشاملة تساعد الزائر في اتخاذ القرار، وتمنحه تجربة أكثر أمانًا ووضوحاً
          </p>
        </article>
      </div>


    </section>
  );
}
