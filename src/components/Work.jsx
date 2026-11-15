import { work } from '../content';
import { useReveal } from '../useReveal';

function ProjectCard({ item, index }) {
  const ref = useReveal();

  return (
    <article
      className="card"
      ref={ref}
      data-reveal
      style={{ '--delay': `${index * 80}ms` }}
    >
      <div className="card__media">
        {item.image ? (
          <img src={item.image} alt={`${item.title} — ${item.category}`} loading="lazy" />
        ) : (
          <div className="card__placeholder" aria-hidden="true">
            <span>{item.title.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="card__body">
        <div className="card__meta">
          <span>{item.category}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="card__title">{item.title}</h3>
        <p className="card__text">{item.description}</p>
        <ul className="tags">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Work() {
  const ref = useReveal();

  return (
    <section className="section section--flush" id="work">
      <div className="container">
        <div className="section__head section__head--wide" ref={ref} data-reveal>
          <p className="eyebrow">{work.eyebrow}</p>
          <h2 className="section__title">{work.heading}</h2>
        </div>

        <div className="cards">
          {work.items.map((item, i) => (
            <ProjectCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
