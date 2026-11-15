import { achievements } from '../content';
import { useReveal } from '../useReveal';

export default function Achievements() {
  const ref = useReveal();

  return (
    <section className="section" id="achievements">
      <div className="container" ref={ref} data-reveal>
        <div className="section__head section__head--wide">
          <p className="eyebrow">{achievements.eyebrow}</p>
          <h2 className="section__title">{achievements.heading}</h2>
        </div>

        <ul className="awards">
          {achievements.items.map((item) => (
            <li className="award" key={item.title}>
              <span className="award__year">{item.year}</span>
              <div className="award__text">
                <p className="award__title">{item.title}</p>
                <p className="award__detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
