import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/types/content';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

/**
 * ServiceCard
 *
 * Renders a single Service using only fields that actually exist on the
 * type: icon, title, shortDescription, category, features. Deliberately
 * does NOT show vendor/technology logos — that idea was already corrected
 * out of the mock data in Week 2 (vendor branding belongs on Partner, not
 * Service), and re-adding it here via a "related partners" prop would be
 * the same regression showing up one layer later. If a service page ever
 * needs to show related vendors, that's a separate PartnerGrid placed
 * alongside this component on the page — not a prop on ServiceCard itself.
 */

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <Image src={service.icon} alt="" width={40} height={40} className="h-10 w-10" aria-hidden="true" />

      <div className="mt-4 flex items-center gap-2">
        <h3 className="text-lg font-semibold text-brand-charcoal">{service.title}</h3>
        {service.category && <Badge variant="neutral">{service.category}</Badge>}
      </div>

      <p className="mt-2 text-sm text-gray-600">{service.shortDescription}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${service.slug}`}
        className="mt-4 text-sm font-semibold text-brand-red hover:text-brand-red-dark"
      >
        Learn more →
      </Link>
    </Card>
  );
}