import { Partner } from '@/types/content';

/**
 * /mock/partners.ts
 *
 * Source: SBITS Company Profile, Section 4 "PRODUCTS" (3 slides:
 * Network / Servers and Software / Structured Cabling, CCTV, Door
 * Access, PABX).
 *
 * REBUILT to match the actual Partner interface — the first draft was
 * missing `slug` and `order` (both required fields), and used category
 * values ('network', 'servers-software', 'physical-infrastructure')
 * that don't match anything in content.ts.
 *
 * ⚠️ CATEGORY TAXONOMY CONFLICT — needs a decision, not just a fix:
 * content.ts's `PartnerCategory` type suggests a 7-value taxonomy
 * ("Networking" | "Security" | "Cloud" | "Hardware" | "Software" |
 * "Storage" | "Collaboration"), with a comment noting it's "left open
 * — confirm final category list against company profile."
 * BUT the original 12-week build plan (Week 7 Monday) explicitly calls
 * for partners "grouped by category (Network / Servers & Software /
 * Physical Infrastructure)" — a 3-category scheme, matching how the
 * source document itself is organized (3 product slides).
 * These are two different taxonomies for the same field. This file
 * uses the 3-category scheme from the build plan, since `category` is
 * typed as `PartnerCategory | string` (the union allows any string),
 * so this compiles fine — but the 7-value union in content.ts is now
 * unused/misleading. Recommend either:
 *   (a) update PartnerCategory in content.ts to the 3 real values, or
 *   (b) if the 7-value scheme is what's actually wanted for the
 *       Partners page (finer-grained filtering), re-categorize the
 *       vendors below accordingly instead.
 * Flagging rather than silently picking one — this affects how the
 * Partners page filter UI gets built in Week 7.
 *
 * OTHER ASSUMPTIONS FLAGGED (unchanged from prior review):
 * 1. "Cisco" vs. "Cisco Meraki" kept as two separate entries.
 * 2. "TP-Link" vs. "D-Link" split into two entries — D-Link's
 *    inclusion is less certain (text-only, no separate logo shown).
 * 3. Microsoft Azure — logo appears on the source slide but "Azure"
 *    is never mentioned in the bullet text. NOT added as a partner —
 *    confirm with the client whether it's a real offering.
 * 4. Hyper-V treated as a Microsoft product line, not its own vendor.
 * 5. Sectigo / RapidSSL / Comodo — real overlapping corporate history
 *    (RapidSSL is Sectigo-owned; Sectigo was formerly Comodo CA).
 *    Kept as 2 entries matching the 2 source bullets.
 * 6. "ActiveGate" — unclear if distinct vendor or related to the AltN
 *    MDaemon email stack. Kept as its own entry, flagged.
 *
 * `order` below is sequential within each category block (for
 * potential per-category sort), not globally unique across all 34.
 */

