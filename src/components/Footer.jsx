import { footer, site } from '../content';

const socials = [
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'twitter', label: 'X' },
].filter((s) => site.links[s.key]);

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">        <div className="footer__brand">
          <span className="nav__mark" aria-hidden="true">
            {site.name.charAt(0)}
          </span>
          <div>
            <p className="footer__name">{site.name}</p>
            <p className="footer__role">{site.role}</p>
          </div>
        </div>

        <ul className="footer__links">
          {socials.map((s) => (
            <li key={s.key}>
              <a href={site.links[s.key]} target="_blank" rel="noreferrer noopener">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
          </li>
          <li>
            <a href={site.resume} download>
              Résumé
            </a>
          </li>
        </ul>
      </div>

      <div className="container footer__base">
        <p>
          © {YEAR} {site.name}. All rights reserved.
        </p>
        <p>{footer.note}</p>
      </div>
    </footer>
  );
}
