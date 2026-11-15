import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Achievements />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
