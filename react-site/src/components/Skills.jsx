export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Skills</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          
          {/* Programming & Software Engineering */}
          <div className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="flex items-center mb-6">
              <i className="fas fa-code text-3xl text-[var(--color-accent-blue)] mr-4"></i>
              <h3 className="text-2xl font-bold text-white">Programming & Software Engineering</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-blue)]">
                <div className="font-semibold text-white mb-1">Languages</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Python, R, SQL, JavaScript, TypeScript, HTML/CSS, Bash</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-purple)]">
                <div className="font-semibold text-white mb-1">Frameworks & Libraries</div>
                <div className="text-sm text-[var(--color-text-secondary)]">React, Node.js, Express, Flask, FastAPI, Django, REST APIs</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-green)]">
                <div className="font-semibold text-white mb-1">Core Concepts</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Data Structures, Algorithms, OOP, System Design, Microservices</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-warning)]">
                <div className="font-semibold text-white mb-1">Data Libraries</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Pandas, NumPy, Scipy, Matplotlib, Seaborn, Scikit-learn</div>
              </div>
            </div>
          </div>

          {/* Cloud & Distributed Systems */}
          <div className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-accent-green)] to-[var(--color-accent-blue)] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="flex items-center mb-6">
              <i className="fas fa-cloud text-3xl text-[var(--color-accent-green)] mr-4"></i>
              <h3 className="text-2xl font-bold text-white">Cloud & Distributed Systems</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-blue)]">
                <div className="font-semibold text-white mb-1">Cloud Platforms</div>
                <div className="text-sm text-[var(--color-text-secondary)]">AWS (Lambda, S3, DynamoDB, ECS, Redshift, SageMaker), GCP (BigQuery), Azure</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-purple)]">
                <div className="font-semibold text-white mb-1">Big Data & Processing</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Apache Spark, PySpark, Kafka, Airflow, Databricks, Snowflake, Hadoop, Hive</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-green)]">
                <div className="font-semibold text-white mb-1">Databases & Storage</div>
                <div className="text-sm text-[var(--color-text-secondary)]">MongoDB, BigQuery, Redis, ChromaDB, PostgreSQL, ETL/ELT</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-warning)]">
                <div className="font-semibold text-white mb-1">DevOps & Infrastructure</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Docker, Kubernetes, Terraform, CI/CD, MLflow, Git, GitHub</div>
              </div>
            </div>
          </div>

          {/* Machine Learning & AI */}
          <div className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-blue)] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="flex items-center mb-6">
              <i className="fas fa-brain text-3xl text-[var(--color-accent-purple)] mr-4"></i>
              <h3 className="text-2xl font-bold text-white">Machine Learning & AI</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-blue)]">
                <div className="font-semibold text-white mb-1">ML Frameworks</div>
                <div className="text-sm text-[var(--color-text-secondary)]">PyTorch, TensorFlow, Scikit-learn, XGBoost, Hyperparameter Tuning, MLflow</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-purple)]">
                <div className="font-semibold text-white mb-1">NLP & LLMs</div>
                <div className="text-sm text-[var(--color-text-secondary)]">spaCy, Hugging Face, Large Language Models, RAG, Generative AI</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-green)]">
                <div className="font-semibold text-white mb-1">Model Deployment</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Model Deployment, Recommendation & Ranking Systems, Model Registry</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-warning)]">
                <div className="font-semibold text-white mb-1">Data Science</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Statistics, Statistical Modeling, EDA, Feature Engineering, A/B Testing</div>
              </div>
            </div>
          </div>

          {/* Data Science & Analytics */}
          <div className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-warning)] to-[var(--color-accent-green)] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="flex items-center mb-6">
              <i className="fas fa-chart-line text-3xl text-[var(--color-warning)] mr-4"></i>
              <h3 className="text-2xl font-bold text-white">Data Science & Analytics</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-blue)]">
                <div className="font-semibold text-white mb-1">Analytics & Visualization</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Statistics, Statistical Modeling, EDA, Feature Engineering, A/B Testing, Causal Inference</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-purple)]">
                <div className="font-semibold text-white mb-1">Tools & Libraries</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Pandas, NumPy, Matplotlib, Tableau, Power BI, Time Series Forecasting</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-accent-green)]">
                <div className="font-semibold text-white mb-1">Business Skills</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Metrics Design, Experimentation, Stakeholder Management, ROI Analysis</div>
              </div>
              <div className="bg-[var(--color-bg-tertiary)] p-3 rounded-lg border-l-4 border-[var(--color-warning)]">
                <div className="font-semibold text-white mb-1">Domain Expertise</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Customer Analytics, Fraud Detection, Supply Chain, Time Series, Recommendation Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
