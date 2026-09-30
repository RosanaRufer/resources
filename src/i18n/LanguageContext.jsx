import { createContext, useContext, useMemo, useState } from 'react'

const messages = {
  es: {
    readMore: 'Leer más...',
    readLess: 'Leer menos...',
    switchTo: 'English',
    heading: 'Defensas',
  },
  en: {
    readMore: 'Read more...',
    readLess: 'Read less...',
    switchTo: 'Español',
    heading: 'Defense',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('es')
  const value = useMemo(
    () => ({
      locale,
      toggleLocale: () => setLocale((current) => (current === 'es' ? 'en' : 'es')),
      t: messages[locale],
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return value
}
