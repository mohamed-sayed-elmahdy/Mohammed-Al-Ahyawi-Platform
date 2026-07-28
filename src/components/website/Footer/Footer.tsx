import { footerLinks } from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08111f] py-12 text-slate-300">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#f3c15c]">منصة محمد الإحيوي</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            منصة توثيقية فاخرة تركز على التجارب الحقيقية والقصص البصرية التي تثري وعي الزائر.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1200px] px-6 text-sm text-slate-500 sm:text-right">
        © 2025 محمد الإحيوي. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
