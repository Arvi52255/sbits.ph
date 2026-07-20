import { ReactNode } from 'react';

/**
 * Card
 *
 * Base surface every content card (ServiceCard, PartnerLogo tile, and any
 * future card) composes on top of — border, radius, padding, and hover
 * elevation defined once here rather than redeclared per card type.
 */

interface CardProps {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
}

export function Card({ children, hoverable = true, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-6 ${
        hoverable ? 'transition-shadow hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}