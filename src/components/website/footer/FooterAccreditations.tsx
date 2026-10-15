import Image from "next/image";

export default function FooterAccreditations() {
  return (
    <section
      dir="rtl"
      aria-label="الاعتمادات الرسمية"
      className="mt-10 border-t border-(--color-accent)/80 py-5"
    >
      <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-right">
        <div className="order-2 flex items-center justify-center gap-5 lg:order-1 lg:justify-start">
          <a
            href="https://gmedia.gov.sa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="الهيئة العامة لتنظيم الإعلام"
            className="transition-opacity hover:opacity-80"
          >
            <Image
              src="/media-regulation-logo-white.svg"
              alt="الهيئة العامة لتنظيم الإعلام"
              width={190}
              height={74}
              className="h-auto w-[145px] sm:w-[170px] text-white!"
            />
          </a>

          <span aria-hidden="true" className="h-10 w-px bg-white/20" />

          <a
            href="https://www.vision2030.gov.sa/ar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="رؤية السعودية 2030"
            className="transition-opacity hover:opacity-80"
          >
            <Image
              src="/vision2030.webp"
              alt="رؤية السعودية 2030"
              width={150}
              height={90}
              className="h-auto w-[115px] sm:w-[135px]"
            />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-alexandria text-sm font-medium text-(--color-accent)">
            الاعتمادات الرسمية
          </p>

          <div className="mt-2 flex flex-col items-center gap-2 text-sm text-slate-200 sm:flex-row sm:gap-4 lg:justify-end">
            <p>
              رقم التسجيل المهني: {" "}
              <span dir="ltr" className="font-semibold tracking-wide text-slate-50">
                553901
              </span>
            </p>
            <span aria-hidden="true" className="hidden h-4 w-px bg-white/25 sm:block" />
            <p>
              وثيقة العمل الحر: {" "}
              <span dir="ltr" className="font-semibold tracking-wide text-slate-50">
                FL-604436977
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
