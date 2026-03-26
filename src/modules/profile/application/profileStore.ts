import { create } from 'zustand'
import type { NavItem, Profile } from '../domain/profile.entity'
import { staticProfileRepository } from '../infrastructure/staticProfile.repository'

type ProfileState = {
  profile: Profile
  navItems: readonly NavItem[]
}

export const useProfileStore = create<ProfileState>(() => ({
  profile: staticProfileRepository.getProfile(),
  navItems: staticProfileRepository.getNavItems(),
}))