export const partners: Partner[] = [
  // ── Network ──────────────────────────────────────────────
  { id: 'n-01', slug: 'fortinet', name: 'Fortinet', category: 'Network', logo: '/images/partners/fortinet.svg', order: 1 },
  { id: 'n-02', slug: 'cisco', name: 'Cisco', category: 'Network', logo: '/images/partners/cisco.svg', order: 2 },
  { id: 'n-03', slug: 'cisco-meraki', name: 'Cisco Meraki', category: 'Network', logo: '/images/partners/cisco-meraki.svg', order: 3 },
  { id: 'n-04', slug: 'juniper', name: 'Juniper', category: 'Network', logo: '/images/partners/juniper.svg', order: 4 },
  { id: 'n-05', slug: 'check-point', name: 'Check Point', category: 'Network', logo: '/images/partners/checkpoint.svg', order: 5 },
  { id: 'n-06', slug: 'palo-alto-networks', name: 'Palo Alto Networks', category: 'Network', logo: '/images/partners/paloalto.svg', order: 6 },
  { id: 'n-07', slug: 'aruba', name: 'Aruba', category: 'Network', logo: '/images/partners/aruba.svg', order: 7 },
  { id: 'n-08', slug: 'ubiquiti', name: 'Ubiquiti', category: 'Network', logo: '/images/partners/ubiquiti.svg', order: 8 },
  { id: 'n-09', slug: 'ruckus', name: 'Ruckus', category: 'Network', logo: '/images/partners/ruckus.svg', order: 9 },
  { id: 'n-10', slug: 'tp-link', name: 'TP-Link', category: 'Network', logo: '/images/partners/tp-link.svg', order: 10 },
  { id: 'n-11', slug: 'd-link', name: 'D-Link', category: 'Network', logo: '/images/partners/d-link.svg', order: 11 },

  // ── Servers & Software ───────────────────────────────────
  { id: 's-01', slug: 'lenovo', name: 'Lenovo', category: 'Servers & Software', logo: '/images/partners/lenovo.svg', order: 1 },
  { id: 's-02', slug: 'synology', name: 'Synology', category: 'Servers & Software', logo: '/images/partners/synology.svg', order: 2 },
  { id: 's-03', slug: 'vertiv', name: 'Vertiv', category: 'Servers & Software', logo: '/images/partners/vertiv.svg', order: 3 },
  { id: 's-04', slug: 'abb', name: 'ABB', category: 'Servers & Software', logo: '/images/partners/abb.svg', order: 4 },
  { id: 's-05', slug: 'microsoft', name: 'Microsoft', category: 'Servers & Software', logo: '/images/partners/microsoft.svg', order: 5 },
  { id: 's-06', slug: 'acronis', name: 'Acronis', category: 'Servers & Software', logo: '/images/partners/acronis.svg', order: 6 },
  { id: 's-07', slug: 'carbonite', name: 'Carbonite', category: 'Servers & Software', logo: '/images/partners/carbonite.svg', order: 7 },
  { id: 's-08', slug: 'vmware', name: 'VMware', category: 'Servers & Software', logo: '/images/partners/vmware.svg', order: 8 },
  { id: 's-09', slug: 'altn-technologies', name: 'AltN Technologies', category: 'Servers & Software', logo: '/images/partners/altn.svg', order: 9 },
  { id: 's-10', slug: 'trend-micro', name: 'Trend Micro', category: 'Servers & Software', logo: '/images/partners/trendmicro.svg', order: 10 },
  { id: 's-11', slug: 'activegate', name: 'ActiveGate', category: 'Servers & Software', logo: '/images/partners/activegate.svg', order: 11 },
  { id: 's-12', slug: 'ip-guard', name: 'IP-Guard', category: 'Servers & Software', logo: '/images/partners/ip-guard.svg', order: 12 },
  { id: 's-13', slug: 'nagios', name: 'Nagios', category: 'Servers & Software', logo: '/images/partners/nagios.svg', order: 13 },
  { id: 's-14', slug: 'sectigo-rapidssl', name: 'Sectigo / RapidSSL', category: 'Servers & Software', logo: '/images/partners/sectigo.svg', order: 14 },
  { id: 's-15', slug: 'comodo', name: 'Comodo', category: 'Servers & Software', logo: '/images/partners/comodo.svg', order: 15 },

  // ── Physical Infrastructure ──────────────────────────────
  { id: 'p-01', slug: 'panduit', name: 'Panduit', category: 'Physical Infrastructure', logo: '/images/partners/panduit.svg', order: 1 },
  { id: 'p-02', slug: 'commscope', name: 'CommScope', category: 'Physical Infrastructure', logo: '/images/partners/commscope.svg', order: 2 },
  { id: 'p-03', slug: 'linkbasic', name: 'LinkBasic', category: 'Physical Infrastructure', logo: '/images/partners/linkbasic.svg', order: 3 },
  { id: 'p-04', slug: 'hikvision', name: 'Hikvision', category: 'Physical Infrastructure', logo: '/images/partners/hikvision.svg', order: 4 },
  { id: 'p-05', slug: 'dahua-technology', name: 'Dahua Technology', category: 'Physical Infrastructure', logo: '/images/partners/dahua.svg', order: 5 },
  { id: 'p-06', slug: 'zkteco', name: 'ZKTeco', category: 'Physical Infrastructure', logo: '/images/partners/zkteco.svg', order: 6 },
  { id: 'p-07', slug: 'grandstream', name: 'Grandstream', category: 'Physical Infrastructure', logo: '/images/partners/grandstream.svg', order: 7 },
  { id: 'p-08', slug: 'toa', name: 'TOA', category: 'Physical Infrastructure', logo: '/images/partners/toa.svg', order: 8 },
];