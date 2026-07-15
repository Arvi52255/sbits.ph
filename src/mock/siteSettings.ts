import { SiteSettings } from '@/types/content';

/**
 * /mock/siteSettings.ts
 *
 * Source: SBITS Company Profile, Sections 1-3 (Business/Contact Info,
 * Introduction/History, Mission Statement).
 *
 * ASSUMPTION FLAGGED: the source PDF's text extraction put the Vision and
 * Mission content in a jumbled order (single-sentence paragraph, then
 * "VISION:" label, then "MISSION:" label, then the 3-item numbered list).
 * Based on standard vision/mission structure, this file treats the single
 * sentence ("Become the Trusted IT Solutions Partner...") as the Vision
 * statement, and the 3 numbered items as the Mission. Please confirm this
 * is correct against the actual slide before this goes live — an easy
 * thing to get backwards from extracted PDF text alone.
 *
 * NOT YET PROVIDED — left as placeholders, flagged inline below:
 *  - businessHours
 *  - social links (no social media accounts given in the company profile)
 *  - Google Maps embed URL
 *  - hero backgroundImage (pending real photography/graphics)
 */

export const siteSettings: SiteSettings = {
  companyName: 'SKWER BACE INFORMATION TECHNOLOGY SOLUTIONS',
  tagline: 'Information Technology Solutions',
  logo: '/images/brand/logo.png',

  hero: {
    title: 'Your Trusted IT Solutions Partner',
    subtitle:
      'IT products, solutions, and services covering network infrastructure, servers, structured cabling, security, and cloud — backed by engineers with 10 to 15 years of experience.',
    ctaText: 'Request a Quote',
    ctaLink: '/quote',
    // TODO: hero backgroundImage — pending real photography or graphics
  },

  about: {
    vision:
      'Become the Trusted IT Solutions Partner by leading the way to Innovation, Quality and Values.',
    mission:
      'Provide new experience to our valued clients with service excellence through highly reliable IT products. Act sincerely as a trusted company in the field of IT. Enhance customer value by leveraging our alliances.',
    history:
      'SKWER BACE INFORMATION TECHNOLOGY SOLUTIONS, also known as "SKWER," is a Philippine-registered company founded by Patrick Jan Mantes in 2018. SKWER\u2019s engineers are backed by 10 to 15 years of IT experience in planning and designing solutions, implementation, and project management for clients ranging from small businesses to large enterprises.',
    values: ['Innovation', 'Quality', 'Values', 'Trust', 'Service Excellence'],
  },

  contact: {
    address: '2004 C. Arellano, Zone 063, Brgy. 627 Sampaloc, Manila, Philippines',
    phones: ['+63 917 157 2135', '+63 981 009 0000'],
    emails: ['sales@sbits.ph', 'support@sbits.ph'],
    // TODO: businessHours not provided in company profile — confirm with client
    // TODO: mapEmbedUrl — generate once address is confirmed final
  },

  social: {
    // TODO: no social media accounts listed in the company profile.
    // Confirm whether SKWER BACE has active Facebook/LinkedIn accounts
    // before the Contact page ships with empty/broken social icons.
  },
};