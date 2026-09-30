import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import App from './App.jsx'

describe('App', () => {
  it('renders the starter page heading', () => {
    const markup = renderToStaticMarkup(
      createElement(LanguageProvider, null, createElement(App)),
    )

    expect(markup).toContain('A fresh start for your next idea.')
  })
})
