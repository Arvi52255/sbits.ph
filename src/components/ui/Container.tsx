import { ReactNode } from 'react';

/**
 * Container
 *
 * Horizontal width + padding wrapper. Every page section should sit inside
 * one of these (directly or via Section, which composes it) so max-width
 * and side-padding stay consistent site-wide rather than redeclared per
 * component.
 */

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-2xl',   // narrow content — e.g. a single article/case study body
  md: 'max-w-4xl',   // medium — forms, focused single-column content
  lg: 'max-w-6xl',   // default — most page sections
  xl: 'max-w-7xl',   // wide — full-bleed grids (partner logo wall, etc.)
  full: 'max-w-none',
};

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

export function Container({ children, size = 'lg', className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}