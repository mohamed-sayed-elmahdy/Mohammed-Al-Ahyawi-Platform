import { socialLinks } from '@/constants/social';
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { PiSnapchatLogoLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import PremiumBorder from '@/components/website/home/Hero/HeroTop/PremiumBorder';
import Link from 'next/link';
export default function HeroSocial() {

  const socialMap = Object.fromEntries(
    socialLinks.map((link) => [link.id, link.href])
  );
const socialChannels = [
  { id: "google-maps", name: "Google Maps", icon: FaGoogle },
  { id: "tiktok", name: "TikTok", icon: FaTiktok },
  { id: "instagram", name: "Instagram", icon: FaInstagram },
  { id: "snapchat", name: "Snapchat", icon: PiSnapchatLogoLight },
  { id: "x", name: "X", icon: FaXTwitter },
] as const;


  return (
    <div className="w-full flex flex-col items-center gap-3 ">


      <PremiumBorder className="rounded-full w-full ">
        {socialChannels.map((s ) => {

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
              <s.icon size={20}  />
            </Link>
          )
        })}
      </PremiumBorder>
    </div>
  )
}
