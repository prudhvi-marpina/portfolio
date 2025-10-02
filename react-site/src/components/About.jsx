import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Target, Award, Database, Code, Brain, Sparkles } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: TrendingUp, value: "25%", label: "Faster Reporting", color: "from-blue-500 to-cyan-500" },
    { icon: Target, value: "30%", label: "Fewer Failures", color: "from-green-500 to-emerald-500" },
    { icon: Award, value: "12%", label: "Engagement Boost", color: "from-purple-500 to-pink-500" },
    { icon: Database, value: "95%", label: "System Reliability", color: "from-orange-500 to-red-500" },
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        duration: 1,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-32 bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-100"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          variants={itemVariants}
        >
          <h2 className="text-6xl lg:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Transforming complex data challenges into elegant, scalable solutions that drive real business impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Modern Profile Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative">
              {/* Modern glow effects */}
              <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl"></div>
              
              {/* Modern image container */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-2xl">
                <img
                  src="/Profile.JPG"
                  alt="Prudhvi Marpina"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
              </div>
              
              {/* Modern floating badges */}
              <motion.div
                className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl flex items-center gap-2"
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="w-4 h-4" />
                Developer
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl flex items-center gap-2"
                animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <Database className="w-4 h-4" />
                Data Expert
              </motion.div>
            </div>
          </motion.div>

          {/* Modern Content */}
          <motion.div
            className="space-y-10"
            variants={itemVariants}
          >
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                I build data systems that drive business decisions. 4+ years of experience delivering end-to-end solutions across Python, React, cloud platforms, and ML frameworks. I turn complex problems into scalable systems that serve thousands of users.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Full-stack technical leader: from data pipelines processing millions of records to ML models in production, from React dashboards to cloud architecture on AWS/GCP/Azure. I speak both technical and business languages fluently.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Proven results: 25% faster reporting, 30% fewer failures, 12% engagement boost, 95% system reliability. I deliver measurable impact across data science, software engineering, and product roles.
              </p>
            </div>

            {/* Modern Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 text-center hover:bg-white transition-all duration-500 shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Modern Skills Preview */}
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-gray-200 rounded-3xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-blue-600" />
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-4">
                {['Python', 'React', 'Machine Learning', 'AWS', 'SQL', 'Data Science', 'AI/ML', 'Cloud Architecture'].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-6 py-3 bg-white/80 backdrop-blur-xl text-gray-700 rounded-xl text-sm font-medium border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}