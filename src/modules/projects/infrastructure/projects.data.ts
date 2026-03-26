/**
 * Proyectos destacados por idioma. Edita en projects.data.ts
 */
import type { Locale } from '../../../common/types/locale'
import type { Project } from '../domain/project.entity'

export const projectsByLocale: Record<Locale, Project[]> = {
  es: [
    {
      title: 'PagoDirecto — pagos y control de acceso',
      description:
        'Solución que combina software y hardware para gestionar peajes, estacionamientos y parquímetros: pasarela de pago unificada con app móvil y comunicación con dispositivos por Bluetooth Low Energy (BLE).',
      stack: ['React Native', 'Next.js', 'Node.js', 'TypeScript'],
    },
    {
      title: 'Globalmaps',
      description:
        'Plataforma web educativa con mapas históricos y geográficos a partir de capas SVG: personalización con dibujos, íconos, líneas de tiempo, navegación, usuarios y suscripciones.',
      stack: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
    },
    {
      title: 'MQTT Modbus Gateway (IoT)',
      description:
        'Gateway en ESP32 que une Modbus y MQTT: datos de PLCs a la nube e instrucciones en tiempo real desde un administrador web; payloads JSON sobre MQTT.',
      stack: ['C', 'MQTT', 'Modbus', 'AWS', 'Embedded'],
    },
  ],
  en: [
    {
      title: 'PagoDirecto — payments & access control',
      description:
        'Hardware and software solution for tolls, parking, and meters: unified payment gateway with a mobile app and device communication over Bluetooth Low Energy (BLE).',
      stack: ['React Native', 'Next.js', 'Node.js', 'TypeScript'],
    },
    {
      title: 'Globalmaps',
      description:
        'Education web platform for historical and geographic maps from SVG layers: customization, icons, timelines, navigation, users, and subscriptions.',
      stack: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
    },
    {
      title: 'MQTT Modbus Gateway (IoT)',
      description:
        'ESP32 gateway bridging Modbus and MQTT: PLC data to the cloud and real-time commands from a web admin; JSON payloads over MQTT.',
      stack: ['C', 'MQTT', 'Modbus', 'AWS', 'Embedded'],
    },
  ],
}
