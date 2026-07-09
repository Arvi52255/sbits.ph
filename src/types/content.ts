/**
 * /types/content.ts
 *
 * Central type definitions for all SBITS content shapes.
 *
 * Design intent: these interfaces are written to map 1:1 onto the future
 * Sanity schema field names (Week 10). Keeping field names identical now
 * means the Week 10 migration is a data-source swap in /lib/content/*.ts
 * (mock arrays -> GROQ queries), not a field-remapping exercise.
 */

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

/** Path to a local SVG under /public/images/**, e.g. "/images/services/network-security.svg" */
export type IconPath = string;

export interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string; // used in listing cards, keep ~120 chars
  description: string; // full detail-page copy, can contain \n paragraphs
  icon: IconPath;
  features: string[]; // bullet list of what's included
  category?: string; // e.g. "Infrastructure", "Security", "Cloud"
  featured: boolean; // shown on homepage
  order: number; // manual sort weight for listing/homepage curation
  seo?: SEOFields;
}

// ---------------------------------------------------------------------------
// Project (case study)
// ---------------------------------------------------------------------------

export interface Project {
  id: string;
  slug: string;
  title: string;
  industry: string; // e.g. "Manufacturing", "Retail", "Healthcare" — no client names
  summary: string; // short card description
  challenge: string; // full detail-page copy
  solution: string;
  outcome: string; // measurable result, e.g. "40% reduction in downtime"
  images: string[]; // paths under /public/images/projects/**
  services: string[]; // slugs of related Service entries
  date: string; // ISO date, used for "latest" sorting
  featured: boolean;
  category?: string;
  seo?: SEOFields;
}

// ---------------------------------------------------------------------------
// Partner (technology vendor)
// ---------------------------------------------------------------------------

export type PartnerCategory =
  | "Networking"
  | "Security"
  | "Cloud"
  | "Hardware"
  | "Software"
  | "Storage"
  | "Collaboration"
  | string; // left open — confirm final category list against company profile

export interface Partner {
  id: string;
  slug: string;
  name: string;
  category: PartnerCategory;
  logo: IconPath; // path under /public/images/partners/**
  website?: string;
  tier?: string; // e.g. "Gold Partner", "Authorized Reseller" — only if this is a real differentiator
  description?: string;
  order: number;
}

// ---------------------------------------------------------------------------
// Achievement (certification, award, milestone)
// ---------------------------------------------------------------------------

export type AchievementType = "certification" | "award" | "milestone";

export interface Achievement {
  id: string;
  slug: string;
  title: string;
  type: AchievementType;
  issuer?: string; // e.g. "Microsoft", "Cisco" — relevant for certifications
  date: string; // ISO date
  description: string;
  icon?: IconPath;
  featured: boolean;
}

// ---------------------------------------------------------------------------
// Site Settings (singleton)
// ---------------------------------------------------------------------------

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface AboutContent {
  mission: string;
  vision: string;
  history?: string;
  values: string[];
}

export interface ContactInfo {
  address: string;
  phones: string[]; // supports multiple lines
  emails: string[]; // e.g. general + sales/support split
  businessHours?: string;
  mapEmbedUrl?: string;
}

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
}

export interface SiteSettings {
  companyName: string;
  tagline?: string;
  hero: HeroContent;
  about: AboutContent;
  contact: ContactInfo;
  social: SocialLinks;
  seo?: SEOFields;
}