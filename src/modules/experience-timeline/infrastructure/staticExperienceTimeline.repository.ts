import type { ExperienceTimelineRepository } from '../domain/experience.repository'
import { experienceEntriesContent } from './experience.data'

export const staticExperienceTimelineRepository: ExperienceTimelineRepository = {
  getEntries: () => experienceEntriesContent,
}
