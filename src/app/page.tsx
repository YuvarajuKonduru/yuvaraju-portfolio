import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'; 
import Skills from './components/Skills'
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuvaraju Konduru",
    url: "https://yuvarajuk.vercel.app",
    image: "https://yuvarajuk.vercel.app/yuvi.jpg",
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Comcast",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MongoDB",
      "Full Stack Development",
    ],
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
