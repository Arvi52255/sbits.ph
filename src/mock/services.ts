import { Service } from '@/types/content';

/**
 * /mock/services.ts
 *
 * Source: SBITS Company Profile, Section 5 "IT ENGINEERING SERVICES"
 * (6 top-level bullet items in the source document, mapped 1:1 to the
 * 6 services required below).
 *
 * REBUILT to match the actual Service interface in src/types/content.ts —
 * the first draft used `summary`/`technologies` field names and was
 * missing `order`, which don't exist on the real interface. This version
 * uses `shortDescription`, `features`, `category`, and `order` correctly.
 *
 * ASSUMPTIONS FLAGGED (please confirm before this goes live):
 * 1. The source document's second bullet is a single combined item:
 *    "Network / Servers / Structured Cabling / CCTV / Door Access / PABX"
 *    with 4 shared sub-activities. Treated here as ONE consolidated
 *    service covering all six domains, rather than splitting into up
 *    to 6 separate services. If the client wants these split into
 *    separate service pages instead, this needs restructuring.
 * 2. `features` arrays are the concrete sub-activities/inclusions
 *    listed in or reasonably inferred from the source document for
 *    each service — NOT vendor/technology names (that belongs on
 *    Partner entries instead, per the real interface's field naming).
 * 3. `category` values ("Infrastructure", "Migration", "Training",
 *    "Consulting") are inferred groupings, not stated in the source —
 *    confirm this taxonomy makes sense for services filtering/nav.
 * 4. `featured` flags (services 1, 2, 4 marked true) are a judgment
 *    call based on how prominently each is described in the source —
 *    confirm with the client which services they want surfaced first.
 * 5. `icon` paths assume SVGs will exist under /public/images/services/
 *    — these files don't exist yet, this is just the intended path.
 */

export const services: Service[] = [
  {
    id: '1',
    slug: 'it-infrastructure-project-management',
    title: 'IT Infrastructure Project Management',
    shortDescription:
      'End-to-end project management for IT infrastructure initiatives, from small business to enterprise scale.',
    description:
      'SBITS engineers manage IT infrastructure projects from initial planning through completion, drawing on 10 to 15 years of experience in solution design, implementation, and project management for clients ranging from small businesses to large enterprises.',
    icon: '/images/services/project-management.svg',
    features: [
      'Project planning and scoping',
      'Solution design and architecture',
      'Implementation oversight',
      'Cross-team coordination for small-to-enterprise clients',
    ],
    category: 'Consulting',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    slug: 'infrastructure-design-installation-maintenance',
    title: 'Infrastructure Design, Installation & Maintenance',
    shortDescription:
      'Consultation, design, installation, and maintenance across network, server, cabling, CCTV, door access, and PABX systems.',
    description:
      'A full lifecycle service covering network, servers, structured cabling, CCTV, door access, and PABX systems: consultation and assessment, design and planning, installation and configuration with documentation, and ongoing maintenance and troubleshooting.',
    icon: '/images/services/infrastructure.svg',
    features: [
      'Consultation / Assessment',
      'Design & Planning',
      'Installation, Configuration and Documentation',
      'Maintenance / Troubleshooting',
    ],
    category: 'Infrastructure',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    slug: 'cabling-rehabilitation',
    title: 'Cabling Rehabilitation',
    shortDescription:
      'Assessment and remediation of existing structured cabling infrastructure.',
    description:
      'Rehabilitation services for existing structured cabling systems that have degraded, were poorly installed, or no longer meet current infrastructure needs.',
    icon: '/images/services/cabling.svg',
    features: [
      'Existing cabling assessment',
      'Remediation planning',
      'Re-cabling and re-termination',
      'Post-rehabilitation documentation',
    ],
    category: 'Infrastructure',
    featured: false,
    order: 3,
  },
  {
    id: '4',
    slug: 'server-and-data-migration',
    title: 'Server & Data Migration',
    shortDescription:
      'Server migration, domain migration, email migration, database migration, virtualization, and backup solutions.',
    description:
      'Comprehensive migration services including server migration, domain migration, email migration, database migration (MS SQL), server virtualization, and both on-premise and cloud backup implementation.',
    icon: '/images/services/migration.svg',
    features: [
      'Server migration',
      'Domain migration',
      'Email migration',
      'Database migration (MS SQL)',
      'Server virtualization',
      'On-premise and cloud backup',
    ],
    category: 'Migration',
    featured: true,
    order: 4,
  },
  {
    id: '5',
    slug: 'it-equipment-transfer',
    title: 'IT Equipment Transfer',
    shortDescription:
      'Planned relocation and transfer of IT equipment with minimal disruption to operations.',
    description:
      'Managed transfer of IT equipment between locations or facilities, planned and executed to minimize downtime and disruption to ongoing business operations.',
    icon: '/images/services/equipment-transfer.svg',
    features: [
      'Transfer planning and logistics',
      'Equipment decommissioning and reinstallation',
      'Minimal-downtime scheduling',
    ],
    category: 'Infrastructure',
    featured: false,
    order: 5,
  },
  {
    id: '6',
    slug: 'it-training',
    title: 'IT Training',
    shortDescription:
      'In-house IT training on Cisco and Fortinet products for client technical teams.',
    description:
      'Hands-on training programs for in-house IT teams, covering Cisco and Fortinet products to build internal capability for ongoing infrastructure management.',
    icon: '/images/services/training.svg',
    features: [
      'Cisco product training',
      'Fortinet product training',
      'Hands-on, in-house delivery',
    ],
    category: 'Training',
    featured: false,
    order: 6,
  },
];