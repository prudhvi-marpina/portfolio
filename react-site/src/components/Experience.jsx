const experienceData = [
  {
    company: 'One Community',
    location: 'California, USA',
    period: 'Aug 2025-Present',
    title: 'Software Engineer (Data Focus)',
    description: 'Social Media Analytics & Time Series Forecasting',
    achievements: [
      'Developed social media analytics platform processing 1M+ posts daily using Python, React, and AWS.',
      'Built time series forecasting models for engagement prediction with 85% accuracy using Prophet and LSTM.',
      'Created real-time dashboards with React and D3.js, reducing reporting time by 40%.',
      'Implemented automated data pipelines using Apache Airflow, improving data freshness by 60%.'
    ],
    skills: ['Python', 'React', 'AWS', 'Prophet', 'LSTM', 'Apache Airflow', 'D3.js', 'Social Media Analytics']
  },
  {
    company: 'The University of Texas at Dallas',
    location: 'Dallas, USA',
    period: 'Aug 2022 – May 2024',
    title: 'Graduate Teaching Assistant',
    description: 'Data Science Course Support & Student Mentoring',
    achievements: [
      'Supported data science coursework including machine learning, statistics, and programming labs.',
      'Mentored 50+ students in Python, R, SQL, and statistical analysis techniques.',
      'Developed interactive Jupyter notebooks and data exercises to enhance learning outcomes.',
      'Assisted in grading assignments and providing detailed feedback on data science projects.'
    ],
    skills: ['Python', 'R', 'SQL', 'Jupyter', 'Statistics', 'Machine Learning', 'Teaching', 'Mentoring']
  },
  {
    company: 'Ahlada Engineers Ltd',
    location: 'Hyderabad, India',
    period: 'Jun 2019 – May 2021',
    title: 'Data Analyst',
    description: 'ERP Data Analysis & Business Intelligence',
    achievements: [
      'Optimized ERP data extraction processes by developing Python scripts using Pandas and SQL workflows integrated with Tally ERP, reducing monthly report preparation time by 30%.',
      'Implemented automated reporting solutions for receivables and delivery tracking using scheduled Python jobs, decreasing manual processing effort by 40%.',
      'Designed and developed comprehensive Tableau dashboards connected to SQL databases to monitor plant output, material usage, and order fulfillment metrics, reducing reporting cycles from 5 days to 2 days.',
      'Collaborated with supply chain and finance teams to validate ERP data integrity, ensuring consistency and accuracy across 10+ key performance indicators used in monthly business reviews.'
    ],
    skills: ['Python', 'Pandas', 'SQL', 'Tableau', 'Tally ERP', 'Data Validation', 'Business Intelligence']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
      <div className="space-y-12 max-w-5xl mx-auto">
        {experienceData.map((role, index) => (
          <div key={index} className="card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Role Info */}
              <div className="md:w-1/3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[var(--color-accent-blue)]">{role.title}</h3>
                  <span className="text-xs bg-[var(--color-accent-green)] text-white px-2 py-1 rounded">{role.period}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">{role.company} | {role.location}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">{role.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {role.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              {/* Key Achievements */}
              <div className="md:w-2/3">
                <div className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <i className="fas fa-check-circle text-[var(--color-accent-green)] mr-2 mt-1 text-xs"></i>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}