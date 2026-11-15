import { useReveal } from '../useReveal';

/**
 * A lightning bolt line that draws itself across the page when it
 * scrolls into view — used as a section separator.
 */
export default function Divider({ flip = false }) {
  const ref = useReveal();

  return (
    <div className="divider" ref={ref} data-reveal aria-hidden="true">
      <svg
        className="divider__svg"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
      >
        <path
          className="divider__path"
          d="M0 20h300l14-12 10 24 12-18 9 14 14-8h58l18-16 12 32 10-22 14 12 8-6h240l16-14 11 26 12-16 10 10 13-6h420"
        />
      </svg>
    </div>
  );
}
