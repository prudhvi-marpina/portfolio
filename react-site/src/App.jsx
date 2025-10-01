import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen">
      <Navbar />
      <main className="container mx-auto px-8 py-12">
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Experience />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Education />
      </main>
      <Footer />
    </div>
  )
}
