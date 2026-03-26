/**
 * Experiencia profesional por idioma. Edita en experience.data.ts
 */
import type { Locale } from '../../../common/types/locale'
import type { ExperienceEntry } from '../domain/experience.entity'

export const experienceEntriesByLocale: Record<Locale, ExperienceEntry[]> = {
  es: [
    {
      id: 'dirmod',
      title: 'Desarrollador full stack · líder técnico',
      organization: 'DirMOD',
      period: 'Jun 2025 — presente',
      description:
        'Liderazgo técnico: gestión de equipo, flujos de trabajo y traducción de requerimientos funcionales del cliente. Desarrollo de soluciones de gestión administrativa de personal académico, estadísticas de progreso y alto volumen de datos. Integración con modelos LLM para módulos operativos. Stack: Next.js, React, Node.js, NestJS, TypeScript.',
    },
    {
      id: 'pagodirecto',
      title: 'Desarrollador full stack · líder técnico',
      organization: 'PagoDirecto',
      period: 'Jun 2019 — Jun 2025',
      description:
        'Productos de pago de servicios (web, app móvil y autogestión). Como líder técnico (2023—2025): revisión de código, calidad y rendimiento; reducción ~30% de errores ligados a arquitectura poco clara y ~25% mejora en tiempos de desarrollo. Como desarrollador (2019—2022): software interno de monitoreo y soporte en tiempo real; atomic design y responsive; ~80% mejora en tiempo de reacción ante incidentes. Stack: Next.js, React Native, Node.js, Express, TypeScript.',
    },
    {
      id: 'sietenet',
      title: 'Desarrollador full stack (freelance)',
      organization: 'Corporación 7net',
      period: 'Ene 2024 — Ago 2024',
      description:
        'API REST para plataforma educativa con mapas personalizados; arquitectura hexagonal. Administración de mapas interactivos (capas, navegación) y app web con suscripciones y capas SVG personalizables. Stack: Next.js, Node.js, TypeScript, Express, MongoDB.',
    },
    {
      id: 'jacidi',
      title: 'Desarrollador frontend (freelance)',
      organization: 'Jacidi',
      period: 'Oct 2023 — Ene 2024',
      description:
        'Mantenimiento y nuevas funcionalidades en sistema hotelero: reservas, mantenimiento, facturación y promociones. Stack: Angular.',
    },
    {
      id: 'ams',
      title: 'Desarrollador full stack (freelance)',
      organization: 'Asset Monitoring Solutions',
      period: 'Dic 2021 — Dic 2022',
      description:
        'UI para configurar protocolos e interfaces IoT. Sistema Modbus → MQTT hacia AWS para visualizar PLCs en tiempo real. Stack: Angular, React, Nest, TypeScript, MongoDB.',
    },
    {
      id: 'alterinfo',
      title: 'Pasante de desarrollo',
      organization: 'ALTERINFO C.A.',
      period: 'Ene 2019 — Jun 2019',
      description:
        'Servicio web: deserialización de datos de cámara IP y streaming en tiempo real. UI embebida en controlador para configuración remota. Stack: HTML, CSS, JavaScript, Python, C.',
    },
  ],
  en: [
    {
      id: 'dirmod',
      title: 'Full stack developer · tech lead',
      organization: 'DirMOD',
      period: 'Jun 2025 — present',
      description:
        'Tech leadership: team management, workflows, and turning functional requirements into delivery. Building administrative solutions for academic staff, progress analytics, and high data volumes. LLM integrations for operational modules. Stack: Next.js, React, Node.js, NestJS, TypeScript.',
    },
    {
      id: 'pagodirecto',
      title: 'Full stack developer · tech lead',
      organization: 'PagoDirecto',
      period: 'Jun 2019 — Jun 2025',
      description:
        'Payment products across web, mobile, and self-service. As tech lead (2023—2025): code review, quality and performance; ~30% fewer issues from unclear architecture and ~25% faster delivery. As developer (2019—2022): internal monitoring and real-time support tooling; atomic design and responsive work; ~80% faster incident response. Stack: Next.js, React Native, Node.js, Express, TypeScript.',
    },
    {
      id: 'sietenet',
      title: 'Full stack developer (freelance)',
      organization: 'Corporación 7net',
      period: 'Jan 2024 — Aug 2024',
      description:
        'REST API for an education platform with custom maps and hexagonal architecture. Interactive map administration and a subscription web app with customizable SVG layers. Stack: Next.js, Node.js, TypeScript, Express, MongoDB.',
    },
    {
      id: 'jacidi',
      title: 'Frontend developer (freelance)',
      organization: 'Jacidi',
      period: 'Oct 2023 — Jan 2024',
      description:
        'Maintenance and features for a hotel management system: reservations, maintenance, billing, and promotions. Stack: Angular.',
    },
    {
      id: 'ams',
      title: 'Full stack developer (freelance)',
      organization: 'Asset Monitoring Solutions',
      period: 'Dec 2021 — Dec 2022',
      description:
        'UI to configure IoT protocols and interfaces. Modbus to MQTT pipeline to AWS for real-time PLC visibility. Stack: Angular, React, Nest, TypeScript, MongoDB.',
    },
    {
      id: 'alterinfo',
      title: 'Development intern',
      organization: 'ALTERINFO C.A.',
      period: 'Jan 2019 — Jun 2019',
      description:
        'Web service for IP camera data and live video streaming. Embedded UI on a controller for remote configuration. Stack: HTML, CSS, JavaScript, Python, C.',
    },
  ],
}
