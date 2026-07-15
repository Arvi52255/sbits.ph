import { Project } from '@/types/content';

/**
 * /mock/projects.ts
 *
 * Intentionally empty — client specifically requested no project/
 * case-study content for now. Left in place, fully typed, so this can be
 * populated later without touching content.ts, lib/content/projects.ts,
 * or any component that imports getProjects()/getProjectBySlug()/etc.
 * Those all already handle an empty array correctly (empty list, `undefined`
 * from a slug lookup) — nothing downstream will break by this staying empty.
 *
 * If/when this gets populated: 3 case studies, industry + outcome only,
 * no client names (per the original Week 2 plan).
 */

export const projects: Project[] = [];