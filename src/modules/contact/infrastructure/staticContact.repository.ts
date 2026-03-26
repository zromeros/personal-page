import type { ContactRepository } from '../domain/contact.repository'
import { socialLinksByLocale } from './contact.data'

export const staticContactRepository: ContactRepository = {
  getSocialLinks: (locale) => socialLinksByLocale[locale],
}
