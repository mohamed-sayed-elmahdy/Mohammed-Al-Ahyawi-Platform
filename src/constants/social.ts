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
    href: "https://maps.app.goo.gl/K5RruLyekHvbg8qx6?g_st=iw",
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