import type { Country, Destination } from "@/types/website";

export const countries: Country[] = [
  {
    id: "saudi",
    name: "السعودية",
    href: "/countries/saudi",
  },
  {
    id: "egypt",
    name: "مصر",
    href: "/countries/egypt",
  },
];

export const destinations: Destination[] = [
  {
    id: "riyadh",
    name: "الرياض",
    countryId: "saudi",
    href: "/destinations/riyadh",
  },
  {
    id: "cairo",
    name: "القاهرة",
    countryId: "egypt",
    href: "/destinations/cairo",
  },
];
