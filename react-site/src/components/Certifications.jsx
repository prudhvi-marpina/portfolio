import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Brain, Shield, Database, Calendar } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificationsData = [
    {
      title: "Applied LLM and AI Agent Engineering",
      description: "Gained expertise in advanced AI, specializing in LLMs, RAG, and Agentic AI. Built solutions using Google Gemini API and LangChain for robust RAG with embeddings and vector stores. Skilled in creating AI agents with function calling, LangGraph, prompt engineering, fine-tuning, and guardrails for reliable results.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      issuer: "Google Cloud",
      year: "2024"
    },
    {
      title: "AI Data Engineering Specialization",
      description: "Gained hands-on experience in the data engineering lifecycle including ingestion, storage, transformation, and serving using Apache Spark, Airflow, Kafka, dbt, and AWS to build scalable data systems.",
      icon: Database,
      color: "from-green-500 to-teal-500",
      issuer: "Coursera",
      year: "2023"
    },
    {
      title: "SnowPro Associate: Platform Certification",
      description: "Demonstrated expertise in Snowflake Data Cloud architecture, data loading, performance optimization, security, and governance across the platform.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      issuer: "Snowflake",
      year: "2023"
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
      className="py-20 bg-white"
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
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in cutting-edge technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <span className="font-semibold">{cert.issuer}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}