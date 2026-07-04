# WEBSITE_ARCHITECTURE

## Project

Media Platform for Journalist Mohammed Al Ahyawi

---

# Website Architecture

```
/
├── Home
├── Journeys
├── Reviews
├── Stories
├── Articles
├── Request Visit
├── About
├── Contact
├── Search
├── Authentication
└── Dashboard
```

---

# Navigation Structure

## Primary Navigation

- Home
- Journeys
- Reviews
- Stories
- Articles
- Request Visit

---

## Secondary Navigation

- About
- Contact
- Language Switcher
- Theme Switcher

---

## User Navigation

- Login
- Profile
- Dashboard

---

# Public Routes

## Home

/

Purpose

Introduce Mohammed Al Ahyawi and guide users to explore the platform.

Sections

- Hero
- Featured Categories
- Featured Reviews
- Featured Stories
- Featured Articles
- Countries
- Statistics
- CTA
- Footer

SEO

Public

Indexed

---

## Journeys

/journeys

Purpose

Display all journeys.

Contains

- Search
- Filters
- Categories
- Countries
- Cities
- Interactive Map

Dynamic Route

/journeys/[slug]

Journey Details

Contains

- Gallery
- Description
- Related Reviews
- Related Stories
- Related Articles
- Share

---

## Reviews

/Reviews

Purpose

Browse all reviews.

Contains

- Search
- Filters
- Categories
- Rating
- Sorting

Dynamic Route

/reviews/[slug]

Contains

- Images
- Rating
- Review
- Location
- Google Maps
- Related Reviews
- Related Journey

---

## Stories

/Stories

Purpose

Browse stories.

Dynamic Route

/stories/[slug]

Contains

- Story Content
- Gallery
- Related Journey
- Related Reviews

---

## Articles

/articles

Dynamic Route

/articles/[slug]

Contains

- Content
- Author
- Publish Date
- Related Articles

---

## Request Visit

/request-visit

Contains

- Business Name
- Business Type
- Contact Person
- Phone
- Email
- City
- Address
- Google Map
- Notes
- Submit

---

## About

/about

Contains

- Biography
- Mission
- Vision
- Achievements
- Timeline

---

## Contact

/contact

Contains

- Contact Form
- Social Media
- Email
- Phone

---

## Search

/search

Contains

Global Search Results

Search by

- Place
- Country
- City
- Story
- Review
- Article

---

# Authentication

/login

/forgot-password

/reset-password

---

# Protected Routes

/dashboard

Only authenticated users.

---

# Dashboard Architecture

/dashboard

Overview

---

/dashboard/reviews

- List
- Create
- Edit
- Delete

---

/dashboard/stories

- List
- Create
- Edit
- Delete

---

/dashboard/articles

- List
- Create
- Edit
- Delete

---

/dashboard/journeys

- List
- Create
- Edit
- Delete

---

/dashboard/places

- List
- Create
- Edit
- Delete

---

/dashboard/categories

- List
- Create
- Edit
- Delete

---

/dashboard/countries

- List
- Create
- Edit
- Delete

---

/dashboard/cities

- List
- Create
- Edit
- Delete

---

/dashboard/media

- Upload
- Delete
- Organize

---

/dashboard/visit-requests

- List
- Details
- Change Status

---

/dashboard/users

- List
- Roles
- Permissions

---

/dashboard/settings

General Settings

Website Settings

SEO

Social Links

Appearance

---

# URL Naming Convention

Use

kebab-case

Examples

/articles/how-to-choose-best-restaurant

/reviews/al-baek-riyadh

/journeys/riyadh-food-tour

---

# Dynamic Routes

```
/journeys/[slug]

/reviews/[slug]

/stories/[slug]

/articles/[slug]
```

---

# Breadcrumb Structure

Example

Home

↓

Journeys

↓

Saudi Arabia

↓

Riyadh

↓

Restaurant Name

---

# SEO Pages

Indexable

- Home
- Reviews
- Stories
- Articles
- Journeys
- About

No Index

- Dashboard
- Login
- Settings
- Admin Pages

---

# Future Routes

/profile

/saved

/newsletter

/mobile-app

/api

---

# Page Relationships

```
Home
│
├── Featured Reviews
│      │
│      └────────► Review Details
│                       │
│                       ├────► Journey
│                       ├────► Story
│                       └────► Related Reviews
│
├── Featured Stories
│      │
│      └────────► Story Details
│
├── Featured Articles
│      │
│      └────────► Article Details
│
└── Countries
       │
       └────────► Journeys
                     │
                     └────► Review
```

---

# Information Architecture

```
Website

│

├── Discover

│      ├── Journeys

│      ├── Reviews

│      ├── Stories

│      └── Articles

│

├── Engage

│      ├── Request Visit

│      └── Contact

│

├── Learn

│      ├── About

│      └── Mission

│

└── Manage

       └── Dashboard
```

---

# Permissions

Guest

- Read Content

Registered User (Future)

- Save Places
- Bookmark Reviews

Administrator

- Full Access

---

# Future Expansion

- Mobile Application

- AI Assistant

- Notifications

- Newsletter

- Public API

- Multi-language

- Analytics

- Saved Places

- User Profiles

- Membership