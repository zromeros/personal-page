import { useMemo } from 'react'
import { useLocaleStore } from '../../../common/store/localeStore'
import { staticProjectsRepository } from '../infrastructure/staticProjects.repository'

export function useProjectsData() {
  const locale = useLocaleStore((s) => s.locale)
  return useMemo(
    () => ({
      projects: staticProjectsRepository.getProjects(locale),
    }),
    [locale],
  )
}
