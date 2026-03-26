/**
 * Enlaces de contacto. Edita en src/modules/contact/infrastructure/contact.data.ts
 */
import type { SocialLink } from '../domain/contact.entity'

export const socialLinksContent: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'Correo', href: 'mailto:hola@ejemplo.com', icon: 'mail' },
  { label: 'X', href: 'https://x.com', icon: 'x' },
]
