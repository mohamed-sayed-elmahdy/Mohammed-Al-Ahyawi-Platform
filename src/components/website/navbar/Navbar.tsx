"use client";
import Logo from "@/components/website/navbar/Logo";
import NavLinks from "@/components/website/navbar/NavLinks";
import ThemeToggle from "@/components/website/navbar/ThemeToggle";
import LanguageSwitcher from "@/components/website/navbar/LanguageSwitcher";
import PrimaryButton from "@/components/website/navbar/PrimaryButton";
import MobileMenu from "@/components/website/navbar/MobileMenu";
import { Plane } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navbarAbsolute = pathname === "/";

  return (
    <header className="relative z-50">
      <div
        className={`
          ${navbarAbsolute ? "absolute" : "relative"}
          top-0 left-0 w-full
          mx-auto max-w-[1600px]
          grid grid-cols-[1fr_auto] items-center
          gap-3 px-4 py-3
          sm:px-6
          lg:grid-cols-[1fr_auto_1fr]
        `}
      >
        {/* Right: Logo */}
        <Logo />

        {/* Center: desktop links only */}
        <div className="hidden justify-center lg:flex">
          <NavLinks />
        </div>

        {/* Left: actions */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-4">
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <span className="h-6 border-l border-white/30" />
            <LanguageSwitcher />
          </div>

          {/* CTA: icon-only on very small screens, full on sm+ */}
          <PrimaryButton
            href="/request-visit"
            ariaLabel="طلب زيارة"
            animation="group-hover:animate-plane-fly"
            className="hidden sm:inline-flex"
            icon={
              <Plane
                size={18}
                strokeWidth={2.2}
                className="fill-[#f3c15c] text-[#f3c15c]"
              />
            }
          >
            <span className="hidden md:inline">طلب زيارة</span>
            <span className="md:hidden">زيارة</span>
          </PrimaryButton>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}