import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';

export default function AnimatedHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
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
        duration: 1.2,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content */}
          <motion.div className="space-y-12" variants={itemVariants}>
            {/* Modern Status Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full px-6 py-3 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-gray-700 font-semibold text-sm tracking-wide">Available for Opportunities</span>
            </motion.div>

            {/* Modern Typography */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-gray-900">Prudhvi</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Marpina
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl font-light text-gray-600">
                <ReactTyped
                  strings={[
                    'Data Scientist & ML Engineer',
                    'Full-Stack Developer',
                    'AI/ML Specialist',
                    'Building Intelligent Solutions'
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                  className="min-h-[2.5rem] flex items-center"
                />
              </div>
            </motion.div>

            {/* Modern Description */}
            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
              variants={itemVariants}
            >
              I architect intelligent systems that transform raw data into strategic insights. With 4+ years of experience, I've delivered production-ready ML models and scalable data pipelines that drive measurable business impact.
            </motion.p>

            {/* Modern Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">4+</div>
                <div className="text-sm text-gray-500 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-500 font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-600 mb-2">95%</div>
                <div className="text-sm text-gray-500 font-medium">Reliability</div>
              </div>
            </motion.div>

            {/* Modern CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/Prudhvi_Marpina_Data_Scientist_Resume.pdf"
                download
                className="group inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all duration-500 shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-6 h-6" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Modern Social Links */}
            <motion.div
              className="flex gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/prudhvi-marpina"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl text-gray-600 hover:text-blue-600 transition-all duration-500 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prudhvi-marpina"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl text-gray-600 hover:text-blue-600 transition-all duration-500 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:marpina.prudhvi@gmail.com"
                className="group p-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl text-gray-600 hover:text-green-600 transition-all duration-500 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6 group-hover:text-green-600 transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Modern Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Modern glow effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl"></div>
              
              {/* Modern image container */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-4 shadow-2xl">
                <img
                  src="/Profile.JPG"
                  alt="Prudhvi Marpina"
                  className="w-96 h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              {/* Modern floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span className="text-white font-bold text-lg">4+</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}