import { create } from 'zustand'
import type { ExperienceEntry } from '../domain/experience.entity'
import { staticExperienceTimelineRepository } from '../infrastructure/staticExperienceTimeline.repository'

type ExperienceTimelineState = {
  entries: ExperienceEntry[]
}

export const useExperienceTimelineStore = create<ExperienceTimelineState>(() => ({
  entries: staticExperienceTimelineRepository.getEntries(),
}))
