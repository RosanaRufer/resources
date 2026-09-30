import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import DefensePage from './pages/DefensePage.jsx'

describe('DefensePage', () => {
  it('renders a card for each entry', () => {
    const markup = renderToStaticMarkup(createElement(DefensePage))

    expect(markup).toContain('aparento')
    expect(markup).toContain('tengo-razon')
    expect(markup).toContain('/defense/aparento.png')
    expect(markup).toContain('Read more...')
    expect(markup).not.toContain('Lorem ipsum')
  })
})
