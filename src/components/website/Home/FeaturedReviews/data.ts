export type DiscoveryCategory = {
  id: string;
  title: string;
  description: string;
  count: number;
  image: string;
  href: string;
  icon: "utensils" | "coffee" | "hotel" | "palms" | "landmark" | "ferrisWheel" | "plane";
};

export const discoveryCategories: DiscoveryCategory[] = [
  {
    id: "restaurants",
    title: "مطاعم",
    description: "تجارب طعام استثنائية في أفضل المطاعم المحلية والعالمية.",
    count: 128,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    href: "/categories/restaurants",
    icon: "utensils",
  },
  {
    id: "cafes",
    title: "مقاهي",
    description: "أجواء مميزة وقهوة استثنائية في أجمل المقاهي.",
    count: 96,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
    href: "/categories/cafes",
    icon: "coffee",
  },
  {
    id: "hotels",
    title: "فنادق",
    description: "إقامات فاخرة وخدمات راقية حول العالم.",
    count: 74,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    href: "/categories/hotels",
    icon: "hotel",
  },
  {
    id: "resorts",
    title: "منتجعات",
    description: "استرخاء ورفاهية في أجمل المنتجعات.",
    count: 58,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85",
    href: "/categories/resorts",
    icon: "palms",
  },
  {
    id: "destinations",
    title: "وجهات سياحية",
    description: "أماكن ساحرة وتجارب لا تُنسى.",
    count: 112,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85",
    href: "/categories/destinations",
    icon: "landmark",
  },
  {
    id: "entertainment",
    title: "أماكن ترفيهية",
    description: "لحظات ممتعة وتجارب ترفيهية متنوعة.",
    count: 63,
    image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=85",
    href: "/categories/entertainment",
    icon: "ferrisWheel",
  },
  {
    id: "world-tours",
    title: "جولات عالمية",
    description: "رحلات وتجارب في أروع مدن العالم.",
    count: 91,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
    href: "/categories/world-tours",
    icon: "plane",
  },
];
