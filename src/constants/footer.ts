import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import {
  HiBuildingOffice2,
  HiCamera,
  HiGlobeAlt,
  HiMapPin,
  HiSparkles,
} from "react-icons/hi2";
import { GiPalmTree, GiPlateClaw, GiTeapotLeaves } from "react-icons/gi";
import { MdHotel, MdOutlineRestaurant } from "react-icons/md";
import {
  HiHome,
  HiUser,
  HiFlag,
  HiMap,
  HiStar,
  HiBookOpen,
  HiDocumentText,
  HiEnvelope,
} from "react-icons/hi2";

export const navigation = [
  {
    label: "الرئيسية",
    href: "/",
    icon: HiHome,
  },
  {
    label: "نبذة",
    href: "/about",
    icon: HiUser,
  },
  {
    label: "الرسالة",
    href: "/mission",
    icon: HiFlag,
  },
  {
    label: "الجولات",
    href: "/journeys",
    icon: HiMap,
  },
  {
    label: "التقييمات",
    href: "/reviews",
    icon: HiStar,
  },
  {
    label: "القصص",
    href: "/stories",
    icon: HiBookOpen,
  },
  {
    label: "المقالات",
    href: "/articles",
    icon: HiDocumentText,
  },
  {
    label: "طلب زيارة",
    href: "/request-visit",
    icon: HiEnvelope,
  },
] as const;

export const categories = [
  {
    label: "مطاعم",
    href: "/categories/restaurants",
    icon: MdOutlineRestaurant,
  },
  {
    label: "مقاهي",
    href: "/categories/cafes",
    icon: GiTeapotLeaves,
  },
  {
    label: "فنادق",
    href: "/categories/hotels",
    icon: MdHotel,
  },
  {
    label: "منتجعات",
    href: "/categories/resorts",
    icon: GiPalmTree,
  },
  {
    label: "وجهات سياحية",
    href: "/categories/destinations",
    icon: HiMapPin,
  },
  {
    label: "أنشطة",
    href: "/categories/activities",
    icon: HiCamera,
  },
  {
    label: "جولات داخل المملكة",
    href: "/categories/saudi-tours",
    icon: HiMapPin,
  },
  {
    label: "جولات عالمية",
    href: "/categories/world-tours",
    icon: HiGlobeAlt,
  },
] as const;

export const officialLinks = [
  {
    label: "الهيئة العامة للترفيه",
    href: "https://www.gea.gov.sa",
    icon: HiSparkles,
    external: true,
  },
  {
    label: "وزارة الإعلام",
    href: "https://www.media.gov.sa",
    icon: GiPalmTree,
    external: true,
  },
  {
    label: "هيئة التراث",
    href: "https://heritage.moc.gov.sa",
    icon: HiBuildingOffice2,
    external: true,
  },
  {
    label: "منصة روح السعودية",
    href: "https://www.visitsaudi.com",
    icon: HiSparkles,
    external: true,
  },
  {
    label: "الهيئة السعودية للسياحة",
    href: "https://www.sta.gov.sa",
    icon: HiGlobeAlt,
    external: true,
  },
  {
    label: "منصة معروف",
    href: "https://maroof.sa",
    icon: HiMapPin,
    external: true,
  },
  {
    label: "هيئة فنون الطهي",
    href: "https://culinary.moc.gov.sa",
    icon: GiPlateClaw,
    external: true,
  },
] as const;

export const socialLinks = [
  {
    label: "TikTok",
    href: "#",
    icon: FaTiktok,
    external: true,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
    external: true,
  },
  {
    label: "X",
    href: "#",
    icon: FaXTwitter,
    external: true,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
    external: true,
  },
] as const;