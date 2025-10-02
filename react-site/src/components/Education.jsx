import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'Master of Science in Data Science',
      school: 'The University of Texas at Dallas',
      location: 'Dallas, TX',
      period: 'Aug 2023 - May 2025',
      gpa: '3.8/4.0',
      relevantCourses: [
        'Machine Learning',
        'Deep Learning',
        'Statistical Methods',
        'Data Mining',
        'Big Data Analytics',
        'Database Systems'
      ],
      achievements: [
        'Lars Magnus Ericsson Fellowship Recipient',
        'Dean\'s List for Academic Excellence',
        'Research Assistant in AI/ML Lab'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'BITS Pilani',
      location: 'Pilani, India',
      period: 'Aug 2015 - May 2019',
      gpa: '8.2/10',
      relevantCourses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Artificial Intelligence'
      ],
      achievements: [
        'First Class with Distinction',
        'Active member of Computer Science Society',
        'Participated in multiple hackathons and coding competitions'
      ]
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
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science and data science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{edu.school}</h4>
                </div>
                <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}