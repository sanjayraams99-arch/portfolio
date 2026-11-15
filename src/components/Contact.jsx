import { useState } from 'react';
import { contact, site } from '../content';
import { useReveal } from '../useReveal';

export default function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  /**
   * Opens the visitor's email app with the message pre-filled.
   * To receive messages without an email client, replace this handler
   * with a POST to a service like Formspree (https://formspree.io).
   */
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const subject = encodeURIComponent(`New project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="section" id="contact">
      <div className="container section__grid" ref={ref} data-reveal>
        <div className="section__head">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="section__title">{contact.heading}</h2>
          <p className="section__lead">{contact.body}</p>

          <a className="contact__mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="contact__phone">
            <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>{site.phone}</a>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Your name</span>
            <input name="name" type="text" autoComplete="name" required placeholder="Jamie Chen" />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jamie@company.com"
            />
          </label>

          <label className="field">
            <span>What do you need?</span>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="A short description of the project, timeline and budget if you have one."
            />
          </label>

          <button className="btn btn--block" type="submit">
            Send message
          </button>

          {sent ? (
            <p className="form__note form__note--ok" role="status">
              Your email app should be open with the message ready. If nothing happened, email
              me directly at {site.email}.
            </p>
          ) : (
            <p className="form__note">{contact.formNote}</p>
          )}
        </form>
      </div>
    </section>
  );
}
