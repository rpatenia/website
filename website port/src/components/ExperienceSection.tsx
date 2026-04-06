import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AwardIcon } from 'lucide-react';
interface ExperienceItem {
  type: 'work' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string[];
  icon: typeof BriefcaseIcon;
}
const experiences: ExperienceItem[] = [
{
  type: 'work',
  title: 'ML Engineering Intern',
  organization: 'TechCorp AI',
  period: 'Summer 2024',
  description: [
  'Built a recommendation engine using collaborative filtering and deep learning',
  'Improved model accuracy by 25% through hyperparameter optimization',
  'Deployed models to production using Docker and AWS SageMaker'],

  icon: BriefcaseIcon
},
{
  type: 'work',
  title: 'Research Assistant',
  organization: 'University AI Lab',
  period: '2023-2024',
  description: [
  'Published research paper on transformer architectures for NLP tasks',
  'Conducted experiments on BERT fine-tuning for domain-specific applications',
  'Mentored 5 undergraduate students in machine learning fundamentals'],

  icon: BriefcaseIcon
},
{
  type: 'work',
  title: 'Full-Stack Developer Intern',
  organization: 'StartupXYZ',
  period: 'Summer 2023',
  description: [
  'Built React dashboard serving 10,000+ daily active users',
  'Implemented RESTful APIs using Node.js and MongoDB',
  'Reduced page load time by 40% through code optimization'],

  icon: BriefcaseIcon
},
{
  type: 'certification',
  title: 'Google AI/ML Certificate',
  organization: 'Google',
  period: '2023',
  description: [
  'Completed comprehensive training in machine learning fundamentals',
  'Built end-to-end ML projects using TensorFlow'],

  icon: AwardIcon
},
{
  type: 'certification',
  title: 'AWS Cloud Practitioner',
  organization: 'Amazon Web Services',
  period: '2022',
  description: [
  'Certified in AWS cloud services and architecture',
  'Hands-on experience with EC2, S3, Lambda, and SageMaker'],

  icon: AwardIcon
}];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 bg-dark-900">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-glow">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonBlue via-neonPurple to-neonCyan" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
                {/* Content */}
                <div
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                
                  <div className="glass rounded-lg p-6 border border-neonBlue/20 hover:border-neonBlue/40 transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                      className={`p-3 rounded-lg ${exp.type === 'work' ? 'bg-neonBlue/10' : 'bg-neonPurple/10'}`}>
                      
                        <exp.icon
                        className={
                        exp.type === 'work' ?
                        'text-neonBlue' :
                        'text-neonPurple'
                        }
                        size={24} />
                      
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-neonBlue transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-neonPurple font-semibold">
                          {exp.organization}
                        </p>
                        <p className="text-gray-500 text-sm font-mono">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) =>
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex items-start">
                      
                          <span className="text-neonCyan mr-2">▹</span>
                          <span>{item}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-neonBlue z-10">
                  <div className="absolute inset-0 rounded-full bg-neonBlue animate-ping opacity-75" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}