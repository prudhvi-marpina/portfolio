import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, MapPin } from 'lucide-react';

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const awardsData = [
    {
      title: 'Lars Magnus Ericsson Fellowship',
      organization: 'Ericsson',
      year: '2024',
      description: 'Prestigious fellowship awarded to outstanding graduate students in telecommunications and data science, recognizing academic excellence and research potential.',
      location: 'Dallas, TX',
      significance: 'Highly competitive fellowship supporting advanced research in AI/ML applications'
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
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for academic excellence and professional achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{award.title}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{award.organization}</h4>
                  <p className="text-gray-600 mb-4">{award.description}</p>
                </div>
                <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{award.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{award.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Significance:</h5>
                <p className="text-gray-700">{award.significance}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}