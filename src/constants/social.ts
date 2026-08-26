// src/constants/social.ts

export const socialLinks = [
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@Alaqari2006",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/noon_jeddah_rest_cafe",
    external: true,
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/Alaqari2006",
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/Alaqari2006",
    external: true,
  },
  {
    id: "google-maps",
    label: "Google Maps",
    href: "https://www.google.com/maps/contrib/100054163876261320161/",
    external: true,
  },
  {
    id: "snapchat",
    label: "Snapchat",
    href: "https://www.snapchat.com/add/Alaqari2006",
    external: true,
  }
 
] as const;

export type SocialLink = (typeof socialLinks)[number];
export type SocialId = SocialLink["id"];