import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Zap, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Agentic BI Architecture',
    description: 'Conversational AI system that transforms natural language into SQL queries and interactive visualizations.',
    image: '/agentic-bi-architecture.png',
    tags: ['LangChain', 'Mistral AI', 'Streamlit', 'Plotly'],
    metrics: { automation: '100%', agents: '3', accuracy: '92%' },
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/prudhvi-marpina/agentic_bi_project',
    featured: true
  },
  {
    id: 2,
    title: 'UTDIGI University Chatbot',
    description: 'RAG-powered chatbot with 3000+ documents, providing intelligent university information retrieval.',
    image: '/utdigi.png',
    tags: ['LangChain', 'FastAPI', 'ChromaDB', 'Redis'],
    metrics: { documents: '3K+', relevance: '25%', speed: '2.5s' },
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/prudhvi-marpina/utdigi-chatbot'
  },
  {
    id: 3,
    title: 'Fraud Detection System',
    description: 'ML-powered fraud detection with real-time monitoring and 94% precision rate.',
    image: '/fraud.png',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Flask'],
    metrics: { precision: '94%', recall: '89%', f1: '91%' },
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com/prudhvi-marpina/fraud-detection'
  },
  {
    id: 4,
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time sentiment analysis platform processing 10K+ posts daily with interactive visualizations.',
    image: '/sentiment.png',
    tags: ['React', 'D3.js', 'FastAPI', 'NLTK'],
    metrics: { accuracy: '87%', volume: '10K/day', speed: '2.5s' },
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/prudhvi-marpina/sentiment-analysis'
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Innovative solutions that showcase my expertise in AI, machine learning, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4" />
                      Featured
                    </motion.div>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={key}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: metricIndex * 0.1 }}
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-white/60 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
