import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import DefensePage from './pages/DefensePage.jsx'

describe('DefensePage', () => {
  it('renders a card for each entry in Spanish', () => {
    const markup = renderToStaticMarkup(
      createElement(LanguageProvider, null, createElement(DefensePage)),
    )

    expect(markup).toContain('Aparento')
    expect(markup).toContain('Tengo razon')
    expect(markup).toContain('/defense/aparento.png')
    expect(markup).toContain('Leer más...')
    expect(markup).toContain('English')
  })
})
