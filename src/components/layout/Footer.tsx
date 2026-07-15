import Link from 'next/link';
import { Container } from '../ui/Container';
import { getSiteSettings } from '@/lib/content/siteSettings';

/**
 * Footer
 *
 * Social links render only for platforms with a real URL in siteSettings.
 * Right now siteSettings.social is empty (no accounts confirmed in the
 * company profile) — so the social row simply won't appear until at least
 * one is added. No placeholder/broken icons.
 */

export function Footer() {
  const { companyName, contact, social } = getSiteSettings();
  const year = new Date().getFullYear();

  const socialLinks = Object.entries(social).filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-brand-black text-white">
      <Container size="xl">
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold">{companyName}</h2>
            <p className="mt-2 text-sm text-gray-400">{contact.address}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-brand-teal">
                    {phone}
                  </a>
                </li>
              ))}
              {contact.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="hover:text-brand-teal">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {socialLinks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">Follow</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {socialLinks.map(([platform, url]) => (
                  <li key={platform}>
                    <a href={url as string} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-brand-teal">
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {companyName}. All rights reserved.</p>
          <Link href="/contact" className="hover:text-brand-teal">
            Get in touch
          </Link>
        </div>
      </Container>
    </footer>
  );
}