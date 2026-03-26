import type { SocialLink } from './contact.entity'

export type ContactRepository = {
  getSocialLinks: () => SocialLink[]
}
