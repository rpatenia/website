import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface Skill {
  name: string;
  level: number;
}
interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}
const skillCategories: SkillCategory[] = [
{
  title: 'Programming Languages',
  color: 'neonBlue',
  skills: [
  {
    name: 'Python',
    level: 95
  },
  {
    name: 'JavaScript',
    level: 88
  },
  {
    name: 'TypeScript',
    level: 82
  },
  {
    name: 'C++',
    level: 75
  },
  {
    name: 'SQL',
    level: 80
  }]

},
{
  title: 'Frameworks & Libraries',
  color: 'neonPurple',
  skills: [
  {
    name: 'React',
    level: 90
  },
  {
    name: 'TensorFlow',
    level: 88
  },
  {
    name: 'PyTorch',
    level: 85
  },
  {
    name: 'Node.js',
    level: 80
  },
  {
    name: 'Flask',
    level: 78
  }]

},
{
  title: 'Tools & Platforms',
  color: 'neonCyan',
  skills: [
  {
    name: 'Git',
    level: 92
  },
  {
    name: 'Docker',
    level: 78
  },
  {
    name: 'AWS',
    level: 72
  },
  {
    name: 'Linux',
    level: 85
  },
  {
    name: 'Jupyter',
    level: 90
  }]

},
{
  title: 'AI/ML',
  color: 'neonBlue',
  skills: [
  {
    name: 'Deep Learning',
    level: 88
  },
  {
    name: 'NLP',
    level: 85
  },
  {
    name: 'Computer Vision',
    level: 82
  },
  {
    name: 'Data Analysis',
    level: 90
  },
  {
    name: 'MLOps',
    level: 75
  }]

}];

function SkillBar({
  skill,
  color,
  delay




}: {skill: Skill;color: string;delay: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
        <span className={`text-${color} text-sm font-mono`}>
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{
            width: 0
          }}
          animate={
          isInView ?
          {
            width: `${skill.level}%`
          } :
          {
            width: 0
          }
          }
          transition={{
            duration: 1,
            delay,
            ease: 'easeOut'
          }}
          className={`h-full bg-gradient-to-r from-${color} to-${color} rounded-full relative`}
          style={{
            boxShadow: `0 0 10px rgba(0, 212, 255, 0.5)`
          }}>
          
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </div>);

}
export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 bg-dark-800">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="neon-glow-purple">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonCyan rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) =>
          <motion.div
            key={categoryIndex}
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
              duration: 0.6,
              delay: categoryIndex * 0.1
            }}
            className="glass rounded-lg p-6 border border-neonBlue/20 hover:border-neonBlue/40 transition-all">
            
              <h3 className={`text-xl font-bold text-${category.color} mb-6`}>
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) =>
              <SkillBar
                key={skillIndex}
                skill={skill}
                color={category.color}
                delay={categoryIndex * 0.1 + skillIndex * 0.05} />

              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}