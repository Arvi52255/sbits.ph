import { Partner, PartnerCategory } from '@/types/content';
import { partners } from '@/mock/partners';

/**
 * /lib/content/partners.ts
 *
 * Data-access layer for Partner content. See services.ts for the note on
 * why these stay this thin — mock array today, Sanity GROQ query in
 * Week 10, same return types either way.
 */

export function getPartners(): Partner[] {
  return [...partners].sort((a, b) => a.order - b.order);
}

export function getPartnersByCategory(category: PartnerCategory): Partner[] {
  return partners
    .filter((partner) => partner.category === category)
    .sort((a, b) => a.order - b.order);
}