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
  name: 'Sanjay Raam C',
  role: 'Mechanical Engineer · Product Design & CAD/CAM/CAE',
  location: 'Thiruvallur, Tamil Nadu, India',
  email: 'sanjayraams99@gmail.com',
  phone: '+91 73057 89271',
  availability: 'Open to graduate roles & internships',
  badge: 'Metal Fury',

  // Downloadable résumé (the PDF lives in the public folder)
  resume: '/resume.pdf',

  // --- Links (leave a value as '' to hide that link) --------------
  links: {
    linkedin: 'https://linkedin.com/in/sanjay-raam-c-2715603aa',
    github: '',
    twitter: '',
  },

  // --- Navigation -------------------------------------------------
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero = {
  eyebrow: 'Mechanical engineering student',
  heading: ['Designed in CAD.', 'Proven on the track.'],
  body: 'Final-year mechanical engineering student with hands-on experience in product design, CAD/CAM/CAE, CNC machining and rapid prototyping — and a record of leading SAEINDIA teams to national awards.',
  primaryCta: { label: 'View projects', href: '#work' },
  secondaryCta: { label: 'Download résumé', href: '/resume.pdf' },
};

export const stats = [
  { value: '8.85', label: 'CGPA out of 10' },
  { value: '3', label: 'National awards' },
  { value: '₹5L', label: 'Government sponsorship' },
  { value: '3', label: 'SAEINDIA competitions' },
];

export const about = {
  eyebrow: 'About',
  heading: 'Design, build, validate.',
  paragraphs: [
    'I’m a final-year mechanical engineering student at Prathyusha Engineering College, Thiruvallur, working at the point where design meets fabrication. My projects run the full loop — CAD model, FEA and CFD validation, CAM data, machining, then assembly and real-world testing.',
    'Most of that experience comes from Team Yantramanav, which I led through the BAJA SAEINDIA 2026 all-terrain vehicle competition. The same approach carried into two aircraft projects and a medical delivery drone now backed by government funding. I’m analytical, hands-on, and most useful when a design has to actually get built.',
  ],
  highlights: [
    'CAD / CAM / CAE product design, from concept to drawing',
    'FEA and CFD validation before a part is cut',
    'CNC / VMC machining, CO₂ laser cutting, rapid prototyping',
    'Team leadership in national SAEINDIA competitions',
  ],
  education: [
    {
      degree: 'B.E. Mechanical Engineering',
      school: 'Prathyusha Engineering College, Thiruvallur',
      meta: 'CGPA 8.85 / 10',
      logo: '/pec-emblem.png',
    },
    {
      degree: 'Higher Secondary (Class XII)',
      school: 'Christ King Matriculation Higher Secondary School, Thiruvallur',
      meta: '',
      initials: 'CK',
    },
  ],
};

export const achievements = {
  eyebrow: 'Achievements',
  heading: 'Recognised work.',
  items: [
    {
      title: 'Chairman’s Award — Winner',
      detail: 'BAJA SAEINDIA, Chennai',
      year: '2026',
    },
    {
      title: 'Mathematical Design Award — 2nd Place',
      detail: 'BAJA SAEINDIA, Chennai',
      year: '2026',
    },
    {
      title: 'Design Excellence Award — 2nd Place',
      detail: 'Drone Development Challenge, SAEINDIA Southern Section',
      year: '2025',
    },
    {
      title: 'MSME Innovative Project — ₹5 lakh sponsorship approved',
      detail: 'Government support secured for the AeroAid medical delivery drone',
      year: '2026',
    },
  ],
};

