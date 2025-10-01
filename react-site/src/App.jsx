import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'

export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Projects />
      <Experience />
      <div className="mx-auto max-w-6xl px-6">
        <footer className="mt-20 border-t border-neutral-200 pt-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Prudhvi Marpina
        </footer>
      </div>
    </main>
  )
}
