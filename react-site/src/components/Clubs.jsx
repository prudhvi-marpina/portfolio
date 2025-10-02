import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Cloud, Heart } from 'lucide-react';

export default function Clubs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clubsData = [
    {
      name: 'Envision',
      organization: 'Data Visualization Club, UT Dallas',
      description: 'Participated in data hackathons, visualization challenges, and technical events focused on Power BI, Tableau, and storytelling with data.',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'AWS Club',
      organization: 'UT Dallas',
      description: 'Participated in cloud hackathons, workshops, and certification events focused on AWS technologies and career development.',
      icon: Cloud,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      name: 'Nirmaan',
      organization: 'BITS Pilani Alumni NGO',
      description: 'Contributed to education and community development initiatives as part of a BITS Pilani alumni led NGO focused on inclusive and sustainable social impact.',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
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
            Clubs & Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Active participation in professional and community organizations
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {clubsData.map((club, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${club.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <club.icon className={`w-8 h-8 ${club.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{club.organization}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-center">{club.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}