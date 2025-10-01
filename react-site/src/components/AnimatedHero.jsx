import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactTyped from 'react-typed';
import { Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

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
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full opacity-40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-50"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/90">Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Prudhvi Marpina
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl lg:text-3xl mb-8 h-16 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <ReactTyped
                strings={[
                  'Data Scientist',
                  'ML Engineer',
                  'Full-Stack Developer',
                  'AI Researcher',
                  'Problem Solver'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-white/90"
              />
            </motion.div>

            <motion.p
              className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I build intelligent systems that transform data into actionable insights. 
              Specializing in machine learning, full-stack development, and creating 
              scalable solutions that drive real business impact.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">4+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-white/60">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">95%</div>
                <div className="text-sm text-white/60">Success Rate</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="/Prudhvi_Marpina_Data_Scientist_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/prudhvi-marpina"
                target="_blank"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/prudhvi-marpina"
                target="_blank"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="mailto:prudhvi.marpina@utdallas.edu"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Profile */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-80 h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              
              {/* Profile Image */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="/Profile.JPG"
                  alt="Prudhvi Marpina"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
