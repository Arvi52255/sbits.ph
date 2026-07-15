import { Achievement } from '@/types/content';
import { achievements } from '@/mock/achievements';

/**
 * /lib/content/achievements.ts
 *
 * Data-access layer for Achievement content. Currently backed by an empty
 * mock array (see mock/achievements.ts) — see the note in
 * lib/content/projects.ts, same situation applies here.
 */

export function getAchievements(): Achievement[] {
  return [...achievements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestAchievements(count: number = 3): Achievement[] {
  return getAchievements().slice(0, count);
}