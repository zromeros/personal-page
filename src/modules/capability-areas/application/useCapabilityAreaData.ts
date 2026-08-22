import { useMemo } from 'react'
import { useLocaleStore } from '../../../common/store/localeStore'
import { staticCapabilityAreaRepository } from '../infrastructure/staticCapabilityArea.repository'

export function useCapabilityAreaData() {
  const locale = useLocaleStore((s) => s.locale)
  return useMemo(
    () => ({
      areas: staticCapabilityAreaRepository.getAreas(locale),
    }),
    [locale],
  )
}
