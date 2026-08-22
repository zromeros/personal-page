/**
 * Áreas de trabajo por idioma. Edita en capabilityArea.data.ts
 */
import type { Locale } from '../../../common/types/locale'
import type { CapabilityArea } from '../domain/capabilityArea.entity'

export const capabilityAreasByLocale: Record<Locale, CapabilityArea[]> = {
  es: [
    {
      id: 'pagos',
      title: 'Pagos',
      summary:
        'Flujos de cobro de punta a punta: apps, pasarelas y hardware de punto de venta.',
      highlights: [
        {
          title: 'Pasarela de pago unificada',
          context: 'PagoDirecto',
          description:
            'App móvil y comunicación con dispositivos por Bluetooth Low Energy (BLE) para peajes, estacionamientos y parquímetros.',
        },
        {
          title: 'Taquilla de autopago multi-POS',
          context: 'PagoDirecto',
          description:
            'Integración de puntos de venta de Megasoft, Bancamiga y Sumni en un mismo flujo de cobro.',
        },
        {
          title: 'Pagos e inscripciones en tiempo real',
          context: 'Freelance · Humanitec',
          description:
            'Integración de gestión de pagos e inscripciones en tiempo real para una institución.',
        },
      ],
    },
    {
      id: 'automatizacion',
      title: 'Automatización & Cloud',
      summary:
        'Procesos manuales convertidos en pipelines confiables, en la nube y en el día a día del equipo.',
      highlights: [
        {
          title: 'Automatización de facturación en AWS',
          context: 'DirMOD',
          description:
            'Pipeline en AWS para generar y procesar facturas, reduciendo trabajo manual y tiempos de cierre.',
        },
        {
          title: 'CI/CD desde cero',
          context: 'PagoDirecto · Tech Lead',
          description:
            '-50% en tiempos de entrega y +80% de estabilidad tras implementar el pipeline completo.',
        },
        {
          title: 'Despliegues orquestados con MCP',
          context: 'Freelance · Humanitec',
          description:
            'Runner de despliegue automatizado en servidor, orquestando servidores MCP con un flujo de "vibe coding".',
        },
      ],
    },
    {
      id: 'hardware',
      title: 'Hardware & Electrónica',
      summary:
        'Ingeniería electrónica aplicada: PCBs, firmware embebido y protocolos industriales.',
      highlights: [
        {
          title: 'Migración a PCB centralizado',
          context: 'PagoDirecto',
          description:
            'De placas Arduino + HM10 cableadas a un ESP32 sobre un PCB programable diseñado en KiCad: -90% en tiempo de fabricación e instalación.',
        },
        {
          title: 'Gateway MQTT ↔ Modbus',
          context: 'Asset Monitoring Solutions',
          description:
            'PLCs industriales visibles y controlables en tiempo real desde un administrador web en la nube.',
        },
        {
          title: 'Streaming embebido en cámara IP',
          context: 'ALTERINFO',
          description:
            'ESP32 y STM32 vía SPI, con comandos de configuración remota por UDP y MQTT.',
        },
      ],
    },
    {
      id: 'ia',
      title: 'Inteligencia Artificial',
      summary:
        'Integraciones con LLMs: de chatbots conversacionales a documentación técnica asistida.',
      highlights: [
        {
          title: 'Avatar conversacional para centro de briefings',
          context: 'DirMOD',
          description:
            'Recepcionista virtual con LLM y voz: enrutamiento de intenciones, respuestas ancladas a datos de la empresa y texto a voz con manejo de interrupciones.',
        },
        {
          title: 'Chatbot institucional',
          context: 'Freelance · Humanitec',
          description:
            'Diseño y desarrollo de un chatbot conversacional para atención y consultas.',
        },
        {
          title: 'Documentación técnica asistida por IA',
          context: 'DirMOD',
          description:
            'Prompts para documentar aplicaciones legadas: definiciones técnicas, vulnerabilidades y sugerencias de modernización.',
        },
      ],
    },
    {
      id: 'educacion',
      title: 'Educación',
      summary: 'Plataformas y herramientas para instituciones y proyectos educativos.',
      highlights: [
        {
          title: 'Globalmaps',
          context: 'Corporación 7net',
          description:
            'Mapas históricos y geográficos interactivos a partir de capas SVG, con navegación, usuarios y suscripciones.',
        },
        {
          title: 'Gestión educativa',
          context: 'DirMOD',
          description:
            'Plataformas internas de gestión académica y analítica de progreso, con alto volumen de datos.',
        },
        {
          title: 'App educativa móvil',
          context: 'Freelance · SINSEMA',
          description:
            'Aplicación sobre faros y boyas de Venezuela, con digitalización completa del contenido.',
        },
      ],
    },
    {
      id: 'liderazgo',
      title: 'Liderazgo técnico',
      summary: 'De desarrollador a referente técnico: procesos, calidad y equipos que entregan.',
      highlights: [
        {
          title: 'Tech Lead en PagoDirecto',
          context: 'PagoDirecto · 2023—2025',
          description:
            'Kanban (+20% eficiencia, deploys de 3 a 6 por mes) y revisión de código (-30% errores, +25% rendimiento).',
        },
        {
          title: 'Referente técnico en DirMOD',
          context: 'DirMOD',
          description:
            'Traduzco necesidades de negocio poco definidas en soluciones técnicas priorizadas, aportando criterio para ordenar el trabajo del equipo.',
        },
        {
          title: 'Liderazgo del departamento de hardware/firmware',
          context: 'PagoDirecto',
          description:
            'Lideré el equipo de hardware mientras desarrollaba en paralelo el CRM interno de la empresa.',
        },
      ],
    },
  ],
  en: [
    {
      id: 'pagos',
      title: 'Payments',
      summary:
        'End-to-end checkout flows: apps, gateways, and point-of-sale hardware.',
      highlights: [
        {
          title: 'Unified payment gateway',
          context: 'PagoDirecto',
          description:
            'Mobile app and device communication over Bluetooth Low Energy (BLE) for tolls, parking, and meters.',
        },
        {
          title: 'Multi-POS self-checkout kiosk',
          context: 'PagoDirecto',
          description:
            'Integrated Megasoft, Bancamiga, and Sumni points of sale into a single checkout flow.',
        },
        {
          title: 'Real-time payments & enrollment',
          context: 'Freelance · Humanitec',
          description:
            'Real-time payments and enrollment management integration for an institution.',
        },
      ],
    },
    {
      id: 'automatizacion',
      title: 'Automation & Cloud',
      summary:
        'Manual processes turned into reliable pipelines, in the cloud and in the team\'s daily workflow.',
      highlights: [
        {
          title: 'AWS invoicing automation',
          context: 'DirMOD',
          description:
            'AWS-based pipeline to generate and process invoices, cutting manual work and closing times.',
        },
        {
          title: 'CI/CD built from scratch',
          context: 'PagoDirecto · Tech Lead',
          description:
            '-50% delivery time and +80% stability after rolling out the full pipeline.',
        },
        {
          title: 'MCP-orchestrated deployments',
          context: 'Freelance · Humanitec',
          description:
            'Automated deployment runner on the server, orchestrating MCP servers with a "vibe coding" workflow.',
        },
      ],
    },
    {
      id: 'hardware',
      title: 'Hardware & Electronics',
      summary:
        'Electronics engineering in practice: PCBs, embedded firmware, and industrial protocols.',
      highlights: [
        {
          title: 'Migration to a centralized PCB',
          context: 'PagoDirecto',
          description:
            'From wired Arduino + HM10 boards to a programmable ESP32-based PCB designed in KiCad: -90% manufacturing and installation time.',
        },
        {
          title: 'MQTT ↔ Modbus gateway',
          context: 'Asset Monitoring Solutions',
          description:
            'Industrial PLCs made visible and controllable in real time from a cloud-based web admin.',
        },
        {
          title: 'Embedded IP camera streaming',
          context: 'ALTERINFO',
          description:
            'ESP32 and STM32 over SPI, with remote configuration commands over UDP and MQTT.',
        },
      ],
    },
    {
      id: 'ia',
      title: 'Artificial Intelligence',
      summary:
        'LLM integrations: from conversational chatbots to AI-assisted technical documentation.',
      highlights: [
        {
          title: 'Conversational avatar for a briefing center',
          context: 'DirMOD',
          description:
            'Virtual receptionist with LLM and voice: intent routing, answers grounded in company data, and text-to-speech with interruption handling.',
        },
        {
          title: 'Institutional chatbot',
          context: 'Freelance · Humanitec',
          description:
            'Designed and built a conversational chatbot for support and inquiries.',
        },
        {
          title: 'AI-assisted technical documentation',
          context: 'DirMOD',
          description:
            'Prompts to document legacy applications: technical definitions, vulnerabilities, and modernization suggestions.',
        },
      ],
    },
    {
      id: 'educacion',
      title: 'Education',
      summary: 'Platforms and tools for educational institutions and projects.',
      highlights: [
        {
          title: 'Globalmaps',
          context: 'Corporación 7net',
          description:
            'Interactive historical and geographic maps built from SVG layers, with navigation, users, and subscriptions.',
        },
        {
          title: 'Educational management',
          context: 'DirMOD',
          description:
            'Internal platforms for academic management and progress analytics, handling high data volumes.',
        },
        {
          title: 'Educational mobile app',
          context: 'Freelance · SINSEMA',
          description:
            'App about lighthouses and buoys of Venezuela, fully digitizing the content.',
        },
      ],
    },
    {
      id: 'liderazgo',
      title: 'Technical Leadership',
      summary: 'From developer to technical referent: process, quality, and teams that deliver.',
      highlights: [
        {
          title: 'Tech Lead at PagoDirecto',
          context: 'PagoDirecto · 2023—2025',
          description:
            'Kanban (+20% efficiency, deploys up from 3 to 6 per month) and code review (-30% errors, +25% performance).',
        },
        {
          title: 'Technical referent at DirMOD',
          context: 'DirMOD',
          description:
            "I translate loosely defined business needs into prioritized technical solutions, bringing judgment on how to order the team's work.",
        },
        {
          title: 'Led the hardware/firmware department',
          context: 'PagoDirecto',
          description:
            "Led the hardware team while building the company's internal CRM in parallel.",
        },
      ],
    },
  ],
}
