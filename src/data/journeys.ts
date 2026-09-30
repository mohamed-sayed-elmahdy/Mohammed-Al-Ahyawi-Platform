import type { Journey } from "@/types/website";

export const journeyScopeFilters = [
  { value: "saudi", label: "داخل المملكة" },
  { value: "international", label: "عالمية" },
] as const;

export const saudiJourneyCities = [
  "الرياض",
  "جدة",
  "مكة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الظهران",
  "الطائف",
  "بريدة",
  "عنيزة",
  "القصيم",
  "أبها",
  "خميس مشيط",
  "تبوك",
  "حائل",
  "جازان",
  "صبيا",
  "نجران",
  "الباحة",
  "بلجرشي",
  "سكاكا",
  "القريات",
  "ينبع",
  "العلا",
  "الأحساء",
  "الهفوف",
  "المبرز",
  "القطيف",
  "رأس تنورة",
  "الجبيل",
  "رابغ",
] as const;

export const internationalJourneyCountries = ["مصر", "الإمارات", "تركيا", "جورجيا"] as const;

export const journeys: Journey[] = [
  {
    id: "riyadh-winter", title: "شتاء الرياض بين الذوق والتجربة", description: "جولة موثقة بين وجهات الضيافة والتجارب الموسمية التي منحت العاصمة إيقاعًا مختلفًا.", image: "/hero-slider-images/restaurants.jpg", href: "/journeys/riyadh-winter", scope: "saudi", country: "السعودية", city: "الرياض", dateLabel: "يناير ٢٠٢٥", placesCount: 14, featured: true, year: "2025", route: "الرياض",
  },
  {
    id: "jeddah-coast", title: "على كورنيش جدة", description: "محطات تجمع بين البحر والمطاعم والمقاهي التي تصنع من الواجهة البحرية تجربة متكاملة.", image: "/featuredCards/jeddah-beaches.jpg", href: "/journeys/jeddah-coast", scope: "saudi", country: "السعودية", city: "جدة", dateLabel: "ديسمبر ٢٠٢٤", placesCount: 11, year: "2024", route: "جدة",
  },
  {
    id: "makkah-heritage", title: "مكة بذاكرة المكان", description: "تجربة تتتبع التفاصيل الهادئة في الضيافة والأماكن القريبة من قلب مكة.", image: "/hero-slider-images/tourist-attractions.jpg", href: "/journeys/makkah-heritage", scope: "saudi", country: "السعودية", city: "مكة", dateLabel: "نوفمبر ٢٠٢٤", placesCount: 8, year: "2024", route: "مكة",
  },
  {
    id: "dammam-sea", title: "إيقاع البحر في الدمام", description: "يوم موثق بين الجلسات البحرية وتجارب الطعام التي تعكس طاقة المنطقة الشرقية.", image: "/hero-slider-images/seafood.jpg", href: "/journeys/dammam-sea", scope: "saudi", country: "السعودية", city: "الدمام", dateLabel: "أكتوبر ٢٠٢٤", placesCount: 9, year: "2024", route: "الدمام",
  },
  {
    id: "taif-summer", title: "صيف الطائف", description: "من المرتفعات إلى المقاهي المحلية، جولة ترصد روح الطائف في موسمها الأجمل.", image: "/hero-slider-images/parks.jpg", href: "/journeys/taif-summer", scope: "saudi", country: "السعودية", city: "الطائف", dateLabel: "أغسطس ٢٠٢٤", placesCount: 10, featured: true, year: "2024", route: "الطائف",
  },
  {
    id: "qassim-taste", title: "القصيم بطعم مختلف", description: "وجهات محلية تعكس كرم القصيم وتنوّعها، من المخبوزات إلى الجلسات العائلية.", image: "/hero-slider-images/sweets-bakeries.jpg", href: "/journeys/qassim-taste", scope: "saudi", country: "السعودية", city: "القصيم", dateLabel: "يونيو ٢٠٢٤", placesCount: 7, year: "2024", route: "القصيم",
  },
  {
    id: "cairo-heritage", title: "القاهرة بين الأصالة والنبض", description: "رحلة تلتقط طاقة القاهرة في مطاعمها وشوارعها وتفاصيل ضيافتها الثرية.", image: "/Gemini_Generated_Image_a8dvvea8dvvea8dv.jfif", href: "/journeys/cairo-heritage", scope: "international", country: "مصر", city: "القاهرة", dateLabel: "مايو ٢٠٢٤", placesCount: 12, year: "2024", route: "القاهرة",
  },
  {
    id: "dubai-details", title: "دبي بعين التجربة", description: "محطات مختارة في مدينة لا تتوقف عن تقديم أفكار جديدة في الضيافة والترفيه.", image: "/hero-slider-images/international-destinations1.jpg", href: "/journeys/dubai-details", scope: "international", country: "الإمارات", city: "دبي", dateLabel: "مارس ٢٠٢٤", placesCount: 13, featured: true, year: "2024", route: "دبي",
  },
  {
    id: "istanbul-streets", title: "إسطنبول من الشارع إلى المائدة", description: "رحلة تجمع نكهات المدينة القديمة مع التجارب العصرية التي تستحق التوثيق.", image: "/hero-slider-images/international-destinations3.jpg", href: "/journeys/istanbul-streets", scope: "international", country: "تركيا", city: "إسطنبول", dateLabel: "أكتوبر ٢٠٢٣", placesCount: 15, year: "2023", route: "إسطنبول",
  },
  {
    id: "trabzon-nature", title: "طرابزون والطبيعة القريبة", description: "مسار هادئ بين الطبيعة والضيافة المحلية في واحدة من أجمل مدن شمال تركيا.", image: "/hero-slider-images/international-destinations5.jpg", href: "/journeys/trabzon-nature", scope: "international", country: "تركيا", city: "طرابزون", dateLabel: "سبتمبر ٢٠٢٣", placesCount: 8, year: "2023", route: "طرابزون",
  },
  {
    id: "tbilisi-calm", title: "تبليسي الهادئة", description: "جولة بين المقاهي الصغيرة والأحياء ذات الطابع الخاص في قلب جورجيا.", image: "/hero-slider-images/international-destinations6.jpg", href: "/journeys/tbilisi-calm", scope: "international", country: "جورجيا", city: "تبليسي", dateLabel: "يوليو ٢٠٢٣", placesCount: 9, year: "2023", route: "تبليسي",
  },
  {
    id: "batumi-shore", title: "باتومي على مهل", description: "تفاصيل بحرية ومطاعم محلية جعلت من باتومي محطة صيفية خفيفة ولا تُنسى", image: "/hero-slider-images/beaches-corniche.jpg", href: "/journeys/batumi-shore", scope: "international", country: "جورجيا", city: "باتومي", dateLabel: "يونيو ٢٠٢٣", placesCount: 6, year: "2023", route: "باتومي",
  },
];
