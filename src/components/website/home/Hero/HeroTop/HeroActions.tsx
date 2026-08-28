  import Link from "next/link";
  import PrimaryButton from "@/components/website/navbar/PrimaryButton";
import { Plane } from "lucide-react";
import { GrMapLocation } from "react-icons/gr";


export default function HeroActions() {
  return (
    <div className="mt-6 flex gap-4">
      <Link
        href="https://www.google.com/maps/contrib/100054163876261320161/"
        target="_blank"
        aria-label="استكشف التجارب"
        className="discoveryButton discoveryButton-colors
        flex gap-2 justify-center items-center
        relative py-2 px-6 text-sm font-semibold
         text-(--color-text)
         rounded-[10px]"
      >
        استكشف التجارب
        <GrMapLocation size={20} />

      </Link>
         <PrimaryButton 
          href="/request-visit"
          className="px-6"
          ariaLabel="طلب زيارة" 
          animation="group-hover:animate-plane-fly"
          icon={<Plane
            size={18}
            strokeWidth={2.2}
            className="fill-[#f3c15c] text-[#f3c15c] "
          />}
          >

            <span>طـلـب زيـــارة</span>
          </PrimaryButton>

    </div>
  );
}



