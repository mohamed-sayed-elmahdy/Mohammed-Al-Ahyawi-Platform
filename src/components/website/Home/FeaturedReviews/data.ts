import type { Review } from "@/types/website";

export const reviews: Review[] = [
  {
    id: "review-1",
    title: "حين تلتقي الذوّاقة بالإطلالة الليلية",
    excerpt: "مطعم فاخر في الرياض يقدّم تجربة طعام خارج المسار الاعتيادي مع أجواء محلية أنيقة.",
    rating: 4.9,
    location: "الرياض، السعودية",
    date: "15 مايو 2025",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    href: "/reviews/review-1",
  },
  {
    id: "review-2",
    title: "في قلب المدينة: مقهى يحتفي بالتأمل والضوء",
    excerpt: "مقهى مفعم بالهدوء يحمل توقيع قهوة عربية وتفاصيل فنية داخل جدة.",
    rating: 4.7,
    location: "جدة، السعودية",
    date: "03 مايو 2025",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    href: "/reviews/review-2",
  },
  {
    id: "review-3",
    title: "منتجع في نسيم الصحراء مع إحساس عالمي",
    excerpt: "منتجع فاخر في العلا يمزج التصميم العربي بهدوء الطبيعة الصحراوية.",
    rating: 4.8,
    location: "العلا، السعودية",
    date: "22 أبريل 2025",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    href: "/reviews/review-3",
  },
];
