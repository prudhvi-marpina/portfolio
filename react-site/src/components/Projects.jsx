const projectsData = [
  {
    title: 'Agentic BI Architecture',
    image: '/agentic-bi-architecture.png',
    description: 'Conceptual architecture for agentic business intelligence workflows',
    metrics: [
      { label: 'Automation', value: '85%' },
      { label: 'Efficiency', value: '3x' },
      { label: 'Accuracy', value: '92%' }
    ],
    skills: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'Streamlit', 'AWS'],
    description_long: 'Designed and implemented an agentic BI system that automates data analysis workflows using LLM agents. The system can autonomously generate insights, create visualizations, and provide business recommendations.'
  },
  {
    title: 'Fraud Detection System',
    image: '/fraud.png',
    description: 'ML-powered fraud detection with real-time monitoring',
    metrics: [
      { label: 'Precision', value: '94%' },
      { label: 'Recall', value: '89%' },
      { label: 'False Positives', value: '2.1%' }
    ],
    skills: ['Python', 'Scikit-learn', 'XGBoost', 'Flask', 'PostgreSQL', 'Docker'],
    description_long: 'Built an end-to-end fraud detection system processing 100K+ transactions daily. Implemented ensemble methods and real-time scoring with 94% precision and 89% recall.'
  },
  {
    title: 'Sentiment Analysis Dashboard',
    image: '/sentiment.png',
    description: 'Real-time sentiment analysis and reporting platform',
    metrics: [
      { label: 'Processing Speed', value: '2.5s' },
      { label: 'Accuracy', value: '87%' },
      { label: 'Volume', value: '10K/day' }
    ],
    skills: ['Python', 'NLTK', 'Transformers', 'React', 'D3.js', 'FastAPI'],
    description_long: 'Developed a comprehensive sentiment analysis platform that processes social media data in real-time, providing actionable insights through interactive dashboards.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div key={index} className="card p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Project Image */}
              <div className="lg:w-1/3">
                <div className="aspect-video bg-[var(--color-bg-tertiary)] rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Project Details */}
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-[var(--color-accent-blue)] mb-2">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">{project.description_long}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="stat-number">{metric.value}</div>
                      <div className="text-xs text-[var(--color-text-secondary)]">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a href="#" className="btn-primary">
                    <i className="fas fa-external-link-alt mr-2"></i>View Project
                  </a>
                  <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}