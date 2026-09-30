import { useState } from 'react'
import DefenseCard from '../components/DefenseCard.jsx'
import cards from '../data/defense.json'

function DefensePage() {
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
        </nav>
      </header>

      <main className="container py-5">
        <h1 className="h2 fw-bold mb-4">Defense</h1>
        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-md-6 col-lg-4" key={card.title}>
              <DefenseCard {...card} open={open} onToggle={toggleDescriptions} />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default DefensePage
