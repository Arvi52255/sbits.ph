import { Service } from '@/types/content';
import { services } from '@/mock/services';

/**
 * /lib/content/services.ts
 *
 * Data-access layer for Service content. Reads from the mock array today;
 * in Week 10 these three function bodies swap to Sanity GROQ queries —
 * nothing that imports from this file needs to change, since the return
 * types (Service, Service[]) stay identical either way.
 */

export function getServices(): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services
    .filter((service) => service.featured)
    .sort((a, b) => a.order - b.order);
}