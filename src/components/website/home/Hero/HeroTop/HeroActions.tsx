import {  Search } from "lucide-react";
import { Plane } from "lucide-react";
import PrimaryButton from "@/components/website/navbar/PrimaryButton";


export default function HeroActions() {
  return (
    <div className="mt-6 flex gap-4">

      <button
        className="discoveryButton discoveryButton-colors
        flex gap-2 justify-center items-center
        relative py-2 px-6 text-sm font-semibold
         text-(--color-text)
         rounded-[10px]"
      >
        استكشف التجارب
        <Search size={20} />

      </button>
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



