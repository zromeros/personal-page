import type { ProfileRepository } from '../domain/profile.repository'
import { navItemsContent, profileContent } from './profile.data'

export const staticProfileRepository: ProfileRepository = {
  getProfile: () => profileContent,
  getNavItems: () => navItemsContent,
}
