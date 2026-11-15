import { useEffect, useState } from 'react';
import { site } from '../content';
import { useActiveSection, useScrolled } from '../useReveal';

const sectionIds = site.nav.map((item) => item.href.replace('#', ''));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav" data-scrolled={scrolled} data-open={open}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            {site.name.charAt(0)}
          </span>
          <span>{site.name}</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav__link"
              aria-current={active === item.href.replace('#', '') ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn--sm" href="#contact">
            Hire me
          </a>
        </nav>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav__bars" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div className="nav__mobile" id="mobile-menu" hidden={!open}>
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn" href="#contact" onClick={() => setOpen(false)}>
          Hire me
        </a>
      </div>
    </header>
  );
}
