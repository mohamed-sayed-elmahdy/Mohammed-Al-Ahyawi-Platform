import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Alexandria,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/website/Navbar/Navbar";
import Footer from "@/components/website/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

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
  title: {
    default: "Mohammed Al Ahyawi",
    template: "%s | Mohammed Al Ahyawi",
  },
  description:
    "Official media platform for Mohammed Al Ahyawi showcasing authentic journeys, reviews, stories, and experiences.",
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
      <body className="min-h-screen flex flex-col">
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
