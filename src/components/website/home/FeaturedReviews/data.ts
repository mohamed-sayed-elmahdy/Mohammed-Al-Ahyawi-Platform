export type FeaturedReview = {
  id: string;
  title: string;
  excerpt: string;
  rating: number;
  location: string;
  date: string;
  image: string;
  badge: string;
  href: string;
};

export const reviews: FeaturedReview[] = [
  {
    id: "riyadh-dining",
    title: "حين تلتقي النكهة بالإطلالة",
    excerpt: "تجربة عشاء استثنائية في مطعم يجمع بين النكهات المعاصرة والإطلالة البانورامية على أفق الرياض الساحر.",
    rating: 4.9,
    location: "الرياض · السعودية",
    date: "15 مايو 2025",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=90",
    badge: "تجربة مميزة",
    href: "/reviews/riyadh-dining",
  },
  {
    id: "jeddah-cafe",
    title: "زاوية هادئة في قلب البلد",
    excerpt: "مقهى بطابع تاريخي يقدم تجربة قهوة فريدة في أجواء من الهدوء والجمال.",
    rating: 4.7,
    location: "جدة · السعودية",
    date: "7 أبريل 2025",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85",
    badge: "مختارة",
    href: "/reviews/jeddah-cafe",
  },
  {
    id: "red-sea-hotel",
    title: "إقامة تلامس الهدوء",
    excerpt: "فندق بوتيك يمنحك خصوصية كاملة وتجربة استرخاء لا تُنسى على شاطئ البحر الأحمر.",
    rating: 4.8,
    location: "البحر الأحمر · السعودية",
    date: "21 مارس 2025",
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1000&q=85",
    badge: "مختارة",
    href: "/reviews/red-sea-hotel",
  },
  {
    id: "alula-history",
    title: "رحلة عبر التاريخ والطبيعة",
    excerpt: "العلا تجمع بين عبق التاريخ وسحر الطبيعة في تجربة مختلفة لا تُنسى.",
    rating: 4.9,
    location: "العلا · السعودية",
    date: "10 فبراير 2025",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=85",
    badge: "وجهة مميزة",
    href: "/reviews/alula-history",
  },
  {
    id: "dubai-dining",
    title: "نكهات عالمية بإبداع محلي",
    excerpt: "مطعم يقدم مزيجًا فريدًا من النكهات العالمية بلمسة محلية راقية.",
    rating: 4.6,
    location: "دبي · الإمارات",
    date: "5 يناير 2025",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
    badge: "تجربة مميزة",
    href: "/reviews/dubai-dining",
  },
  {
    id: "swiss-nature",
    title: "هدوء الجبال وسحر الطبيعة",
    excerpt: "تجربة طبيعية تأخذك إلى عالم من السكينة والمناظر الخلابة.",
    rating: 4.8,
    location: "زيرمات · سويسرا",
    date: "12 ديسمبر 2024",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
    badge: "تجربة مميزة",
    href: "/reviews/swiss-nature",
  },
];
