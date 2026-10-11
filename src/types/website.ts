import type { LucideIcon } from "lucide-react";

export type Category = {
    id: string;
    title: string;
    description: string;
    count: number;
    img: string;
    href: string;
    icon: LucideIcon;
    featured: boolean;
    featuredCard: boolean;
    featuredCardImage?: string;
};

export interface Review {
  id: string;
  title: string;
  excerpt: string;
  rating: number;
  location: string;
  date: string;
  image: string;
  href?: string;
}

export type ReviewItem = {
  id: string;
  title: string;
  excerpt: string;
  rating: number;
  categoryId: string;
  categoryLabel: string;
  city: string;
  country: string;
  locationLabel: string;
  dateLabel: string;
  dateISO: string;
  images: [string, ...string[]];
  googleMapsUrl?: string;
  href: string;
  badge?: string;
  featured?: boolean;
};

export type ReviewCategoryFilter = "all" | string;

export type ReviewSort = "newest" | "oldest" | "top-rated" | "lowest-rated";
export interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  location: string;
  date: string;
  href?: string;
}
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href?: string;
}
export interface Journey {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  scope: "saudi" | "international";
  country: string;
  city?: string;
  dateLabel: string;
  placesCount: number;
  featured?: boolean;
  /** Retained for the journey map shown on the home page. */
  year: string;
  /** Retained for the journey map shown on the home page. */
  route: string;
}
export type JourneyScopeFilter = "saudi" | "international";

export type JourneyCityFilter = string | "all";
export interface Country {
  id: string;
  name: string;
  description: string;
  image: string;
  href?: string;
}
export interface Destination {
  id: string;
  name: string;
  countryId?: string;
  image: string;
  href?: string;
}

export type VisitRequestFormValues = {
  name: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  details: string;
};

export type VisitRequestFieldErrors = Partial<
  Record<keyof VisitRequestFormValues, string>
>;

export type Web3FormsVisitRequestPayload = {
  access_key: string;
  subject: string;
  from_name: string;
  replyto: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  visit_details: string;
  visit_terms: string;
  botcheck: string;
};

export type Web3FormsApiResponse = {
  success: boolean;
  message?: string;
};

export type VisitRequestSubmissionResult =
  | { success: true }
  | { success: false; reason: "not-configured" | "request-failed" | "rejected" };

export interface CTA {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
