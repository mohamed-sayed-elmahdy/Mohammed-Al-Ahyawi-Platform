import Logo from "./Logo";
import NavLinks from "@/components/website/Navbar/NavLinks";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import PrimaryButton from "./PrimaryButton";
import { Plane } from "lucide-react";
export default function Navbar() {
  return (
    <header>
      <div
        className="
        absolute
        top-0
        left-0
        w-full
        mx-auto
        flex
        py-2
        max-w-[1600px]
        items-center
        justify-between
        px-6
        "
      >
        {/* Right */}

        <Logo />

        {/* Center */}

        <NavLinks />

        {/* Left */}

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <span className=" text-white/60 border-l border-white/30  h-6">
          </span>
          <LanguageSwitcher />

          <PrimaryButton 
          href="/request-visit"
          ariaLabel="طلب زيارة" 
          animation="group-hover:animate-plane-fly"
          icon={<Plane
            size={18}
            strokeWidth={2.2}
            className="fill-[#f3c15c] text-[#f3c15c] "
          />}
          >

            <span>طلب زيارة</span>
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}