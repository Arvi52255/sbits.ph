import { Partner } from '@/types/content';

/**
 * /mock/partners.ts
 *
 * Source: SBITS Company Profile, Section 4 "Products" — 3 slides
 * (Network / Servers and Software / Structured Cabling, CCTV, Door
 * Access, PABX), which is why the category scheme below has exactly
 * 3 values. This matches PartnerCategory in content.ts (decided —
 * see that file's comment).
 *
 * `logo` paths are all `/images/partners/{slug}.svg` with no exceptions,
 * so any future code can resolve a logo from a partner's slug alone
 * without a manual lookup table. (Earlier drafts had a few mismatches
 * — e.g. slug `check-point` pointing at `checkpoint.svg` — fixed here.)
 *
 * `order` is globally sequential (1–35), not per-category, so it can
 * double as a homepage/carousel sort weight as well as a within-category
 * one — grouping by category is a filter on `.category`, not a reason
 * for the numbers to reset.
 *
 * ASSUMPTIONS CARRIED FORWARD (confirm with client when convenient,
 * not blocking):
 * 1. Cisco vs. Cisco Meraki kept as two separate partner entries —
 *    distinct product lines/branding in the source material.
 * 2. TP-Link vs. D-Link kept separate — profile text lists both
 *    ("TPLink/Dlink") though only TP-Link had a distinct logo shown.
 * 3. AltN Technologies used as the vendor name (rather than "MDaemon",
 *    which is AltN's product) — covers both "AltN MDAEMON Email" and
 *    "AltN Security Gateway" bullets under one vendor entry.
 * 4. Sectigo/RapidSSL and Comodo kept as 2 entries matching the 2
 *    source bullets, despite real-world corporate overlap (RapidSSL is
 *    Sectigo-owned; Sectigo was formerly Comodo CA).
 * 5. Microsoft Azure included as its own entry — logo appears on the
 *    source slide even though "Azure" isn't named in the bullet text.
 *    Worth a quick confirm with the client that this is real, not a
 *    template artifact from the profile's designer.
 * 6. ABB and Synology included despite no distinct logo in the source
 *    PDF (text-only mentions) — logo SVGs for these two will need to
 *    be sourced from the vendors' own brand pages.
 */

