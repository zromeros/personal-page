import type { NavItem, Profile } from './profile.entity'

export type ProfileRepository = {
  getProfile: () => Profile
  getNavItems: () => readonly NavItem[]
}
