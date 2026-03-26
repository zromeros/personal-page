import type { Locale } from '../../../common/types/locale'
import type { NavItem, Profile } from './profile.entity'

export type ProfileRepository = {
  getProfile: (locale: Locale) => Profile
  getNavItems: (locale: Locale) => readonly NavItem[]
}
