/**
 * Datos del perfil y navegación por idioma. Edita antes de publicar.
 */
import type { Locale } from '../../../common/types/locale'
import type { NavItem, Profile } from '../domain/profile.entity'

export const profileByLocale: Record<Locale, Profile> = {
  es: {
    name: 'Tu nombre',
    role: 'Desarrollador · diseño de producto',
    tagline:
      'Construyo interfaces claras y código mantenible. Sustituye textos en src/modules/profile/infrastructure/profile.data.ts.',
    avatarAlt: 'Retrato',

    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Trabajo en el cruce entre producto y frontend: prototipos, accesibilidad y entrega continua.',
        'Me interesa documentar decisiones y dejar bases que otros equipos puedan extender.',
      ],
    },

    skills: [
      'TypeScript',
      'React',
      'Node.js',
      'CSS / Tailwind',
      'APIs REST',
      'Git / CI',
    ],

    cvUrl: '#',
  },
  en: {
    name: 'Your name',
    role: 'Developer · product design',
    tagline:
      'I build clear interfaces and maintainable code. Replace copy in src/modules/profile/infrastructure/profile.data.ts.',
    avatarAlt: 'Portrait',

    about: {
      title: 'About',
      paragraphs: [
        'I work at the intersection of product and frontend: prototypes, accessibility, and continuous delivery.',
        'I care about documenting decisions and leaving foundations other teams can extend.',
      ],
    },

    skills: [
      'TypeScript',
      'React',
      'Node.js',
      'CSS / Tailwind',
      'REST APIs',
      'Git / CI',
    ],

    cvUrl: '#',
  },
}

export const navItemsByLocale: Record<Locale, readonly NavItem[]> = {
  es: [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ],
  en: [
    { href: '#inicio', label: 'Home' },
    { href: '#sobre-mi', label: 'About' },
    { href: '#habilidades', label: 'Skills' },
    { href: '#experiencia', label: 'Experience' },
    { href: '#proyectos', label: 'Projects' },
    { href: '#contacto', label: 'Contact' },
  ],
}
