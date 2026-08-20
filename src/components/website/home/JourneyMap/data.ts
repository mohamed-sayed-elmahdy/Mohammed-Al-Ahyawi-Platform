import type { Journey } from "@/types/website";

export const journeys: Journey[] = [
  {
    id: "journey-1",
    title: "انطلاقة سعودية",
    description: "زيارة إلى الرياض وجدة لتوثيق المطاعم والمقاهي الفاخرة.",
    year: "2024",
    route: "الرياض → جدة",
    href: "/journeys/saudi",
  },
  {
    id: "journey-2",
    title: "رحلة الشرق الأوسط",
    description: "تجربة الضيافة في القاهرة ودبي ومرسى علم.",
    year: "2024",
    route: "القاهرة → دبي",
    href: "/journeys/middle-east",
  },
  {
    id: "journey-3",
    title: "العالمية الهادئة",
    description: "مسارٌ في جورجيا وتركيا نحو تجربة طبيعية ومصممة.",
    year: "2025",
    route: "تبليسي → اسطنبول",
    href: "/journeys/global",
  },
];
