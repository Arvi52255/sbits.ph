import { ReactNode } from 'react';
import { Container } from './Container';

/**
 * Section
 *
 * Vertical rhythm + background wrapper for a full page section (Hero,
 * Services grid, Partners grid, etc). Composes Container internally, so
 * consumers don't need to nest both manually — `<Section><h2>...</h2></Section>`
 * already gets correct horizontal width AND vertical spacing.
 *
 * `tone` supports the "dark sections as visual breaks between light ones"
 * pattern recommended from the design reference review (Nerdio/Netguru/
 * DockYard all use this) — tied to the real brand palette, not arbitrary
 * grays, so a dark Section stays on-brand rather than looking like a
 * generic dark-mode toggle.
 */

type SectionSpacing = 'sm' | 'md' | 'lg';
type SectionTone = 'light' | 'dark';

const spacingClasses: Record<SectionSpacing, string> = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-24 lg:py-32',
};

const toneClasses: Record<SectionTone, string> = {
  light: 'bg-white text-brand-charcoal',
  dark: 'bg-brand-black text-white',
};

interface SectionProps {
  children: ReactNode;
  spacing?: SectionSpacing;
  tone?: SectionTone;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  id?: string;
}

export function Section({
  children,
  spacing = 'md',
  tone = 'light',
  containerSize = 'lg',
  className = '',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${spacingClasses[spacing]} ${toneClasses[tone]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}