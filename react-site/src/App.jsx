import ModernNavbar from './components/ModernNavbar.jsx'
import AnimatedHero from './components/AnimatedHero.jsx'
import AnimatedProjects from './components/AnimatedProjects.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <ModernNavbar />
      <AnimatedHero />
      <AnimatedProjects />
    </div>
  )
}
