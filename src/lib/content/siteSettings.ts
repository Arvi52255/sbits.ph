import { SiteSettings } from '@/types/content';
import { siteSettings } from '@/mock/siteSettings';

/**
 * /lib/content/siteSettings.ts
 *
 * Data-access layer for the SiteSettings singleton. Same mock-today,
 * Sanity-in-Week-10 pattern as services.ts and partners.ts — the only
 * difference is there's no list/filter/lookup logic needed, since it's
 * a single object, not a collection.
 */

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}