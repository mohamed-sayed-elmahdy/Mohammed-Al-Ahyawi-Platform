import { heroSocial } from '@/components/website/Hero/data'
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMapPin } from "react-icons/hi2";
import  PremiumBorder  from './PremiumBorder';
export default function HeroSocial() {
  const icons: Record<string, any> = {
    tiktok: FaTiktok,
    ig: FaInstagram,
    map: HiOutlineMapPin,
    x: FaXTwitter,
  }

  return (
    <div className="w-full flex flex-col items-center gap-3 ">
          

      <PremiumBorder className="rounded-full w-full ">       
         {heroSocial.map((s) => {
        const Comp = icons[s.id]
        return (
          <button key={s.id} aria-label={s.label} className="rounded-full bg-black/20 border border-amber-200/20 p-2 text-(--color-text) transition-colors">
            <Comp size={20} className={`${s.id === "map" ? "text-(--color-accent)" : ""}`} />
          </button>
        )
      })}
      </PremiumBorder>
    </div>
  )
}
