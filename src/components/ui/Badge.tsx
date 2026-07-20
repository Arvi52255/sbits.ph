import { ReactNode } from 'react';

/**
 * Badge
 *
 * Small pill label — used for Service.category, Partner.category, and
 * Achievement.type once that content exists. Neutral by default; color
 * variants are opt-in so a page isn't accidentally covered in red/teal
 * badges everywhere category text appears.
 */

type BadgeVariant = 'neutral' | 'red' | 'blue' | 'teal';

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-gray-100 text-brand-charcoal',
  red: 'bg-brand-red/10 text-brand-red',
  blue: 'bg-brand-blue/10 text-brand-blue',
  teal: 'bg-brand-teal text-white', // solid background + white text — a light teal tint with teal text would still fail AA at this small size, same problem as teal-on-white body copy
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}