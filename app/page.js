import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certificates from '@/components/Certificates';
import Blogs from '@/components/Blogs';
import Game from '@/components/Game';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Portfolio />
      <Experience />
      <Education />
      <Certificates />
      <Blogs />
      <Game />
      <Contact />
    </main>
  );
}
