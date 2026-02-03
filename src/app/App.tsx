import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Experience } from '@/app/components/Experience';
import { Testimonials } from '@/app/components/Testimonials';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { CursorFollower } from '@/app/components/CursorFollower';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <CursorFollower />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}