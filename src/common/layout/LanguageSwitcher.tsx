import { getUi } from '../i18n/ui'
import { useLocaleStore } from '../store/localeStore'

export function LanguageSwitcher() {
  const locale = useLocaleStore((s) => s.locale)
  const setLocale = useLocaleStore((s) => s.setLocale)
  const ui = getUi(locale)

  return (
    <div
      className="flex shrink-0 items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--social-bg)] p-1"
      role="group"
      aria-label={ui.languageLabel}
    >
      <button
        type="button"
        className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 ${
          locale === 'es'
            ? 'bg-[var(--accent-bg)] text-[var(--text-h)]'
            : 'text-[var(--text)] hover:text-[var(--text-h)]'
        }`}
        aria-pressed={locale === 'es'}
        onClick={() => setLocale('es')}
      >
        {ui.languageEs}
      </button>
      <button
        type="button"
        className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 ${
          locale === 'en'
            ? 'bg-[var(--accent-bg)] text-[var(--text-h)]'
            : 'text-[var(--text)] hover:text-[var(--text-h)]'
        }`}
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        {ui.languageEn}
      </button>
    </div>
  )
}
