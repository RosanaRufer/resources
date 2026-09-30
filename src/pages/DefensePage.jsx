import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DefenseCard from '../components/DefenseCard.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import cards from '../data/defense.json'

function DefensePage() {
  const { locale, t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const [open, setOpen] = useState(false)
  const exercise = searchParams.get('exercise') === '1'
  const toggleDescriptions = () => setOpen((current) => !current)

  function toggleExercise() {
    const next = new URLSearchParams(searchParams)
    if (exercise) {
      next.delete('exercise')
    } else {
      next.set('exercise', '1')
    }
    setSearchParams(next, { replace: true })
  }

  function setAnswer(id, value) {
    const next = new URLSearchParams(searchParams)
    next.set(id, value)
    setSearchParams(next, { replace: true })
  }

  function shareResults() {
    navigator.clipboard.writeText(window.location.href)
  }

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
        <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
          <h1 className="h2 fw-bold mb-0">{t.heading}</h1>
          <button
            type="button"
            className={`btn btn-sm ${exercise ? 'btn-primary' : 'btn-outline-primary'}`}
            aria-pressed={exercise}
            onClick={toggleExercise}
          >
            {exercise ? t.abandonExercise : t.startExercise}
          </button>
          {exercise ? (
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={shareResults}>
              {t.shareResults} 🔗
            </button>
          ) : null}
        </div>
        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-md-6 col-lg-4" key={card.id}>
              <DefenseCard
                {...card[locale]}
                image={card.image}
                open={open}
                onToggle={toggleDescriptions}
                exercise={exercise}
                answer={searchParams.get(card.id)}
                onAnswer={(value) => setAnswer(card.id, value)}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default DefensePage
