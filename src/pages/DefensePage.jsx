import { useState } from 'react'
import DefenseCard from '../components/DefenseCard.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import cards from '../data/defense.json'

function DefensePage() {
  const { locale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const toggleDescriptions = () => setOpen((current) => !current)

  return (
    <>
      <header className="border-bottom bg-white">
        <nav className="container navbar navbar-expand">
          <a className="navbar-brand fw-semibold" href={import.meta.env.BASE_URL}>
            React Starter
          </a>
          <a className="nav-link ms-3" href={`${import.meta.env.BASE_URL}defense`}>
            Defense
          </a>
          <LanguageToggle />
        </nav>
      </header>

      <main className="container py-5">
        <h1 className="h2 fw-bold mb-4">{t.heading}</h1>
        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-md-6 col-lg-4" key={card.id}>
              <DefenseCard
                {...card[locale]}
                image={card.image}
                open={open}
                onToggle={toggleDescriptions}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default DefensePage
