
import { Category } from "@/types/website";
import {
    Candy,
    Coffee,
    CupSoda,
    Croissant,
    FerrisWheel,
    Globe2,
    HeartPulse,
    Hotel,
    Landmark,
    ShoppingBag,
    Trees,
    Utensils,
    Waves,
} from "lucide-react";

// Categories: 
// restaurants, 
// cafes, 
// juices-drinks,
// sweets-bakeries, 
// chocolate,
// beaches, 
// hotels, 
// health-care, 
// tourist-attractions, 
// parks, 
// malls, 
// international-destinations.


export const categories: Category[] = [
    {
        id: 'restaurants',
        title: 'مطاعم',
        description: "تجارب طعام استثنائية في أفضل المطاعم المحلية والعالمية",
        count: 146,
        href: '/reviews?category=restaurants',
        img: '/hero-slider-images/restaurants.jpg',
        icon: Utensils,
        featured: true,
        featuredCard: true,
        featuredCardImage: ""
    },
    {
        id: 'cafes',
        title: 'كافيهات',
        description: "مقاهٍ مميزة تقدم القهوة والأجواء التي تناسب مختلف الأذواق",
        count: 87,
        href: '/reviews?category=cafes',
        img: '/hero-slider-images/cafes.jpg',
        icon: Coffee,
        featured: true,
        featuredCard: true,
        featuredCardImage: ""
    },

    {
        id: 'sweets-bakeries',
        title: 'حلويات ومخابز',
        description: "حلويات طازجة ومخبوزات متنوعة لعشاق المذاق الحلو.",
        count: 58,
        href: '/reviews?category=sweets-bakeries',
        img: '/hero-slider-images/sweets-bakeries.jpg',
        icon: Croissant,
        featured: true,
        featuredCard: true,
        featuredCardImage: ""
    },

    {
        id: 'chocolate',
        title: 'شوكولاته',
        description: "تجارب متنوعة لعشاق الشوكولاته والحلويات المصنوعة منها.",
        count: 0,
        href: '/reviews?category=chocolate',
        img: '/hero-slider-images/chocolate.jpg',
        icon: Candy,
        featured: false,
        featuredCard: false,
        featuredCardImage: ""
    },

    {
        id: 'juices-drinks',
        title: 'عصائر ومشروبات',
        description: "تجارب متنوعة من العصائر الطازجة والمشروبات الباردة والساخنة.",
        count: 0,
        href: '/reviews?category=juices-drinks',
        img: '/hero-slider-images/juices-drinks.jpg',
        icon: CupSoda,
        featured: false,
        featuredCard: false,
        featuredCardImage: ""
    },

    {
        id: 'beaches',
        title: 'شواطئ ومنتجعات',
        description: "وجهات ساحلية ومنتجعات للاسترخاء والاستمتاع بإطلالات البحر",
        count: 37,
        href: '/reviews?category=beaches',
        img: '/hero-slider-images/beaches-corniche.jpg',
        icon: Waves,
        featured: false,
        featuredCard: true,
        featuredCardImage: '/featuredCards/jeddah-beaches.jpg',
    },
    {
        id: 'hotels',
        title: 'فنادق وإقامة',
        description: "أماكن إقامة متنوعة تجمع بين الراحة وجودة الضيافة",
        count: 74,
        href: '/reviews?category=hotels',
        img: '/hero-slider-images/hotels.jpg',
        icon: Hotel,
        featured: true,
        featuredCard: true,
        featuredCardImage: ""
    },
    {
        id: 'health-care',
        title: 'صحة وعناية',
        description: "مراكز وخدمات تهتم بالصحة والعناية الشخصية",
        count: 0,
        href: '/reviews?category=health-care',
        img: '/hero-slider-images/health-care2.jpg',
        icon: HeartPulse,
        featured: true,
        featuredCard: true,
        featuredCardImage: "/hero-slider-images/health-care.jpg"
    },
    {
        id: 'tourist-attractions',
        title: 'معالم سياحية',
        description: "معالم بارزة ووجهات تستحق الزيارة والاستكشاف.",
        count: 91,
        href: '/reviews?category=tourist-attractions',
        img: '/hero-slider-images/elola.jpg',
        icon: Landmark,
        featured: true,
        featuredCard: true,
        featuredCardImage: ""
    },
    {
        id: 'parks',
        title: 'حدائق ومتنزهات',
        description: "مساحات خضراء ومتنزهات مناسبة لقضاء وقت ممتع في الهواء الطلق.",
        count: 69,
        href: '/reviews?category=parks',
        img: '/hero-slider-images/parks4.jpg',
        icon: Trees,
        featured: false,
        featuredCard: false,
        featuredCardImage: ""
    },
    {
        id: 'malls',
        title: 'مولات ومراكز تسوق',
        description: "مراكز تجمع التسوق والمطاعم وخيارات الترفيه في مكان واحد.",
        count: 52,
        href: '/reviews?category=malls',
        img: '/hero-slider-images/malls.jpg',
        icon: ShoppingBag,
        featured: false,
        featuredCard: false,
        featuredCardImage: ""
    },
    {
        id: 'international-destinations',
        title: 'وجهات عالمية',
        description: "وجهات حول العالم تقدم تجارب جديدة وفرصًا للاستكشاف.",
        count: 83,
        href: '/reviews?category=international-destinations',
        img: '/hero-slider-images/international-destinations.jpg',
        icon: Globe2,
        featured: true,
        featuredCard: true,
        featuredCardImage: "/featuredCards/internationalFeaturedCard.png"
    },
];
