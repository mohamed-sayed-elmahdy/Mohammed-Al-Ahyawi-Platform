import Link from "next/link";
import PrimaryButton from "@/components/website/navbar/PrimaryButton";
import { Plane } from "lucide-react";
import { GrMapLocation } from "react-icons/gr";

export default function HeroActions() {
  return (
    <div className=" mt-5 flex flex-wrap w-full max-w-md  items-stretch justify-center gap-3 sm:mt-6 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
      <Link
        href="https://www.google.com/maps/contrib/100054163876261320161/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="استكشف التجارب"
        className="discoveryButton discoveryButton-colors min-w-38.75  relative flex items-center justify-center gap-2 rounded-[14px] px-2 sm:px-6 py-3 text-sm font-semibold text-(--color-text) sm:py-2"
      >
        استكشف التجارب
        <GrMapLocation size={20} />
      </Link>

      <PrimaryButton
        href="/request-visit"
        className="justify-center px-2 sm:px-6"
        ariaLabel="طلب زيارة"
        animation="group-hover:animate-plane-fly"
        icon={
          <Plane
            size={18}
            strokeWidth={2.2}
            className="fill-[#f3c15c] text-[#f3c15c]"
          />
        }
      >
        <span>طـلـب زيـــارة</span>
      </PrimaryButton>
    </div>
  );
}