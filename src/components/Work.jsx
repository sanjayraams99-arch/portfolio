import { useState } from 'react';
import { work } from '../content';
import { useReveal } from '../useReveal';

/**
 * Accepts either a plain list of paths or a list of { src, alt } objects,
 * so editing content.js stays simple.
 */
function normaliseImages(item) {
  const raw = item.images ?? (item.image ? [item.image] : []);
  return raw.map((entry, i) =>
    typeof entry === 'string'
      ? { src: entry, alt: `${item.title} — photo ${i + 1}` }
      : entry,
  );
}

function ProjectCard({ item, index }) {
  const ref = useReveal();
  const images = normaliseImages(item);
  const [active, setActive] = useState(0);

  return (
    <article
      className="card"
      ref={ref}
      data-reveal
      style={{ '--delay': `${index * 80}ms` }}
    >
      <div className="card__media">
        {images.length > 0 ? (
          <>
            <img
              key={images[active].src}
              src={images[active].src}
              alt={images[active].alt}
              loading="lazy"
              decoding="async"
            />

            {images.length > 1 ? (
              <div
                className="card__dots"
                role="group"
                aria-label={`${item.title} photos`}
              >
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    className="card__dot"
                    aria-label={`Show photo ${i + 1} of ${images.length}`}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            ) : null}
          </>
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
