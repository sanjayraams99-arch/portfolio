import { about, site } from '../content';
import { useReveal } from '../useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section className="section" id="about">
      <div className="container section__grid" ref={ref} data-reveal>
        <div className="section__head">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section__title">{about.heading}</h2>
          <p className="section__meta">
            Based in {site.location}
          </p>

          <ul className="education">
            {about.education.map((item) => (
              <li className="edu" key={item.degree}>
                <span
                  className={`edu__logo${item.logo ? '' : ' edu__logo--mono'}`}
                  aria-hidden="true"
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt=""
                      width="56"
                      height="56"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="edu__initials">{item.initials}</span>
                  )}
                </span>

                <div className="edu__text">
                  <p className="education__degree">{item.degree}</p>
                  <p className="education__school">{item.school}</p>
                  {item.meta ? <p className="education__meta">{item.meta}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="section__body">
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}

          <ul className="checklist">
            {about.highlights.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                  <path
                    d="M3 8.5l3.2 3L13 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
