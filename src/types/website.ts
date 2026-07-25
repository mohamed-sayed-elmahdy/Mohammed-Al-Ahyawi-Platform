export interface Category {
  id: string;
  title: string;
  description: string;
  href?: string;
}

export interface Review {
  id: string;
  title: string;
  excerpt: string;
  href?: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  href?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  href?: string;
}

export interface Journey {
  id: string;
  title: string;
  description: string;
  href?: string;
}

export interface Country {
  id: string;
  name: string;
  href?: string;
}

export interface Destination {
  id: string;
  name: string;
  countryId?: string;
  href?: string;
}

export interface CTA {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
