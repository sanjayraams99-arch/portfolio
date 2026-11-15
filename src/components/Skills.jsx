import { skills } from '../content';
import { useReveal } from '../useReveal';

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="section" id="skills">
      <div className="container" ref={ref} data-reveal>
        <div className="section__head section__head--wide">
          <p className="eyebrow">{skills.eyebrow}</p>
          <h2 className="section__title">{skills.heading}</h2>
        </div>

        <div className="skills">
          {skills.groups.map((group) => (
            <div className="skill" key={group.title}>
              <h3 className="skill__title">{group.title}</h3>
              <ul className="skill__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="certs">
          <h3 className="certs__title">Certificates</h3>
          <ul className="certs__list">
            {skills.certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
