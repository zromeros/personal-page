import { create } from 'zustand'
import type { SocialLink } from '../domain/contact.entity'
import { staticContactRepository } from '../infrastructure/staticContact.repository'

type ContactState = {
  social: SocialLink[]
}

export const useContactStore = create<ContactState>(() => ({
  social: staticContactRepository.getSocialLinks(),
}))
