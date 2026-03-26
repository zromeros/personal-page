import type { Locale } from '../../../common/types/locale'
import type { ExperienceEntry } from './experience.entity'

export type ExperienceTimelineRepository = {
  getEntries: (locale: Locale) => ExperienceEntry[]
}
