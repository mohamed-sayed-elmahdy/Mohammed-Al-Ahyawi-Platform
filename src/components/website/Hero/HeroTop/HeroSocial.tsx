import { heroSocial } from '@/components/website/Hero/data'
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import {  HiOutlineMap} from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import  PremiumBorder  from '@/components/website/Hero/HeroTop/PremiumBorder';
export default function HeroSocial() {
  const icons: Record<string, any> = {
    tiktok: FaTiktok,
    ig: FaInstagram,
    map: FaGoogle,
    x: FaXTwitter,
  }

  return (
    <div className="w-full flex flex-col items-center gap-3 ">
          

      <PremiumBorder className="rounded-full w-full ">       
         {heroSocial.map((s) => {
        const Comp = icons[s.id]
        return (
          <button key={s.id} aria-label={s.label} className="cursor-pointer rounded-full bg-black/20 border border-amber-200/20 p-2 text-(--color-text) transition-colors">
            <Comp size={20} className={`${s.id === "googleMapProfile" ? "text-(--color-accent)" : ""}`} />
          </button>
        )
      })}
      </PremiumBorder>
    </div>
  )
}
