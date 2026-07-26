import { CalendarDays, Search } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "@/components/website/Navbar/PrimaryButton";


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
        className="flex gap-2 justify-center items-center py-0.5"
        borderWidth={1.8}
        href="/request-visit"
        children="استعرض ملفه على خرائط جوجل"
        
      />

    </div>
  );
}



