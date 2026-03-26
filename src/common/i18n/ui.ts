import type { Locale } from '../types/locale'

/** Cadenas de interfaz (no contenido editorial de los módulos). */
const ui = {
  es: {
    skipToContent: 'Saltar al contenido',
    navAria: 'Principal',
    heroEyebrow: 'Portafolio',
    downloadCv: 'Descargar CV',
    sectionSkills: 'Habilidades',
    sectionExperience: 'Experiencia',
    sectionProjects: 'Proyectos',
    sectionContact: 'Contacto',
    footerSuffix: 'Hecho con React y Vite.',
    languageLabel: 'Idioma',
    languageEs: 'ES',
    languageEn: 'EN',
    projectDemo: 'Demo',
    projectCode: 'Código',
  },
  en: {
    skipToContent: 'Skip to content',
    navAria: 'Main',
    heroEyebrow: 'Portfolio',
    downloadCv: 'Download CV',
    sectionSkills: 'Skills',
    sectionExperience: 'Experience',
    sectionProjects: 'Projects',
    sectionContact: 'Contact',
    footerSuffix: 'Built with React and Vite.',
    languageLabel: 'Language',
    languageEs: 'ES',
    languageEn: 'EN',
    projectDemo: 'Demo',
    projectCode: 'Code',
  },
} as const

export type UiStrings = (typeof ui)[Locale]

export function getUi(locale: Locale): UiStrings {
  return ui[locale]
}
