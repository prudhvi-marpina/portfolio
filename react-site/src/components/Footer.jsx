export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--color-border)]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Prudhvi Marpina</h3>
            <p className="text-[var(--color-text-secondary)]">Data Scientist & ML Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/prudhvi-marpina" target="_blank" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/prudhvi-marpina" target="_blank" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="mailto:prudhvi.marpina@utdallas.edu" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
            <a href="tel:+14254635402" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">
              <i className="fas fa-phone fa-lg"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-[var(--color-text-secondary)] text-sm">
            © {new Date().getFullYear()} Prudhvi Marpina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
