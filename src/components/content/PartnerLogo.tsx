import Image from 'next/image';
import { Partner } from '@/types/content';

/**
 * PartnerLogo
 *
 * Single vendor tile — logo + name, matching the grid pattern already
 * visible in your dev-image-check page. Uniform tile size regardless of
 * each logo's natural aspect ratio, so a grid of these doesn't look
 * ragged (some vendor logos are wide wordmarks, others are near-square
 * marks — object-contain + fixed tile height handles both consistently).
 */

interface PartnerLogoProps {
  partner: Partner;
}

export function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4">
      <div className="relative h-10 w-10 flex-shrink-0">
        <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
      </div>
      <span className="text-sm font-medium text-brand-charcoal">{partner.name}</span>
    </div>
  );
}