import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Alexandria,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/website/navbar/Navbar";
import Footer from "@/components/website/footer/Footer";
import StructuredData from "@/components/website/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "محمد الإحيوي | تجارب وجولات وتقييمات موثقة",
    template: "%s | محمد الإحيوي",
  },
  description:
    "منصة محمد الإحيوي الإعلامية لتوثيق التجارب والجولات والتقييمات في المطاعم والمقاهي والفنادق والوجهات داخل المملكة وحول العالم.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_ORIGIN }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "travel",
  keywords: [
    "محمد الإحيوي",
    "تجارب سياحية",
    "جولات سياحية",
    "تقييمات المطاعم والمقاهي",
    "وجهات السعودية",
  ],
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "/",
    siteName: SITE_NAME,
    title: "محمد الإحيوي | تجارب وجولات وتقييمات موثقة",
    description:
      "اكتشف تجارب وجولات وتقييمات موثقة في السعودية وحول العالم مع محمد الإحيوي.",
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: DEFAULT_SOCIAL_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "محمد الإحيوي | تجارب وجولات وتقييمات موثقة",
    description:
      "اكتشف تجارب وجولات وتقييمات موثقة في السعودية وحول العالم مع محمد الإحيوي.",
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: DEFAULT_SOCIAL_IMAGE_ALT }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`  
    ${geistSans.variable}
    ${geistMono.variable}
    ${alexandria.variable}
    ${ibmPlexArabic.variable} dark antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="منصة الإعلامي محمد الإحيوي" />
      </head>
      <body className="min-h-screen flex flex-col">
        <StructuredData />
        <Navbar />
        <main className="flex-1 ">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
