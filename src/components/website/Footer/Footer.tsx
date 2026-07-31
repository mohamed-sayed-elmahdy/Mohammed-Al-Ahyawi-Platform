import Image from "next/image";
import Link from "next/link";
import FooterLinksCard from "@/components/website/Footer/FooterLinksCard";
import { categories, navigation, officialLinks, socialLinks } from "@/constants/footer";
import {
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa6";
import {
  HiArrowTopRightOnSquare,
  HiChevronLeft,
  HiHeart,
  HiPaperAirplane,
} from "react-icons/hi2";
const footerColumns = [
  {
    title: "روابط تهمك",
    items: officialLinks,
  },
  {
    title: "أبرز الفئات",
    items: categories,
  },
  {
    title: "استكشف",
    items: navigation,
  },
];

function FooterTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-alexandria text-[21px] font-semibold text-(--color-accent)">{children}<span className="mx-auto mt-4 block h-px w-12 bg-(--color-accent)" /></h2>;
}

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/20 bg-[#07111e] text-(--color-text)">
      <div className="mx-auto px-6 py-12 sm:px-10 lg:px-14 xl:px-[72px] xl:py-[42px]">
        <div className="grid gap-12 text-center md:grid-cols-2 md:text-right xl:grid-cols-[1.05fr_1.3fr_.92fr_.92fr_1.08fr] xl:items-start xl:gap-9">
          <section className="order-1">
            <FooterTitle>تواصل</FooterTitle>
            <p className="mt-10 text-[16px] leading-9 text-slate-200">هل لديك تجربة تستحق المشاركة؟<br />أرسل لي دعوتك لزيارتها وتوثيقها.</p>
            <address className="mt-16 space-y-6 not-italic text-[15px] text-slate-200">
              <a href="mailto:info@mohammed-al-ahyawi.com" className="flex items-center justify-center gap-4 transition hover:text-(--color-accent) md:justify-start"><FaRegEnvelope className="shrink-0 text-xl text-(--color-accent)" /><span dir="ltr">info@mohammed-al-ahyawi.com</span></a>
              <a href="tel:+966501234567" className="flex items-center justify-center gap-4 transition hover:text-(--color-accent) md:justify-start"><FaPhone className="shrink-0 text-xl text-(--color-accent)" /><span dir="ltr">+966 50 123 4567</span></a>
              <p className="flex items-center justify-center gap-4 md:justify-start"><FaLocationDot className="shrink-0 text-xl text-(--color-accent)" />الرياض، المملكة العربية السعودية</p>
            </address>
            <Link href="/request-visit" className="group mt-12 flex h-[76px] items-center justify-center gap-4 rounded-[22px] border border-(--color-accent) text-[17px] font-semibold text-(--color-accent) shadow-[0_12px_22px_rgba(0,0,0,.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(243,193,92,.2)]"><HiPaperAirplane className="text-2xl transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />أرسل دعوة</Link>
          </section>

          {footerColumns.map((column) => (
            <FooterLinksCard
              key={column.title}
              title={column.title}
              items={column.items}
              className="order-4 md:order-2 xl:order-3"
            />
          ))}
          <section className="order-5 text-center">
            <Link href="/" aria-label="الصفحة الرئيسية" className="inline-flex flex-col items-center">
              <Image src="/logo2.png" alt="شعار محمد الأحيوي" width={110} height={110} className="h-[94px] w-auto object-contain" />
              <span className="mt-1 text-[16px] text-slate-100">الإعلامي</span><strong className="font-alexandria mt-1 text-[25px] leading-none">محمد الأحيوي</strong>
              <span className="mt-7 flex items-center gap-2 text-(--color-accent)"><i className="h-px w-16 bg-(--color-accent)/30" /><span className="rotate-45 border border-(--color-accent) p-1"><i className="block h-1 w-1 bg-(--color-accent)" /></span><i className="h-px w-16 bg-(--color-accent)/30" /></span>
            </Link>
            <p className="mx-auto mt-8 max-w-62.5 text-[15px] leading-8 text-slate-300">منصة إعلامية توثق التجارب الحقيقية وتنقلها بمصداقية، بهدف دعم جودة الخدمات وإلهام الآخرين لاكتشاف أفضل الوجهات.</p>
            <p className="mt-12 font-alexandria text-[16px] font-medium text-(--color-accent)">تابعني على</p>
            <div className="mt-7 flex justify-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="
        flex size-[55px]
        items-center
        justify-center
        rounded-full
        border border-(--color-accent)/75
        text-[23px]
        text-slate-100
        transition
        duration-300
        hover:-translate-y-1
        hover:border-(--color-accent)
        hover:text-(--color-accent)
      "
                  >
                    <Icon />
                  </a>
                );
              })}</div>
          </section>
        </div>

        <div className="relative mt-14 border-t border-(--color-accent)/80 pt-10 before:absolute before:right-1/2 before:top-[-5px] before:size-2 before:rotate-45 before:border before:border-(--color-accent) before:bg-[#07111e]">
          <div className="flex flex-col items-center justify-between gap-5 text-[15px] text-slate-300 lg:flex-row">
            <p>صُنع بحب <HiHeart className="mr-3 inline text-xl text-(--color-accent)" /></p>
            <span className="hidden h-7 w-px bg-(--color-accent)/70 lg:block" /><a href="#" className="transition hover:text-(--color-accent)">الشروط والأحكام</a><span className="hidden h-7 w-px bg-(--color-accent)/70 lg:block" /><a href="#" className="transition hover:text-(--color-accent)">سياسة الخصوصية</a><span className="hidden h-7 w-px bg-(--color-accent)/70 lg:block" /><p>© جميع الحقوق محفوظة للإعلامي محمد الأحيوي.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
