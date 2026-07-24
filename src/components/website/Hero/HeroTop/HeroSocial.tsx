import { heroSocial } from '@/components/website/Hero/data'
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMapPin } from "react-icons/hi2";
export default function HeroSocial() {
  const icons: Record<string, any> = {
    ig: FaInstagram,
    tiktok: FaTiktok,
    map: HiOutlineMapPin,
    x: FaXTwitter,
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-md border border-amber-800 p-3 flex gap-3 bg-black/40">
        {heroSocial.map((s) => {
          const Comp = icons[s.id]
          return (
            <button key={s.id} aria-label={s.label} className="rounded-full bg-black/20 p-2 text-amber-200">
              <Comp size={18} />
            </button>
          )
        })}
      </div>
    </div>
  )
}
