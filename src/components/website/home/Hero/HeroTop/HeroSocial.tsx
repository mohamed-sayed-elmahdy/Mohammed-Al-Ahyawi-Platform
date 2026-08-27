import { socialLinks } from '@/constants/social';
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { PiSnapchatLogoLight } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";

import PremiumBorder from '@/components/website/home/Hero/HeroTop/PremiumBorder';
import Link from 'next/link';
export default function HeroSocial() {

  const socialMap = Object.fromEntries(
    socialLinks.map((link) => [link.id, link.href])
  );
  const socialChannels = [
    { id: "snapchat", name: "Snapchat", icon: PiSnapchatLogoLight },
    { id: "x", name: "X", icon: FaXTwitter },
    { id: "instagram", name: "Instagram", icon: FaInstagram },
    { id: "tiktok", name: "TikTok", icon: FaTiktok },
    { id: "google-maps", name: "Google Maps", icon: GrMapLocation },

  ] as const;


  return (
    <div className="w-full flex flex-col items-center gap-3 ">


      <PremiumBorder className="rounded-full w-full ">
        {socialChannels.map((s) => {

          return (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="p-2 text-(--color-text)  border-amber-200/20 bg-black/20 border rounded-full cursor-pointer text-center  
            transition-all duration-300
             hover:-translate-y-1 hover:scale-100 
             hover:text-(--color-accent)"
              key={s.id} href={socialMap[s.id] ?? "#"}
            >
              <s.icon size={20} />
            </Link>
          )
        })}
      </PremiumBorder>
    </div>
  )
}
