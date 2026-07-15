import { Project } from '@/types/content';
import { projects } from '@/mock/projects';

/**
 * /lib/content/projects.ts
 *
 * Data-access layer for Project content. Currently backed by an empty
 * mock array (see mock/projects.ts) — every function here already
 * behaves correctly against that: getProjects() returns [], the lookup
 * functions return undefined, and any component calling these should
 * render an appropriate empty state rather than assume data exists.
 */

export function getProjects(): Project[] {
  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getLatestProjects(count: number = 3): Project[] {
  return getProjects().slice(0, count);
}