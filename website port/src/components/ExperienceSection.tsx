import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AwardIcon, ExternalLinkIcon } from 'lucide-react';

interface ExperienceItem {
  id: number;
  type: 'work' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string[];
  icon: typeof BriefcaseIcon;
  image: string;
  link: string;
  featured?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'Coursera Certificate',
    title: 'Big Data, Artificial Intelligence, and Ethics',
    organization: 'University of California, Davis',
    period: 'Grade Achieved: 90.83%',
    description: [
      'How the massive scale of Big Data fuels Artificial Intelligence, while investigating the critical ethical frameworks needed to prevent bias and protect privacy'
    ],
    icon: AwardIcon,
    image: 'public/coursera1.png', // Replace with your image
    link: 'https://coursera.org/share/b79e6f71802e21dc99705fdb93ca8c35', // Add your actual links here
    featured: true 
  },
  {
    id: 2,
    type: 'work',
    title: 'Software Development Processes and Methodologies',
    organization: 'University of Minnesota',
    period: 'Grade Achieved: 97.90%',
    description: [
      'Demonstrates a strong mastery of both the technical frameworks governing software production and the critical ethical considerations of modern data science.'
    ],
    icon: AwardIcon,
    image: 'public/coursera2.png', // Replace with your image
    link: 'https://coursera.org/share/eb489b77465994d4ccd1e1e266badf9d'
  },
  {
    id: 3,
    type: 'certification',
    title: 'Numerical Methods for Engineers',
    organization: 'The Hong Kong University of Science and Technology',
    period: 'Grade Achieved: 100%',
    description: [
      'Integration methods such as adaptive quadrature, and interpolation algorithms using a cubic spline'
    ],
    icon: AwardIcon,
    image: 'public/coursera3.png',
    link: 'https://coursera.org/share/85f680489d4359c79738c4ea9f24b756'
  },
  {
    id: 4,
    type: 'certification',
    title: 'Search Engines for Web and Enterprise Data',
    organization: 'The Hong Kong University of Science and Technology',
    period: 'Grade Achieved: 97.91%',
    description: [
      'Covers the end-to-end process of how data is indexed, ranked, and retrieved for both the open web and private corporate environments.'
    ],
    icon: AwardIcon,
    image: 'public/coursera4.png',
    link: 'https://coursera.org/share/baf8665ac43dbfac5650615f1fe48238'
  },
  {
    id: 5,
    type: 'certification',
    title: 'Artificial Intelligence: Ethics & Societal Challenges',
    organization: 'Lund University',
    period: 'Grade Achieved: 100%',
    description: [
      'deep exploration of the philosophical, legal, and social dimensions of AI.'
    ],
    icon: AwardIcon,
    image: 'public/coursera5.png',
    link: 'https://coursera.org/share/b8f847411e932b1e49a58abadc1aeec1'
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 bg-dark-900">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Changed max-w-7xl to max-w-5xl for a more compact center column */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-glow text-neonCyan">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-full" />
        </motion.div>

        {/* Experience Grid - Reduced gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <motion.a // Changed from motion.div to motion.a to make the whole box clickable
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-xl overflow-hidden border border-neonBlue/20 hover:border-neonBlue/50 transition-all group flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-neonBlue/10 ${
                exp.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image Container - Reduced Heights */}
              <div className={`relative overflow-hidden ${exp.featured ? 'h-48 md:h-56' : 'h-36 md:h-48'}`}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />
              </div>

              {/* Content Container - Reduced Padding */}
              <div className="p-4 md:p-5 flex flex-col flex-grow bg-[#0a0a0f]/80">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`p-1.5 rounded-lg mt-0.5 ${exp.type === 'work' ? 'bg-neonBlue/10 text-neonBlue' : 'bg-neonPurple/10 text-neonPurple'}`}>
                    <exp.icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-neonBlue transition-colors leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-neonCyan text-xs font-medium mt-1">
                      {exp.organization}
                    </p>
                    <p className="text-gray-500 text-[10px] font-mono mt-0.5">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Bullet Points - Tighter spacing and smaller text */}
                <ul className="space-y-1.5 mb-4 flex-grow mt-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-xs flex items-start leading-snug">
                      <span className="text-neonPurple mr-2 mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Visual Link Footer - (Now a div instead of an 'a' tag) */}
                <div className="mt-auto pt-3 border-t border-gray-800/50">
                  <div className="inline-flex items-center text-rose-400 group-hover:text-rose-300 transition-colors text-xs font-bold tracking-wide">
                    <ExternalLinkIcon size={14} className="mr-2" />
                    {exp.type === 'certification' ? 'View Certificate' : 'View Details'}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}