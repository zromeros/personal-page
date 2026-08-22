/**
 * Datos del perfil y navegación por idioma. Edita antes de publicar.
 */
import type { Locale } from "../../../common/types/locale";
import type { NavItem, Profile } from "../domain/profile.entity";

export const profileByLocale: Record<Locale, Profile> = {
  es: {
    name: "Zadkiel Romero",
    role: "Desarrollador de software · Ingeniero electrónico",
    tagline:
      "Más de 7 años construyendo soluciones tecnológicas enfocadas en la experiencia del usuario, partiendo del desarrollo web en frontend, backend y móvil, conexión de servicios de AWS, integración de modelos de lenguaje (LLMs) y diseño de hardware y firmware embebido. Hoy en día, haciendo uso de la inteligencia artificial a través de herramientas como Claude Code, Cursor y Kiro. Siendo referente técnico en DirMOD.",
    avatarAlt: "Zadkiel Romero",

    about: {
      title: "Sobre mí",
      paragraphs: [
        "Inicié mi formación como Ingeniero Electrónico en la Universidad Simón Bolívar (VE), dando mis primeros pasos profesionales en el diseño de PCBs y firmware para sistemas embebidos. Con el tiempo, mi perfil evolucionó hacia el desarrollo de software y la dirección técnica de equipos. A lo largo de mi carrera he construido soluciones en sectores como plataformas de pagos, control de acceso, educación, IoT, EdTech, herramientas administrativas, automatización en la nube e integraciones con modelos de lenguaje (LLMs); siempre con un enfoque riguroso en rendimiento, arquitectura limpia y accesibilidad.",
      ],
    },

    skills: [
      {
        purpose: "Construyo productos web y móviles",
        tools: [
          "TypeScript",
          "JavaScript",
          "Next.js",
          "React",
          "Angular",
          "React Native",
        ],
      },
      {
        purpose: "Diseño APIs y backends",
        tools: ["Node.js", "NestJS", "Express", "MongoDB"],
      },
      {
        purpose: "Automatizo infraestructura y despliegues",
        tools: ["AWS", "Python"],
      },
      {
        purpose: "Diseño hardware y firmware embebido",
        tools: [
          "C / C++",
          "ESP32 / Embebidos",
          "KiCad / Diseño de PCB",
          "MQTT / Modbus",
        ],
      },
      {
        purpose: "Integro inteligencia artificial",
        tools: ["LLMs / Prompt Engineering"],
      },
      {
        purpose: "Organizo equipos y entregas",
        tools: ["Scrum", "Kanban"],
      },
    ],

    heroHighlight: {
      bigNumber: "7+",
      bigLabel: "años construyendo productos de punta a punta",
      stats: [
        { value: "35", label: "Repositorios involucrados" },
        { value: "17", label: "Proyectos completados" },
        { value: "3", label: "Equipos liderados" },
        { value: "10", label: "Clientes satisfechos" },
      ],
      projectsByArea: [
        { label: "EdTech", value: 7 },
        { label: "Fintech", value: 4 },
        { label: "IoT", value: 3 },
        { label: "IA", value: 3 },
      ],
    },

    cvUrl: "#",
  },
  en: {
    name: "Zadkiel Romero",
    role: "Software developer · electronics engineer",
    tagline:
      "7+ years building technology solutions focused on user experience — from frontend, backend, and mobile web development, to connecting AWS services, integrating language models (LLMs), and designing embedded hardware and firmware. Today, leveraging AI through tools like Claude Code, Cursor, and Kiro. Currently technical referent at DirMOD.",
    avatarAlt: "Zadkiel Romero",

    about: {
      title: "About",
      paragraphs: [
        "I began my training as an Electronics Engineer at Universidad Simón Bolívar (VE), taking my first professional steps designing PCBs and firmware for embedded systems. Over time, my profile evolved toward software development and technical team leadership. Throughout my career I've built solutions across sectors like payment platforms, access control, education, IoT, EdTech, administrative tools, cloud automation, and LLM integrations — always with a rigorous focus on performance, clean architecture, and accessibility.",
      ],
    },

    skills: [
      {
        purpose: "I build web and mobile products",
        tools: [
          "TypeScript",
          "JavaScript",
          "Next.js",
          "React",
          "Angular",
          "React Native",
        ],
      },
      {
        purpose: "I design APIs and backends",
        tools: ["Node.js", "NestJS", "Express", "MongoDB"],
      },
      {
        purpose: "I automate infrastructure and deployments",
        tools: ["AWS", "Python"],
      },
      {
        purpose: "I design hardware and embedded firmware",
        tools: [
          "C / C++",
          "ESP32 / Embedded",
          "KiCad / PCB design",
          "MQTT / Modbus",
        ],
      },
      {
        purpose: "I integrate artificial intelligence",
        tools: ["LLMs / Prompt Engineering"],
      },
      {
        purpose: "I organize teams and delivery",
        tools: ["Scrum", "Kanban"],
      },
    ],

    heroHighlight: {
      bigNumber: "7+",
      bigLabel: "years building products end to end",
      stats: [
        { value: "35", label: "Repositories involved" },
        { value: "17", label: "Projects completed" },
        { value: "3", label: "Teams led" },
        { value: "10", label: "Satisfied clients" },
      ],
      projectsByArea: [
        { label: "EdTech", value: 7 },
        { label: "Fintech", value: 4 },
        { label: "IoT", value: 3 },
        { label: "AI", value: 3 },
      ],
    },

    cvUrl: "#",
  },
};

export const navItemsByLocale: Record<Locale, readonly NavItem[]> = {
  es: [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#areas", label: "Lo que hago" },
    { href: "#habilidades", label: "Habilidades" },
  ],
  en: [
    { href: "#inicio", label: "Home" },
    { href: "#sobre-mi", label: "About" },
    { href: "#areas", label: "What I Do" },
    { href: "#habilidades", label: "Skills" },
  ],
};
