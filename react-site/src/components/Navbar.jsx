import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-wide">PRUDHVI MARPINA</a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-[var(--color-accent-blue)] transition-colors">About</a>
          <a href="#experience" className="hover:text-[var(--color-accent-blue)] transition-colors">Experience</a>
          <a href="#skills" className="hover:text-[var(--color-accent-blue)] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[var(--color-accent-blue)] transition-colors">Projects</a>
          <a href="#education" className="hover:text-[var(--color-accent-blue)] transition-colors">Education</a>
          <a href="#awards" className="hover:text-[var(--color-accent-blue)] transition-colors">Awards</a>
          <a href="#certifications" className="hover:text-[var(--color-accent-blue)] transition-colors">Certifications</a>
          <a href="#clubs" className="hover:text-[var(--color-accent-blue)] transition-colors">Clubs</a>
          <a href="#contact" className="hover:text-[var(--color-accent-blue)] transition-colors">Contact</a>
          <a href="/Prudhvi_Marpina_Data_Scientist_Resume.pdf" target="_blank" className="btn-primary">Resume</a>
        </div>
        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-btn" 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 space-y-2 bg-[var(--color-bg-secondary)] rounded-lg p-4`}>
        <a href="#about" className="block hover:text-[var(--color-accent-blue)] transition-colors">About</a>
        <a href="#experience" className="block hover:text-[var(--color-accent-blue)] transition-colors">Experience</a>
        <a href="#skills" className="block hover:text-[var(--color-accent-blue)] transition-colors">Skills</a>
        <a href="#projects" className="block hover:text-[var(--color-accent-blue)] transition-colors">Projects</a>
        <a href="#education" className="block hover:text-[var(--color-accent-blue)] transition-colors">Education</a>
        <a href="#awards" className="block hover:text-[var(--color-accent-blue)] transition-colors">Awards</a>
        <a href="#certifications" className="block hover:text-[var(--color-accent-blue)] transition-colors">Certifications</a>
        <a href="#clubs" className="block hover:text-[var(--color-accent-blue)] transition-colors">Clubs</a>
        <a href="#contact" className="block hover:text-[var(--color-accent-blue)] transition-colors">Contact</a>
        <a href="/Prudhvi_Marpina_Data_Scientist_Resume.pdf" target="_blank" className="block btn-primary text-center">Resume</a>
      </div>
    </nav>
  );
}
