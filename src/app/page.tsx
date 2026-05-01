import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'; 
import Skills from './components/Skills'
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
