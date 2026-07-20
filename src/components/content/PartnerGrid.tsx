import { Partner, PartnerCategory } from '@/types/content';
import { getPartners } from '@/lib/content/partners';
import { PartnerLogo } from './PartnerLogo';

/**
 * PartnerGrid
 *
 * Groups partners into the 3 locked categories (Network / Servers &
 * Software / Physical Infrastructure) and renders each as its own
 * labeled section. Defaults to all 35 partners via getPartners(), but
 * accepts a `partners` prop so a page can pass a filtered subset
 * (e.g. getPartnersByCategory('Network')) if only one category's grid
 * is needed somewhere.
 */

const CATEGORY_ORDER: PartnerCategory[] = ['Network', 'Servers & Software', 'Physical Infrastructure'];

interface PartnerGridProps {
  partners?: Partner[];
}

export function PartnerGrid({ partners }: PartnerGridProps) {
  const list = partners ?? getPartners();

  return (
    <div className="space-y-10">
      {CATEGORY_ORDER.map((category) => {
        const categoryPartners = list.filter((partner) => partner.category === category);
        if (categoryPartners.length === 0) return null;

        return (
          <div key={category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">{category}</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {categoryPartners.map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}