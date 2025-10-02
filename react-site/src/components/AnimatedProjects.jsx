import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Zap, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Agentic BI: Conversational Data Analysis',
    description: 'Developed a conversational business intelligence system using LangChain agents and Mistral AI. The system automatically converts natural language queries to SQL, generates interactive Plotly visualizations, and provides AI-powered insights. Built with Streamlit for seamless user experience.',
    image: '/agentic-bi-architecture.png',
    tags: ['LangChain', 'Mistral AI', 'Streamlit', 'Plotly', 'SQLite'],
    metrics: { automation: '100%', agents: '3', accuracy: '92%' },
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/prudhvi-marpina/agentic_bi_project',
    featured: true
  },
  {
    id: 2,
    title: 'UTDIGI - University Chatbot',
    description: 'Built a RAG-powered chatbot using LangChain and Sentence Transformers. Implemented web scraping with Scrapy and Playwright to extract university content. Created FastAPI backend with Redis caching and Streamlit frontend for real-time conversations.',
    image: '/utdigi.png',
    tags: ['LangChain', 'FastAPI', 'ChromaDB', 'Streamlit', 'Scrapy', 'Redis'],
    metrics: { documents: '3,000+', relevance: '25%', speed: '2.5s' },
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/prudhvi-marpina/utdigi-chatbot'
  },
  {
    id: 3,
    title: 'Market Optimization for Gardein',
    description: 'Conducted comprehensive market analysis using Scikit-learn clustering and regression algorithms. Analyzed 3 years of sales data to identify $10M+ revenue opportunities. Created interactive visualizations with Pandas, Matplotlib, and Seaborn for regional market segmentation.',
    image: '/garden.png',
    tags: ['Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'SQL'],
    metrics: { revenue: '$10M+', accuracy: '90%', insights: 'Regional' },
    gradient: 'from-green-500 to-teal-500',
    github: 'https://github.com/prudhvi-marpina/Gardein_Market_Optimization'
  },
  {
    id: 4,
    title: 'Fraud Detection in Financial Transactions',
    description: 'Developed a real-time fraud detection system using PySpark and Kafka for streaming data. Implemented machine learning models (XGBoost, Isolation Forest) to identify fraudulent transactions with high accuracy. Integrated with a Flask API for real-time alerts.',
    image: '/fraud.png',
    tags: ['PySpark', 'Kafka', 'XGBoost', 'Flask', 'Docker'],
    metrics: { detection: '98%', latency: '100ms', alerts: 'Real-time' },
    gradient: 'from-red-500 to-orange-500',
    github: 'https://github.com/prudhvi-marpina/Fraud_Detection_Project'
  },
  {
    id: 5,
    title: 'Sentiment Analysis of Product Reviews',
    description: 'Built a sentiment analysis pipeline using NLP techniques (BERT, spaCy) and PyTorch. Processed millions of product reviews to extract sentiment scores and key insights. Developed a dashboard using Dash to visualize trends and customer feedback.',
    image: '/sentiment.png',
    tags: ['BERT', 'PyTorch', 'NLP', 'Dash', 'MongoDB'],
    metrics: { accuracy: '91%', reviews: '1M+', insights: 'Customer' },
    gradient: 'from-yellow-500 to-amber-500',
    github: 'https://github.com/prudhvi-marpina/Sentiment_Analysis_Project'
  },
  {
    id: 6,
    title: 'EduBot: Personalized Learning Assistant',
    description: 'Designed and implemented an AI-powered learning assistant using OpenAI GPT-3.5 and Flask. Provides personalized study recommendations, answers academic questions, and generates quizzes. Integrated with a PostgreSQL database for user progress tracking.',
    image: '/edubot.png',
    tags: ['OpenAI GPT', 'Flask', 'PostgreSQL', 'React', 'LangChain'],
    metrics: { personalization: 'High', engagement: '20%', questions: 'Unlimited' },
    gradient: 'from-indigo-500 to-violet-500',
    github: 'https://github.com/prudhvi-marpina/edubot-ai-assistant'
  }
];

export default function AnimatedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions in data science, machine learning, and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <span key={idx} className="mr-3">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}