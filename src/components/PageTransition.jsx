import { useEffect, useRef, useState } from 'react';

/**
 * Metal Fury page transition.
 *
 * Intercepts clicks on in-page anchors (#sections) and plays a curtain wipe:
 * a crimson panel sweeps up over the viewport, the jump happens while the
 * screen is covered, then the panel sweeps away.
 *
 * Skipped entirely when the visitor prefers reduced motion, and ignored for
 * the skip-link, modified clicks, downloads and external links.
 */

const COVER_MS = 340;
const HOLD_MS = 40;
const LEAVE_MS = 460;
const HEADER_OFFSET = 96;

export default function PageTransition() {
  const [state, setState] = useState('idle'); // idle | covering | leaving
  const busy = useRef(false);
  const pending = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    const clearTimers = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    const jumpTo = (target) => {
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';

      const top =
        target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo(0, Math.max(0, top));
      root.style.scrollBehavior = previous;
    };

    const play = (hash, target) => {
      busy.current = true;
      clearTimers();
      setState('covering');

      timers.current.push(
        setTimeout(() => {
          jumpTo(target);
          history.replaceState(null, '', hash);
          setState('leaving');
        }, COVER_MS + HOLD_MS),
      );

      timers.current.push(
        setTimeout(() => {
          setState('idle');
          busy.current = false;

          // Run anything the visitor asked for while the curtain was moving.
          const next = pending.current;
          pending.current = null;
          if (next) play(next.hash, next.target);
        }, COVER_MS + HOLD_MS + LEAVE_MS),
      );
    };

    const onClick = (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;
      if (link.classList.contains('skip-link')) return;
      if (link.hasAttribute('download')) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();

      // Reduced motion: plain instantaneous jump, no curtain.
      if (reduce.matches) {
        jumpTo(target);
        history.replaceState(null, '', hash);
        return;
      }

      // Already mid-transition: queue the newest request instead of dropping it.
      if (busy.current) {
        pending.current = { hash, target };
        return;
      }

      play(hash, target);
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      clearTimers();
    };
  }, []);

  return (
    <div className="pt" data-state={state} aria-hidden="true">
      <div className="pt__panel">
        <span className="pt__glow" />
        <span className="pt__edge" />
        <span className="pt__mark">
          <svg className="pt__ring" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" />
            <circle className="pt__ring-ticks" cx="60" cy="60" r="44" />
          </svg>
          <span className="pt__glyph">龍牙</span>
        </span>
      </div>
    </div>
  );
}
