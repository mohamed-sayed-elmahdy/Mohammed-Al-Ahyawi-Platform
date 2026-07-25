export interface Category {
  id: string;
  title: string;
  description: string;
  href?: string;
  image?: string;
}

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
  year: string;
  route: string;
  href?: string;
}

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

export interface CTA {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
