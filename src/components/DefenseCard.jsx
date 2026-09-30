import { useLanguage } from '../i18n/LanguageContext.jsx'

function DefenseCard({ title, subtitle, description, image, open, onToggle }) {
  const { t } = useLanguage()

  return (
    <article className="card h-100 shadow-sm">
      <img
        className="card-img-top defense-card-image"
        src={`${import.meta.env.BASE_URL}${image}`}
        alt=""
      />
      <div className="card-body">
        <p className="text-secondary small mb-1">
          <span className="defense-card-text">{subtitle}</span>
          <button
            type="button"
            className="btn btn-link btn-sm p-0 ms-2 align-baseline"
            aria-expanded={open}
            onClick={onToggle}
          >
            {open ? t.readLess : t.readMore}
          </button>
        </p>
        <h2 className="h5 card-title defense-card-title">{title}</h2>
        {open ? <p className="card-text text-secondary mb-0">{description}</p> : null}
      </div>
    </article>
  )
}

export default DefenseCard
