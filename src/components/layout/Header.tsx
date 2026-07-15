'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { getSiteSettings } from '@/lib/content/siteSettings';
import { getProjects } from '@/lib/content/projects';
import { getAchievements } from '@/lib/content/achievements';

/**
 * Header
 *
 * Nav links for Projects and Achievements are conditionally included —
 * both collections are currently empty by design (client declined case
 * studies; achievements content still unconfirmed). No point linking to
 * an empty listing page. Once either collection has real entries, its
 * nav link appears automatically — no code change needed here.
 */

const baseNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const siteSettings = getSiteSettings();

  const navLinks = [
    ...baseNavLinks,
    ...(getProjects().length > 0 ? [{ label: 'Projects', href: '/projects' }] : []),
    ...(getAchievements().length > 0 ? [{ label: 'Achievements', href: '/achievements' }] : []),
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2" aria-label={siteSettings.companyName}>
            <Image
              src={siteSettings.logo}
              alt={siteSettings.companyName}
              width={160}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-charcoal md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav panel */}
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-gray-200 pb-4 pt-2 md:hidden" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-brand-charcoal hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="mt-2 rounded-md bg-brand-red px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}