import { useMemo } from 'react'
import { useLocaleStore } from '../../../common/store/localeStore'
import { staticProfileRepository } from '../infrastructure/staticProfile.repository'

export function useProfileData() {
  const locale = useLocaleStore((s) => s.locale)
  return useMemo(
    () => ({
      profile: staticProfileRepository.getProfile(locale),
      navItems: staticProfileRepository.getNavItems(locale),
    }),
    [locale],
  )
}
