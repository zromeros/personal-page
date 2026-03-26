import { useMemo } from 'react'
import { useLocaleStore } from '../../../common/store/localeStore'
import { staticExperienceTimelineRepository } from '../infrastructure/staticExperienceTimeline.repository'

export function useExperienceTimelineData() {
  const locale = useLocaleStore((s) => s.locale)
  return useMemo(
    () => ({
      entries: staticExperienceTimelineRepository.getEntries(locale),
    }),
    [locale],
  )
}
