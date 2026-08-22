import type { Locale } from '../types/locale'

/** Cadenas de interfaz (no contenido editorial de los módulos). */
const ui = {
  es: {
    skipToContent: 'Saltar al contenido',
    navAria: 'Principal',
    heroEyebrow: 'Portafolio',
    heroAreasLabel: 'Proyectos por área',
    downloadCv: 'Descargar CV',
    sectionSkills: 'Habilidades',
    sectionAreas: 'Lo que hago',
    sectionContact: 'Contacto',
    footerSuffix: 'Hecho con React y Vite.',
    languageLabel: 'Idioma',
    languageEs: 'ES',
    languageEn: 'EN',
    viewDiagram: 'Ver diagrama',
    closeDialog: 'Cerrar',
  },
  en: {
    skipToContent: 'Skip to content',
    navAria: 'Main',
    heroEyebrow: 'Portfolio',
    heroAreasLabel: 'Projects by area',
    downloadCv: 'Download CV',
    sectionSkills: 'Skills',
    sectionAreas: 'What I Do',
    sectionContact: 'Contact',
    footerSuffix: 'Built with React and Vite.',
    languageLabel: 'Language',
    languageEs: 'ES',
    languageEn: 'EN',
    viewDiagram: 'View diagram',
    closeDialog: 'Close',
  },
} as const

export type UiStrings = (typeof ui)[Locale]

export function getUi(locale: Locale): UiStrings {
  return ui[locale]
}
