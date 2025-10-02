import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceData = [
    {
      company: 'One Community',
      location: 'California, USA',
      period: 'Aug 2025-Present',
      title: 'Software Engineer (Data Focus)',
      description: 'Social Media Analytics & Time Series Forecasting',
      achievements: [
        'Developed a React frontend with Python API integration using OpenAI GPT to automate reporting summaries, reducing manual reporting time by 25% for 1,000+ users.',
        'Created interactive Python dashboards using Plotly/Dash to visualize 5,000+ MongoDB time entries, providing managers with insights into keyword frequency and volunteer participation trends.',
        'Implemented A/B testing on automated post scheduling pipelines, achieving a 12% CTR improvement and successfully guiding the rollout of cron-based posting strategies.'
      ],
      skills: ['React', 'Python', 'OpenAI GPT', 'Plotly/Dash', 'MongoDB', 'A/B Testing']
    },
    {
      company: 'Tech Friday',
      location: 'Hyderabad, India',
      period: 'Jun 2021-Jul 2023',
      title: 'Data Scientist',
      description: 'ML Model Development & Data Engineering',
      achievements: [
        'Architected and implemented serverless data ingestion pipelines using Python, AWS Lambda, and S3 to capture transaction data from multiple APIs and databases, achieving over 95% reliability.',
        'Developed PySpark workflows to process, clean, and aggregate millions of transactions into feature tables in BigQuery, reducing data preparation time by 25%.',
        'Deployed machine learning models including logistic regression for churn prediction and k-means clustering for customer segmentation as REST APIs, enabling real-time predictions.',
        'Established automated model retraining pipelines using Apache Airflow with comprehensive DAGs for feature refresh and model updates, implementing robust job monitoring that reduced pipeline failures by 30%.'
      ],
      skills: ['Python', 'AWS Lambda', 'PySpark', 'BigQuery', 'Scikit-learn', 'Apache Airflow', 'REST APIs']
    },
    {
      company: 'Ahlada Engineers Ltd',
      location: 'Hyderabad, India',
      period: 'Jun 2019-May 2021',
      title: 'Data Analyst',
      description: 'Business Intelligence & Data Visualization',
      achievements: [
        'Developed comprehensive business intelligence dashboards using Python, SQL, and Tableau to analyze sales performance, customer behavior, and market trends.',
        'Created automated reporting systems that reduced manual reporting time by 40% and improved data accuracy by 15%.',
        'Conducted statistical analysis and A/B testing to optimize marketing campaigns, resulting in 20% improvement in conversion rates.',
        'Collaborated with cross-functional teams to identify data-driven insights and recommendations for business strategy.'
      ],
      skills: ['Python', 'SQL', 'Tableau', 'Business Intelligence', 'Statistical Analysis', 'A/B Testing']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building impactful solutions across data science, machine learning, and software engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.title}</h4>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                </div>
                <div className="flex flex-col lg:items-end space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}