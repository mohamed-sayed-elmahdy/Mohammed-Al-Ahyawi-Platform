import type { Metadata } from "next";

export const SITE_ORIGIN = "https://mohammad-alehewi.vercel.app";

export const SITE_NAME = "منصة الإعلامي محمد الإحيوي";

export const DEFAULT_SOCIAL_IMAGE = "/og/default.jpg";

export const DEFAULT_SOCIAL_IMAGE_ALT =
  "صورة تعريفية لمنصة الإعلامي محمد الإحيوي";
 
type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  openGraphType?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = DEFAULT_SOCIAL_IMAGE_ALT,
  noIndex = false,
  openGraphType = "website",
}: PageMetadataOptions): Metadata {

  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "ar_SA",
      type: openGraphType,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    robots: noIndex
      ? {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      }
      : {
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
}