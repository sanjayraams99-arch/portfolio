import { hero, site, stats } from '../content';
import { useReveal } from '../useReveal';
import HeroFX from './HeroFX';

export default function Hero() {
  const ref = useReveal();
  const isDownload = /\.pdf$/i.test(hero.secondaryCta.href);

  return (
    <section className="hero" id="top">
      <HeroFX />
      <div className="hero__grid" aria-hidden="true" />
      <p className="hero__watermark" aria-hidden="true">
        龍牙
      </p>

      <div className="container hero__inner" ref={ref} data-reveal>
        <p className="pill">
          <span className="pill__dot" aria-hidden="true" />
          {site.availability}
          <span className="pill__tag">{site.badge}</span>
        </p>

        <h1 className="hero__title">
          {hero.heading.map((line, i) => (
            <span key={line} className={i === 1 ? 'hero__title-accent' : ''}>
              {line}
            </span>
          ))}
        </h1>

        <p className="hero__kicker">{site.role}</p>
        <p className="hero__body">{hero.body}</p>

        <div className="hero__actions">
          <a className="btn" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                d="M2 8h11M9 4l4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="btn btn--ghost"
            href={hero.secondaryCta.href}
            download={isDownload ? '' : undefined}
          >
            {isDownload ? (
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path
                  d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
            {hero.secondaryCta.label}
          </a>
        </div>

        <dl className="stats">
          {stats.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <dt className="stats__value">{stat.value}</dt>
              <dd className="stats__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
