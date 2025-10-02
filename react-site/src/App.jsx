import ModernNavbar from './components/ModernNavbar.jsx'
import AnimatedHero from './components/AnimatedHero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import AnimatedProjects from './components/AnimatedProjects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Awards from './components/Awards.jsx'
import Certifications from './components/Certifications.jsx'
import Clubs from './components/Clubs.jsx'
import ContactForm from './components/ContactForm.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ModernNavbar />
      <AnimatedHero />
      <About />
      <Experience />
      <AnimatedProjects />
      <Skills />
      <Education />
      <Awards />
      <Certifications />
      <Clubs />
      <ContactForm />
    </div>
  )
}