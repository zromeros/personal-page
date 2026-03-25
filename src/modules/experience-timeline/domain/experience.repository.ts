import type { ExperienceEntry } from './experience.entity'

export type ExperienceTimelineRepository = {
  getEntries: () => ExperienceEntry[]
}
