import type { ProfileRepository } from '../domain/profile.repository'
import { navItemsByLocale, profileByLocale } from './profile.data'

export const staticProfileRepository: ProfileRepository = {
  getProfile: (locale) => profileByLocale[locale],
  getNavItems: (locale) => navItemsByLocale[locale],
}
