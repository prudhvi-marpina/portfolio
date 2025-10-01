export default function Hero() {
  return (
    <section id="hero" className="py-16 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-2/3">
          <div className="mb-4">
            <span className="achievement-badge">Open to Opportunities</span>
          </div>
          
          <h1 className="hero-title mb-6">
            Data Scientist & ML Engineer<br />
            <span className="text-gradient">Building Intelligent Solutions</span>
          </h1>
          
          <p className="text-lg text-[var(--color-text-secondary)] mb-6 max-w-2xl leading-relaxed">
            I build data systems that actually work in production. Over 4 years, I've shipped ML models that drive real business decisions - from churn prediction that saved millions to recommendation engines that boosted engagement by 20%. My sweet spot? Taking messy data and turning it into clean, scalable pipelines that teams can actually use.
          </p>
          
          {/* Professional Key Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <div className="stat-number">4+</div>
              <div className="text-xs text-[var(--color-text-secondary)]">Years Experience</div>
            </div>
            <div>
              <div className="stat-number">10+</div>
              <div className="text-xs text-[var(--color-text-secondary)]">Technical Projects</div>
            </div>
            <div>
              <div className="stat-number">95%</div>
              <div className="text-xs text-[var(--color-text-secondary)]">System Reliability</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://github.com/prudhvi-marpina" target="_blank" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/prudhvi-marpina" target="_blank" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="tel:+14254635402" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">
              <i className="fas fa-phone fa-2x"></i>
            </a>
            <a href="/Prudhvi_Marpina_Data_Scientist_Resume.pdf" target="_blank" className="btn-primary inline-flex items-center">
              <i className="fas fa-download mr-2"></i>Download Resume
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <img src="/Profile.JPG" alt="Prudhvi Marpina" className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-[var(--color-border)]" />
        </div>
      </div>
    </section>
  );
}