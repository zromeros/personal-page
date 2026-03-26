import type { ExperienceTimelineRepository } from '../domain/experience.repository'
import { experienceEntriesByLocale } from './experience.data'

export const staticExperienceTimelineRepository: ExperienceTimelineRepository = {
  getEntries: (locale) => experienceEntriesByLocale[locale],
}
