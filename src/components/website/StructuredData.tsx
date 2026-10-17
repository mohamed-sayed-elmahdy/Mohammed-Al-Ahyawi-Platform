import { SITE_NAME, SITE_ORIGIN } from "@/lib/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_ORIGIN}/#person`,
      name: SITE_NAME,
      alternateName: "Mohammed Al Ahyawi",
      url: SITE_ORIGIN,
      image: `${SITE_ORIGIN}/mohamed.png`,
      jobTitle: "إعلامي وصانع محتوى",
      description:
        "منصة محمد الإحيوي الإعلامية لتوثيق التجارب والجولات والتقييمات داخل المملكة وحول العالم.",
      sameAs: [
        "https://www.tiktok.com/@Alaqari2006",
        "https://www.snapchat.com/add/Alaqari2006",
        "https://x.com/Alaqari2006",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: SITE_NAME,
      inLanguage: "ar-SA",
      publisher: { "@id": `${SITE_ORIGIN}/#person` },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
