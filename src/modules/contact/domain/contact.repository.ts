import type { Locale } from '../../../common/types/locale'
import type { SocialLink } from './contact.entity'

export type ContactRepository = {
  getSocialLinks: (locale: Locale) => SocialLink[]
}
