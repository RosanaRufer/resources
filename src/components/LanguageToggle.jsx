import { useLanguage } from '../i18n/LanguageContext.jsx'

function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage()

  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm ms-auto"
      onClick={toggleLocale}
      aria-label={t.switchTo}
    >
      {locale === 'es' ? 'ES' : 'EN'}
      <span className="ms-2">{t.switchTo}</span>
    </button>
  )
}

export default LanguageToggle
