const skillsData = {
  'Programming & Software Engineering': [
    'Python', 'R', 'SQL', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'Docker'
  ],
  'Data Science & Machine Learning': [
    'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'LightGBM', 'Statsmodels', 'Matplotlib'
  ],
  'Cloud & DevOps': [
    'AWS', 'GCP', 'Azure', 'Kubernetes', 'Apache Airflow', 'Jenkins', 'Terraform', 'Docker', 'CI/CD', 'Monitoring'
  ],
  'Data Engineering & Analytics': [
    'Apache Spark', 'Apache Kafka', 'Apache Airflow', 'BigQuery', 'Snowflake', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'
  ],
  'Business Intelligence & Visualization': [
    'Tableau', 'Power BI', 'D3.js', 'Plotly', 'Streamlit', 'Dash', 'Grafana', 'Kibana', 'Jupyter', 'R Shiny'
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Skills</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div key={categoryIndex} className="card p-6">
              <h3 className="text-xl font-bold text-[var(--color-accent-blue)] mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
