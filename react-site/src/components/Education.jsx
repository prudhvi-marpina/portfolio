const educationData = [
  {
    degree: 'Master of Science in Data Science',
    school: 'The University of Texas at Dallas',
    location: 'Dallas, USA',
    period: 'Aug 2022 – May 2024',
    gpa: '3.8/4.0',
    description: 'Specialized coursework in machine learning, statistics, and data engineering',
    relevant_courses: [
      'Machine Learning', 'Statistical Methods', 'Data Mining', 'Big Data Analytics', 
      'Database Systems', 'Data Visualization', 'Deep Learning', 'Time Series Analysis'
    ]
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Jawaharlal Nehru Technological University',
    location: 'Hyderabad, India',
    period: 'Aug 2015 – May 2019',
    gpa: '3.6/4.0',
    description: 'Comprehensive computer science foundation with focus on software engineering',
    relevant_courses: [
      'Data Structures & Algorithms', 'Database Management', 'Software Engineering', 
      'Computer Networks', 'Operating Systems', 'Object-Oriented Programming'
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="card p-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-accent-blue)]">{edu.degree}</h3>
                <p className="text-lg text-[var(--color-text-secondary)]">{edu.school}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{edu.location}</p>
              </div>
              <div className="text-right">
                <span className="text-sm bg-[var(--color-accent-green)] text-white px-2 py-1 rounded">{edu.period}</span>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">GPA: {edu.gpa}</p>
              </div>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">{edu.description}</p>
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-accent-blue)] mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {edu.relevant_courses.map((course, courseIndex) => (
                  <span key={courseIndex} className="skill-tag text-xs">{course}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
