import type { ContactRepository } from '../domain/contact.repository'
import { socialLinksContent } from './contact.data'

export const staticContactRepository: ContactRepository = {
  getSocialLinks: () => socialLinksContent,
}
