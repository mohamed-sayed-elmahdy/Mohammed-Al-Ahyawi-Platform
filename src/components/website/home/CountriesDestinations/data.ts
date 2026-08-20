import type { Country, Destination } from "@/types/website";

export const countries: Country[] = [
  {
    id: "saudi",
    name: "السعودية",
    description: "محطات ضيافة وثقافة تمتد بين الرياض وجدة والعلا.",
    image:
      "https://images.unsplash.com/photo-1507408460682-0e22b6a4d011?auto=format&fit=crop&w=900&q=80",
    href: "/countries/saudi",
  },
  {
    id: "uae",
    name: "الإمارات",
    description: "تجارب فوتوغرافية فاخرة في دبي وأبوظبي.",
    image:
      "https://images.unsplash.com/photo-1542144582-1ba004d88a6f?auto=format&fit=crop&w=900&q=80",
    href: "/countries/uae",
  },
  {
    id: "georgia",
    name: "جورجيا",
    description: "وجهة خارجية تجمع الجبال والطابع الأوروبي اللطيف.",
    image:
      "https://images.unsplash.com/photo-1488805990569-3c9e1d76d51c?auto=format&fit=crop&w=900&q=80",
    href: "/countries/georgia",
  },
];

export const destinations: Destination[] = [
  {
    id: "riyadh",
    name: "الرياض",
    countryId: "saudi",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    href: "/destinations/riyadh",
  },
  {
    id: "jeddah",
    name: "جدة",
    countryId: "saudi",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    href: "/destinations/jeddah",
  },
  {
    id: "dubai",
    name: "دبي",
    countryId: "uae",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    href: "/destinations/dubai",
  },
  {
    id: "tbilisi",
    name: "تبليسي",
    countryId: "georgia",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80",
    href: "/destinations/tbilisi",
  },
];
