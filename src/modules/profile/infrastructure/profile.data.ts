/**
 * Datos del perfil y navegación por idioma. Edita antes de publicar.
 */
import type { Locale } from "../../../common/types/locale";
import type { NavItem, Profile } from "../domain/profile.entity";

export const profileByLocale: Record<Locale, Profile> = {
  es: {
    name: "Zadkiel Romero",
    role: "Desarrollador full stack · líder técnico",
    tagline:
      "Más de 6 años construyendo productos web y móviles con Next.js, Node.js, Nest, Angular y React Native. Me enfoco en soluciones escalables, buena experiencia de usuario y equipos que entregan con calidad.",
    avatarAlt: "Zadkiel Romero",

    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy desarrollador full stack con experiencia liderando equipos y adaptando requerimientos del cliente a soluciones técnicas sólidas. He trabajado en pagos, educación, IoT y administración interna, siempre con atención a rendimiento, accesibilidad y arquitectura limpia.",
        "Formación en Ingeniería Electrónica (Universidad Simón Bolívar). Idiomas: español nativo e inglés con buen dominio.",
      ],
    },

    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Angular",
      "Node.js",
      "NestJS",
      "Express",
      "React Native",
      "MongoDB",
      "Scrum",
      "Kanban",
    ],

    cvUrl: "#",
  },
  en: {
    name: "Zadkiel Romero",
    role: "Full stack developer · tech lead",
    tagline:
      "6+ years shipping web and mobile products with Next.js, Node.js, Nest, Angular, and React Native. I focus on scalable software, strong UX, and teams that deliver with quality.",
    avatarAlt: "Zadkiel Romero",

    about: {
      title: "About",
      paragraphs: [
        "I am a full stack developer with experience leading teams and turning client requirements into robust technical solutions. I have worked in payments, education, IoT, and internal admin tools, with a focus on performance, accessibility, and clean architecture.",
        "Background in Electronic Engineering (Universidad Simón Bolívar). Languages: native Spanish and proficient English.",
      ],
    },

    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Angular",
      "Node.js",
      "NestJS",
      "Express",
      "React Native",
      "MongoDB",
      "Scrum",
      "Kanban",
    ],

    cvUrl: "#",
  },
};

export const navItemsByLocale: Record<Locale, readonly NavItem[]> = {
  es: [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#proyectos", label: "Proyectos" },
  ],
  en: [
    { href: "#inicio", label: "Home" },
    { href: "#sobre-mi", label: "About" },
    { href: "#habilidades", label: "Skills" },
    { href: "#experiencia", label: "Experience" },
    { href: "#proyectos", label: "Projects" },
  ],
};
