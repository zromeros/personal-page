import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Locale } from '../types/locale'

type LocaleState = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: 'es',
      setLocale: (locale) => set({ locale }),
    }),
    { name: 'portfolio-locale' },
  ),
)
