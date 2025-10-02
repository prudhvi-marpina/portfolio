import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Brain, BarChart, Settings } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming & Software Engineering',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      skills: [
        { name: 'Languages', items: 'Python, TypeScript, React, Node.js, Java, C++, SQL, R' },
        { name: 'Frameworks & APIs', items: 'FastAPI, REST APIs, GitHub, GitHub Actions, CI/CD, Plotly/Dash' },
        { name: 'Development Tools', items: 'Git, Docker, VS Code, Jupyter, Postman, Swagger' }
      ]
    },
    {
      title: 'Data Science & Machine Learning',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      skills: [
        { name: 'ML Libraries', items: 'Scikit-learn, PyTorch, TensorFlow, XGBoost, Pandas, NumPy' },
        { name: 'Data Processing', items: 'Apache Spark, Apache Airflow, Kafka, dbt, Apache Beam' },
        { name: 'Visualization', items: 'Matplotlib, Seaborn, Plotly, Tableau, Power BI, Streamlit' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      skills: [
        { name: 'Cloud Platforms', items: 'AWS (Lambda, S3, EC2, RDS), GCP (BigQuery, Cloud Functions), Azure' },
        { name: 'Data Storage', items: 'MongoDB, PostgreSQL, MySQL, Redis, Elasticsearch, Snowflake' },
        { name: 'DevOps', items: 'Docker, Kubernetes, Terraform, Jenkins, CI/CD Pipelines' }
      ]
    },
    {
      title: 'AI & Advanced Analytics',
      icon: BarChart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      skills: [
        { name: 'AI/ML Frameworks', items: 'LangChain, OpenAI GPT, Hugging Face, Transformers, BERT' },
        { name: 'Analytics', items: 'Statistical Analysis, A/B Testing, Time Series, Forecasting' },
        { name: 'Specialized Tools', items: 'Apache Kafka, Apache Airflow, MLflow, Weights & Biases' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skills across the full data science and software engineering stack
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
                    <p className="text-sm text-gray-600">{skill.items}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}