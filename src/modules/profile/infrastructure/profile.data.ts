/**
 * Datos del perfil y navegación. Edita antes de publicar.
 */
import type { NavItem, Profile } from '../domain/profile.entity'

export const profileContent: Profile = {
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
}

export const navItemsContent: readonly NavItem[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]
