import type { Locale } from '../../../common/types/locale'
import type { CapabilityArea } from './capabilityArea.entity'

export type CapabilityAreaRepository = {
  getAreas: (locale: Locale) => CapabilityArea[]
}
