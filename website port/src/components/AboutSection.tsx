import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainIcon,
  CodeIcon,
  DatabaseIcon,
  TrendingUpIcon,
  GraduationCapIcon,
  AwardIcon
} from 'lucide-react';

const timeline = [
  {
    year: '2018-2020',
    title: 'Immaculate Heart of Mary College',
    description: 'Grade School to High School. Developed a strong academic foundation while actively participating in extracurricular activities',
    icon: GraduationCapIcon,
    logo: '/imma.png'
  },
  {
    year: '2020-2024',
    title: 'Mapua University Intramuros',
    description: 'Senior High School - STEM Strand. Focused on advanced coursework in science and mathematics, developing strong analytical and problem-solving skills.',
    icon: GraduationCapIcon,
    logo: '/maps.png' 
  },
  {
    year: '2023',
    title: 'Mapua University Makati',
    description: 'College - BS Computer Science Specializing in Data Science. Currently Building software and applying machine learning to solve complex problems.',
    icon: AwardIcon,
    logo: '/maps.png'
  }
];

const interests = [
  {
    name: 'Artificial Intelligence',
    icon: BrainIcon,
    color: 'neonBlue'
  },
  {
    name: 'Machine Learning',
    icon: TrendingUpIcon,
    color: 'neonPurple'
  },
  {
    name: 'Data Science',
    icon: DatabaseIcon,
    color: 'neonCyan'
  },
  {
    name: 'Full-Stack Development',
    icon: CodeIcon,
    color: 'neonBlue'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-dark-900">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-glow">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-lg p-8 border border-neonBlue/20">
              <h3 className="text-2xl font-bold text-neonBlue mb-4">Who I Am</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I’m a passionate Computer Science student at Mapua University
                  with a deep fascination for artificial intelligence and its
                  potential to transform the world. My journey into Data Science
                  began with a focus on building systems that don't just process
                  information but understand it.
                </p>
                <p>
                  When I'm not training models or debugging code, you'll find me
                  exploring the latest research papers, contributing to
                  open-source projects, or mentoring fellow students in AI/ML
                  fundamentals. I believe in learning by building, and my
                  portfolio reflects that philosophy.
                </p>
                <p className="text-neonPurple font-semibold">
                  My goal: To leverage AI/ML to solve real-world problems and
                  make a meaningful impact on society.
                </p>
              </div>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neonPurple mb-6">
              Education Journey
            </h3>
            <div className="relative">
              {}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonBlue via-neonPurple to-neonCyan" />

              {}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-dark-800 border-2 border-neonBlue flex items-center justify-center z-10">
                      <item.icon size={16} className="text-neonBlue" />
                    </div>

                    {}
                    <motion.div
                      className="glass rounded-lg p-4 border border-neonPurple/20 hover:border-neonPurple/40 transition-colors cursor-pointer overflow-hidden relative"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <p className="text-neonCyan text-sm font-mono mb-2">
                        {item.year}
                      </p>
                      <motion.div
                        variants={{
                          rest: { height: 0, opacity: 0, marginBottom: 0 },
                          hover: { height: 80, opacity: 1, marginBottom: 16 }
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <img
                          src={item.logo}
                          alt={`${item.title} Logo`}
                          className="h-full w-auto object-contain rounded-md"
                        />
                      </motion.div>

                      <h4 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-lg p-6 border border-neonBlue/20 hover:border-neonBlue/40 transition-all text-center group cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${interest.color}/10 mb-4 group-hover:bg-${interest.color}/20 transition-colors`}
                >
                  <interest.icon
                    className={`text-${interest.color}`}
                    size={24}
                  />
                </div>
                <p className="text-white font-semibold text-sm">
                  {interest.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}