import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import DefensePage from './pages/DefensePage.jsx'

function renderPage(path = '/defense') {
  return renderToStaticMarkup(
    createElement(
      LanguageProvider,
      null,
      createElement(MemoryRouter, { initialEntries: [path] }, createElement(DefensePage)),
    ),
  )
}

describe('DefensePage', () => {
  it('renders a card for each entry in Spanish', () => {
    const markup = renderPage()

    expect(markup).toContain('Aparento')
    expect(markup).toContain('Tengo razon')
    expect(markup).toContain('/defense/aparento.png')
    expect(markup).toContain('Leer más...')
    expect(markup).not.toContain('Leer menos...')
    expect(markup).toContain('Empezar ejercicio')
    expect(markup).not.toContain('Copiar URL con respuestas')
    expect(markup).not.toContain('>Sí<')
  })

  it('shows the recorded answers when the exercise is in the URL', () => {
    const markup = renderPage('/defense?exercise=1&aparento=yes')

    expect(markup).toContain('Abandonar ejercicio')
    expect(markup).toContain('Copiar URL con respuestas')
    expect(markup).toContain('>Sí<')
    expect(markup).toContain('aria-pressed="true"')
  })
})
