import type { MetadataRoute } from "next";
import { reviews } from "@/data/reviews";
import { SITE_ORIGIN } from "@/lib/seo";

const indexablePages = ["/", "/about", "/journeys", "/reviews", "/services"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...indexablePages.map((path) => ({ url: `${SITE_ORIGIN}${path}` })),
    ...reviews.map((review) => ({
      url: `${SITE_ORIGIN}/reviews/${review.id}`,
      images: review.images.map((image) =>
        new URL(image, SITE_ORIGIN).toString()
      ),
    })),
  ];
}
