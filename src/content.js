/**
 * ============================================================
 *  EDIT YOUR WEBSITE CONTENT HERE
 * ------------------------------------------------------------
 *  Everything visitors read lives in this one file.
 *  Change the text between the quotes, save, and the page
 *  updates instantly. You don't need to touch any other file.
 * ============================================================
 */

export const site = {
  // --- Identity ---------------------------------------------------
  name: 'Alex Rivera',
  role: 'Web Developer & Designer',
  tagline:
    'I build fast, accessible websites that turn visitors into customers.',
  location: 'Lisbon, Portugal',
  email: 'hello@alexrivera.dev',
  availability: 'Available for new projects',

  // --- Links (leave a value as '' to hide that link) --------------
  links: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://x.com/',
  },

  // --- Navigation -------------------------------------------------
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero = {
  eyebrow: 'Freelance developer',
  heading: ['Design that looks good.', 'Code that stays fast.'],
  body: 'I help small teams and independent businesses launch polished websites — from the first sketch to a deployed, measurable product.',
  primaryCta: { label: 'See my work', href: '#work' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
};

export const stats = [
  { value: '40+', label: 'Projects shipped' },
  { value: '6', label: 'Years experience' },
  { value: '98', label: 'Avg. Lighthouse score' },
  { value: '12', label: 'Happy clients' },
];

export const about = {
  eyebrow: 'About',
  heading: 'Careful work, delivered on time.',
  paragraphs: [
    'I’m a developer and designer working with small businesses and independent teams. My focus is simple: websites that load quickly, read clearly, and make it obvious what to do next.',
    'Every project starts with the question of what the site actually needs to accomplish. Then I build the smallest, cleanest thing that achieves it — no bloat, no mystery plugins, nothing you can’t maintain later.',
  ],
  highlights: [
    'Custom design — no cookie-cutter templates',
    'Accessible by default (WCAG AA)',
    'Performance budgets, not afterthoughts',
    'Handover with docs and a walkthrough',
  ],
};

export const work = {
  eyebrow: 'Selected work',
  heading: 'A few recent projects.',
  items: [
    {
      title: 'Northwind Coffee',
      category: 'Brand & e-commerce',
      description:
        'A subscription storefront for a specialty roaster. Custom checkout flow lifted completed orders by 34%.',
      tags: ['React', 'Stripe', 'Design'],
      year: '2026',
      // Replace with a real screenshot: put the image in /public and use '/your-image.jpg'
      image: '',
    },
    {
      title: 'Fieldnote',
      category: 'Web application',
      description:
        'Offline-first note-taking app for researchers. Syncs across devices and works on a plane.',
      tags: ['React', 'IndexedDB', 'PWA'],
      year: '2025',
      image: '',
    },
    {
      title: 'The Meridian Group',
      category: 'Marketing site',
      description:
        'A complete rebuild of a consultancy site — 1.2s load time, clear service pages, and an editor-friendly CMS.',
      tags: ['Vite', 'CMS', 'SEO'],
      year: '2025',
      image: '',
    },
    {
      title: 'Studio Halcyon',
      category: 'Portfolio',
      description:
        'An image-led portfolio for an architecture studio, with a custom gallery and generous typography.',
      tags: ['Design', 'Motion'],
      year: '2024',
      image: '',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Have something in mind?',
  body: 'Tell me a little about the project and I’ll reply within two working days. No pitch decks required.',
  formNote:
    'This form opens your email app with the message ready to send. To collect messages without an email client, connect a free service like Formspree.',
};

export const footer = {
  note: 'Built with React and Vite.',
};
