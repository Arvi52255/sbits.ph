import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Layout
 *
 * Wraps any page's content with the standard Header + Footer shell.
 * Usage: wrap page content in app/**\/page.tsx, or compose directly into
 * app/layout.tsx if every route should share this shell (likely, given
 * this project has no distinct authenticated/unauthenticated layouts).
 */

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}