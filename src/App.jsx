import LanguageToggle from './components/LanguageToggle.jsx'

function App() {
  return (
    <>
      <header className="border-bottom bg-white">
        <nav className="container navbar navbar-expand">
          <a className="navbar-brand fw-semibold" href={import.meta.env.BASE_URL}>
            React Starter
          </a>
          <a className="nav-link" href={`${import.meta.env.BASE_URL}defense`}>
            Defense
          </a>
          <LanguageToggle />
        </nav>
      </header>

      <main>
        <section className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge rounded-pill text-bg-primary mb-3">
                Ready to build
              </span>
              <h1 className="display-4 fw-bold">A fresh start for your next idea.</h1>
              <p className="lead text-secondary mt-3">
                Your React app is up and running, with Bootstrap ready for
                responsive layouts and polished components.
              </p>
              <a className="btn btn-primary btn-lg mt-2" href="https://react.dev/">
                Explore React
              </a>
            </div>

            <div className="col-lg-5">
              <div className="starter-card card border-0 shadow-sm">
                <div className="card-body p-4">
                  <p className="text-primary fw-semibold mb-2">PROJECT STATUS</p>
                  <h2 className="h4 card-title">Everything is in place</h2>
                  <ul className="list-group list-group-flush mt-3">
                    <li className="list-group-item px-0">React components</li>
                    <li className="list-group-item px-0">Bootstrap styling</li>
                    <li className="list-group-item px-0">Vite development server</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-5" aria-label="Getting started">
          <div className="row g-3">
            <div className="col-md-4">
              <article className="card h-100">
                <div className="card-body">
                  <h2 className="h5 card-title">Develop</h2>
                  <p className="card-text text-secondary mb-0">
                    Start the Vite server and see your changes as you make them.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card h-100">
                <div className="card-body">
                  <h2 className="h5 card-title">Style</h2>
                  <p className="card-text text-secondary mb-0">
                    Use Bootstrap classes or add your own styles in the app stylesheet.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card h-100">
                <div className="card-body">
                  <h2 className="h5 card-title">Build</h2>
                  <p className="card-text text-secondary mb-0">
                    Create an optimized production bundle when you are ready to ship.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="container border-top py-4 text-secondary small">
        Start by editing <code>src/App.jsx</code>.
      </footer>
    </>
  )
}

export default App
