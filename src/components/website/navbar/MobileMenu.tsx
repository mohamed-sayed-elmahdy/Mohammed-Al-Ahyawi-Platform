"use client";

import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import NavLinks from "@/components/website/navbar/NavLinks";
import ThemeToggle from "@/components/website/navbar/ThemeToggle";
import LanguageSwitcher from "@/components/website/navbar/LanguageSwitcher";
import PrimaryButton from "@/components/website/navbar/PrimaryButton";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center rounded-full border border-white/25 text-(--color-text) transition hover:border-(--color-accent) hover:text-(--color-accent)"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden={!open}
      />

      {/* Drawer — من اليمين لأن الموقع RTL */}
      <aside
        className={`fixed top-0 inset-s-0 z-50 flex h-full w-[min(86vw,320px)] flex-col border-l border-(--color-accent)/25 bg-(--color-background) shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="قائمة التنقل"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <p className="font-alexandria text-lg font-bold text-(--color-accent)">
            القائمة
          </p>
          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={close}
            className="flex size-9 items-center justify-center rounded-full border border-white/20 text-(--color-text) transition hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <NavLinks
            onNavigate={close}
            className="flex flex-col gap-1"
            itemClassName="block rounded-xl px-3 py-3 text-base font-semibold text-(--color-text) transition hover:bg-(--color-accent)/10 hover:text-(--color-accent)"
          />
        </nav>

        <div className="space-y-4 border-t border-white/10 px-5 py-5">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <PrimaryButton
            href="/request-visit"
            ariaLabel="طلب زيارة"
            className="w-full"
            animation="group-hover:animate-plane-fly"
            icon={
              <Plane
                size={18}
                strokeWidth={2.2}
                className="fill-[#f3c15c] text-[#f3c15c]"
              />
            }
          >
            <span>طلب زيارة</span>
          </PrimaryButton>
        </div>
      </aside>
    </div>
  );
}