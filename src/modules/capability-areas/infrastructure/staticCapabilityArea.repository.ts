import type { CapabilityAreaRepository } from '../domain/capabilityArea.repository'
import { capabilityAreasByLocale } from './capabilityArea.data'

export const staticCapabilityAreaRepository: CapabilityAreaRepository = {
  getAreas: (locale) => capabilityAreasByLocale[locale],
}
