import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",

  description:
    "Browse authentic reviews of restaurants, cafes, retreats, and destinations by journalist Mohammed Al Ahyawi.",

  keywords: [
    "Restaurant Reviews",
    "Cafe Reviews",
    "Saudi Arabia",
    "Mohammed Al Ahyawi",
    "Travel Reviews",
    "Real Experiences",
  ],

  authors: [
    {
      name: "Mohammed Al Ahyawi",
    },
  ],

  openGraph: {
    title: "Reviews | Mohammed Al Ahyawi",
    description:
      "Discover authentic reviews and real experiences documented by journalist Mohammed Al Ahyawi.",
    url: "https://mohammedalahyawi.com/reviews",
    siteName: "Mohammed Al Ahyawi",
    images: [
      {
        url: "/images/og/reviews-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Reviews by Mohammed Al Ahyawi",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reviews | Mohammed Al Ahyawi",
    description:
      "Authentic reviews of restaurants, cafes, retreats, and destinations.",
    images: ["/images/og/reviews-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://mohammedalahyawi.com/reviews",
  },
};
function page() {
  return (
    <div>page</div>
  )
}

export default page;