export const work = {
  eyebrow: 'Projects',
  heading: 'Built, tested, competed.',
  items: [
    {
      title: 'BAJA SAEINDIA ATV',
      category: 'Team lead · Vehicle design',
      description:
        'Led Team Yantramanav through design, fabrication, testing and validation. Designed the roll cage, chassis, suspension and key components, ran FEA and mathematical design in Modelon Impact, and prepared CAM data for CNC/VMC machining and laser-cut fabrication.',
      tags: ['CAD', 'FEA', 'CAM', 'Team lead'],
      year: '2026',
      // Add more photos here — they appear as a little gallery on the card
      images: [
        {
          src: '/baja-atv-1.jpg',
          alt: 'Team Yantramanav BAJA SAEINDIA 2026 all-terrain vehicle — photo 1',
        },
        {
          src: '/baja-atv-2.jpg',
          alt: 'Team Yantramanav BAJA SAEINDIA 2026 all-terrain vehicle — photo 2',
        },
        {
          src: '/baja-atv-3.jpg',
          alt: 'Team Yantramanav BAJA SAEINDIA 2026 all-terrain vehicle — photo 3',
        },
      ],
    },
    {
      title: 'AeroAid — Medical Delivery Drone',
      category: 'MSME Innovative Project',
      description:
        'Selected for MSME Project Support 2026 and secured ₹5 lakh in government sponsorship. Contributed to CAD design, system development and project planning for medical delivery applications.',
      tags: ['CAD', 'Systems', 'Project planning'],
      year: '2026',
      images: [],
    },
    {
      title: 'Fixed-Wing Aircraft — DDC',
      category: 'Design & CFD analysis',
      description:
        'Designed a fixed-wing aircraft in CAD and validated its aerodynamics through CFD. Prepared CAM data and fabricated components using CO₂ laser cutting, then supported assembly, testing and validation with the team.',
      tags: ['CAD', 'CFD', 'Laser cutting'],
      year: '2025',
      images: [
        {
          src: '/ddc-aircraft-1.jpg',
          alt: 'Team Yantramanav fixed-wing aircraft built for the Drone Development Challenge — photo 1',
        },
        {
          src: '/ddc-aircraft-2.jpg',
          alt: 'Team Yantramanav fixed-wing aircraft built for the Drone Development Challenge — photo 2',
        },
      ],
    },
    {
      title: 'Autonomous Drone — ADDC',
      category: 'Autonomy & integration',
      description:
        'Designed an autonomous drone in CAD and evaluated its aerodynamics through CFD. Calibrated flight controllers, configured autonomous missions, and completed full drone assembly and integration for competition.',
      tags: ['CAD', 'CFD', 'Flight controller'],
      year: '2025',
      images: [
        {
          src: '/addc-drone-1.jpg',
          alt: 'Team Yantramanav autonomous drone for the ADDC competition — photo 1',
        },
        {
          src: '/addc-drone-2.jpg',
          alt: 'Team Yantramanav autonomous drone for the ADDC competition — photo 2',
        },
      ],
    },
  ],
};

export const skills = {
  eyebrow: 'Skills',
  heading: 'What I work with.',
  groups: [
    {
      title: 'Design & analysis',
      items: ['CAD / CAM / CAE', 'FEA', 'CFD', 'Mathematical design (Modelon Impact)'],
    },
    {
      title: 'Manufacturing',
      items: ['CNC / VMC machining', 'CO₂ laser cutting', 'Rapid prototyping'],
    },
    {
      title: 'Programming',
      items: ['AI-assisted programming', 'Engineering workflow automation'],
    },
    {
      title: 'Drone systems',
      items: ['Flight controller calibration', 'Autonomous mission setup', 'Aircraft assembly & integration'],
    },
    {
      title: 'Professional',
      items: ['Team leadership', 'Technical presentation & reporting', 'Engineering problem solving'],
    },
  ],
  certificates: [
    'BAJA SAEINDIA Chennai 2026 — Participation Certificate',
    'ADDC Workshop — Autonomous Drone Development & Flight Controller Calibration',
    'Bicycle Design Challenge 2025–26 — Volunteer Appreciation Certificate, SAEINDIA Southern Section',
    'PALS Tinkathon 2025–26 — Participation Certificate',
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Let’s build something.',
  body: 'Open to graduate roles, internships and design projects. Tell me what you’re working on and I’ll get back to you quickly.',
  formNote:
    'This form opens your email app with the message ready to send. To collect messages without an email client, connect a free service like Formspree.',
};

export const footer = {
  note: 'Designed and built with React and Vite.',
};
