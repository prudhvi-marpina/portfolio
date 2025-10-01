export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Technical Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Agentic BI Project */}
        <div className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-[var(--color-accent-blue)]">Agentic BI: Conversational Data Analysis</h3>
            <span className="achievement-badge">Featured</span>
          </div>
          
          <div className="mb-4">
            <img src="/agentic-bi-architecture.png" 
                 alt="Agentic BI Architecture - LangChain Agents with Mistral AI" 
                 className="w-full h-auto max-h-64 object-contain rounded-lg mb-4"
                 style={{border: '1px solid #475569'}} />
          </div>
          
          <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
            Developed a conversational business intelligence system using LangChain agents and Mistral AI. The system automatically converts natural language queries to SQL, generates interactive Plotly visualizations, and provides AI-powered insights. Built with Streamlit for seamless user experience.
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] p-3 rounded text-center">
              <div className="text-white font-semibold text-sm">100%</div>
              <div className="text-xs text-blue-100">Automated</div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] p-3 rounded text-center">
              <div className="text-white font-semibold text-sm">3 Agents</div>
              <div className="text-xs text-purple-100">Specialized</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">LangChain</span>
            <span className="skill-tag">Mistral AI</span>
            <span className="skill-tag">Streamlit</span>
            <span className="skill-tag">Plotly</span>
            <span className="skill-tag">SQLite</span>
          </div>
          
          <a href="https://github.com/prudhvi-marpina/agentic_bi_project" target="_blank" className="text-[var(--color-accent-blue)] hover:underline">
            <i className="fab fa-github mr-2"></i>View on GitHub
          </a>
        </div>

        {/* UTDIGI Chatbot */}
        <div className="card p-6">
          <h3 className="text-xl font-bold text-[var(--color-accent-blue)] mb-2">UTDIGI - University Chatbot</h3>
          
          <div className="mb-4">
            <img src="/utdigi.png" 
                 alt="UTDIGI University Chatbot - RAG System with LangChain" 
                 className="w-full h-auto max-h-64 object-contain rounded-lg mb-4" />
          </div>
          
          <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
            Built a RAG-powered chatbot using LangChain and Sentence Transformers. Implemented web scraping with Scrapy and Playwright to extract university content. Created FastAPI backend with Redis caching and Streamlit frontend for real-time conversations.
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gradient-to-br from-[var(--color-accent-green)] to-[var(--color-accent-cyan)] p-3 rounded text-center">
              <div className="text-white font-semibold text-sm">3,000+</div>
              <div className="text-xs text-green-100">Documents</div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-accent-orange)] to-[var(--color-accent-yellow)] p-3 rounded text-center">
              <div className="text-white font-semibold text-sm">25%</div>
              <div className="text-xs text-orange-100">Relevance Boost</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">LangChain</span>
            <span className="skill-tag">FastAPI</span>
            <span className="skill-tag">ChromaDB</span>
            <span className="skill-tag">Streamlit</span>
            <span className="skill-tag">Scrapy</span>
            <span className="skill-tag">Redis</span>
          </div>
          
          <a href="https://github.com/prudhvi-marpina/utdigi-chatbot" target="_blank" className="text-[var(--color-accent-blue)] hover:underline">
            <i className="fab fa-github mr-2"></i>View on GitHub
          </a>
        </div>

        {/* Market Optimization */}
        <div className="card p-6">
          <h3 className="text-xl font-bold text-[var(--color-accent-blue)] mb-2">Market Optimization for Gardein</h3>
          
          <div className="mb-4">
            <img src="/garden.png" 
                 alt="Market Optimization for Gardein - ML-Driven Business Analytics" 
                 className="w-full h-auto max-h-64 object-contain rounded-lg mb-4" />
          </div>
          
          <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
            Conducted comprehensive market analysis using Scikit-learn clustering and regression algorithms. Analyzed 3 years of sales data to identify $10M+ revenue opportunities. Created interactive visualizations with Pandas, Matplotlib, and Seaborn for regional market segmentation.
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[var(--color-bg-tertiary)] p-2 rounded text-center">
              <div className="text-[var(--color-accent-blue)] font-semibold text-sm">$10M+</div>
              <div className="text-xs text-[var(--color-text-secondary)]">Revenue Impact</div>
            </div>
            <div className="bg-[var(--color-bg-tertiary)] p-2 rounded text-center">
              <div className="text-[var(--color-accent-green)] font-semibold text-sm">3 Years</div>
              <div className="text-xs text-[var(--color-text-secondary)]">Data Analysis</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Scikit-learn</span>
            <span className="skill-tag">Pandas</span>
            <span className="skill-tag">Matplotlib</span>
            <span className="skill-tag">Seaborn</span>
            <span className="skill-tag">Clustering</span>
          </div>
          
          <a href="https://github.com/prudhvi-marpina/market-optimization" target="_blank" className="text-[var(--color-accent-blue)] hover:underline">
            <i className="fab fa-github mr-2"></i>View on GitHub
          </a>
        </div>

        {/* Sentiment Analysis */}
        <div className="card p-6">
          <h3 className="text-xl font-bold text-[var(--color-accent-blue)] mb-2">Sentiment Analysis Dashboard</h3>
          
          <div className="mb-4">
            <img src="/sentiment.png" 
                 alt="Sentiment Analysis Dashboard - Real-time Social Media Analytics" 
                 className="w-full h-auto max-h-64 object-contain rounded-lg mb-4" />
          </div>
          
          <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
            Developed a comprehensive sentiment analysis platform that processes social media data in real-time, providing actionable insights through interactive dashboards. Built with React, D3.js, and FastAPI for scalable data processing.
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] p-3 rounded text-center">
              <div className="text-white font-semibold text-sm">87%</div>
              <div className="text-xs text-blue-100">Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-accent-green)] to-[var(--color-accent-cyan)] p-3 rounded text-center">
              <div className="text-white font-semibold text-sm">10K</div>
              <div className="text-xs text-green-100">Posts/Day</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">D3.js</span>
            <span className="skill-tag">FastAPI</span>
            <span className="skill-tag">NLTK</span>
            <span className="skill-tag">Transformers</span>
          </div>
          
          <a href="https://github.com/prudhvi-marpina/sentiment-analysis" target="_blank" className="text-[var(--color-accent-blue)] hover:underline">
            <i className="fab fa-github mr-2"></i>View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}