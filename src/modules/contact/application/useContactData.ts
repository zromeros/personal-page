import { useMemo } from 'react'
import { useLocaleStore } from '../../../common/store/localeStore'
import { staticContactRepository } from '../infrastructure/staticContact.repository'

export function useContactData() {
  const locale = useLocaleStore((s) => s.locale)
  return useMemo(
    () => ({
      social: staticContactRepository.getSocialLinks(locale),
    }),
    [locale],
  )
}