export const partners: Partner[] = [
  // ── Network ──────────────────────────────────────────────────────
  { id: 'ptn-001', slug: 'fortinet', name: 'Fortinet', category: 'Network', logo: '/images/partners/fortinet.svg', description: 'Firewall solutions.', order: 1 },
  { id: 'ptn-002', slug: 'cisco', name: 'Cisco', category: 'Network', logo: '/images/partners/cisco.svg', description: 'Switches and access points, enterprise and SMB lines.', order: 2 },
  { id: 'ptn-003', slug: 'cisco-meraki', name: 'Cisco Meraki', category: 'Network', logo: '/images/partners/cisco-meraki.svg', description: 'Cloud-managed switches and firewalls.', order: 3 },
  { id: 'ptn-004', slug: 'juniper', name: 'Juniper', category: 'Network', logo: '/images/partners/juniper.svg', description: 'Firewall solutions.', order: 4 },
  { id: 'ptn-005', slug: 'check-point', name: 'Check Point', category: 'Network', logo: '/images/partners/check-point.svg', description: 'Firewall solutions.', order: 5 },
  { id: 'ptn-006', slug: 'palo-alto-networks', name: 'Palo Alto Networks', category: 'Network', logo: '/images/partners/palo-alto-networks.svg', description: 'Firewall solutions.', order: 6 },
  { id: 'ptn-007', slug: 'aruba', name: 'Aruba', category: 'Network', logo: '/images/partners/aruba.svg', description: 'Switches and access points.', order: 7 },
  { id: 'ptn-008', slug: 'ubiquiti', name: 'Ubiquiti', category: 'Network', logo: '/images/partners/ubiquiti.svg', description: 'Switches and access points.', order: 8 },
  { id: 'ptn-009', slug: 'ruckus', name: 'Ruckus', category: 'Network', logo: '/images/partners/ruckus.svg', description: 'Access points.', order: 9 },
  { id: 'ptn-010', slug: 'tp-link', name: 'TP-Link', category: 'Network', logo: '/images/partners/tp-link.svg', description: 'Access points and wireless routers.', order: 10 },
  { id: 'ptn-011', slug: 'd-link', name: 'D-Link', category: 'Network', logo: '/images/partners/d-link.svg', description: 'Access points and wireless routers.', order: 11 },

  // ── Servers & Software ──────────────────────────────────────────────
  { id: 'ptn-012', slug: 'lenovo', name: 'Lenovo', category: 'Servers & Software', logo: '/images/partners/lenovo.svg', description: 'Servers and storage/NAS.', order: 12 },
  { id: 'ptn-013', slug: 'synology', name: 'Synology', category: 'Servers & Software', logo: '/images/partners/synology.svg', description: 'Storage and NAS.', order: 13 },
  { id: 'ptn-014', slug: 'vertiv', name: 'Vertiv', category: 'Servers & Software', logo: '/images/partners/vertiv.svg', description: 'UPS systems.', order: 14 },
  { id: 'ptn-015', slug: 'abb', name: 'ABB', category: 'Servers & Software', logo: '/images/partners/abb.svg', description: 'UPS systems.', order: 15 },
  { id: 'ptn-016', slug: 'microsoft', name: 'Microsoft', category: 'Servers & Software', logo: '/images/partners/microsoft.svg', description: 'Microsoft 365 and Windows Server OS.', order: 16 },
  { id: 'ptn-017', slug: 'microsoft-azure', name: 'Microsoft Azure', category: 'Servers & Software', logo: '/images/partners/microsoft-azure.svg', description: 'Cloud infrastructure and services.', order: 17 },
  { id: 'ptn-018', slug: 'acronis', name: 'Acronis', category: 'Servers & Software', logo: '/images/partners/acronis.svg', description: 'Cyber backup.', order: 18 },
  { id: 'ptn-019', slug: 'carbonite', name: 'Carbonite', category: 'Servers & Software', logo: '/images/partners/carbonite.svg', description: 'Server replication.', order: 19 },
  { id: 'ptn-020', slug: 'vmware', name: 'VMware', category: 'Servers & Software', logo: '/images/partners/vmware.svg', description: 'Virtualization.', order: 20 },
  { id: 'ptn-021', slug: 'altn-technologies', name: 'AltN Technologies', category: 'Servers & Software', logo: '/images/partners/altn-technologies.svg', description: 'On-premise email (MDaemon) and security gateway.', order: 21 },
  { id: 'ptn-022', slug: 'trend-micro', name: 'Trend Micro', category: 'Servers & Software', logo: '/images/partners/trend-micro.svg', description: 'Anti-virus and email security.', order: 22 },
  { id: 'ptn-023', slug: 'activegate', name: 'ActiveGate', category: 'Servers & Software', logo: '/images/partners/activegate.svg', description: 'Email security.', order: 23 },
  { id: 'ptn-024', slug: 'ip-guard', name: 'IP-Guard', category: 'Servers & Software', logo: '/images/partners/ip-guard.svg', description: 'Computer security.', order: 24 },
  { id: 'ptn-025', slug: 'nagios', name: 'Nagios', category: 'Servers & Software', logo: '/images/partners/nagios.svg', description: 'Infrastructure monitoring.', order: 25 },
  { id: 'ptn-026', slug: 'sectigo-rapidssl', name: 'Sectigo / RapidSSL', category: 'Servers & Software', logo: '/images/partners/sectigo-rapidssl.svg', description: 'SSL certificates.', order: 26 },
  { id: 'ptn-027', slug: 'comodo', name: 'Comodo', category: 'Servers & Software', logo: '/images/partners/comodo.svg', description: 'SSL certificates.', order: 27 },

  // ── Physical Infrastructure ──────────────────────────────────────────
  { id: 'ptn-028', slug: 'panduit', name: 'Panduit', category: 'Physical Infrastructure', logo: '/images/partners/panduit.svg', description: 'Structured cabling systems.', order: 28 },
  { id: 'ptn-029', slug: 'commscope', name: 'CommScope', category: 'Physical Infrastructure', logo: '/images/partners/commscope.svg', description: 'Structured cabling systems.', order: 29 },
  { id: 'ptn-030', slug: 'linkbasic', name: 'LinkBasic', category: 'Physical Infrastructure', logo: '/images/partners/linkbasic.svg', description: 'Structured cabling systems.', order: 30 },
  { id: 'ptn-031', slug: 'hikvision', name: 'Hikvision', category: 'Physical Infrastructure', logo: '/images/partners/hikvision.svg', description: 'CCTV systems.', order: 31 },
  { id: 'ptn-032', slug: 'dahua-technology', name: 'Dahua Technology', category: 'Physical Infrastructure', logo: '/images/partners/dahua-technology.svg', description: 'CCTV systems.', order: 32 },
  { id: 'ptn-033', slug: 'zkteco', name: 'ZKTeco', category: 'Physical Infrastructure', logo: '/images/partners/zkteco.svg', description: 'Door access systems.', order: 33 },
  { id: 'ptn-034', slug: 'grandstream', name: 'Grandstream', category: 'Physical Infrastructure', logo: '/images/partners/grandstream.svg', description: 'PABX and PA systems.', order: 34 },
  { id: 'ptn-035', slug: 'toa', name: 'TOA', category: 'Physical Infrastructure', logo: '/images/partners/toa.svg', description: 'PABX and PA systems.', order: 35 },
];