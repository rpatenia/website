import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GitCommitIcon,
  FolderGitIcon,
  FileTextIcon,
  AwardIcon } from
'lucide-react';
const stats = [
{
  icon: GitCommitIcon,
  value: 500,
  suffix: '+',
  label: 'GitHub Commits',
  color: 'neonBlue'
},
{
  icon: FolderGitIcon,
  value: 15,
  suffix: '+',
  label: 'Projects Completed',
  color: 'neonPurple'
},
{
  icon: FileTextIcon,
  value: 3,
  suffix: '',
  label: 'Research Papers',
  color: 'neonCyan'
},
{
  icon: AwardIcon,
  value: 5,
  suffix: '',
  label: 'Certifications',
  color: 'neonBlue'
}];

function CountUpAnimation({
  end,
  duration = 2000



}: {end: number;duration?: number;}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);
  return <span ref={ref}>{count}</span>;
}
export function StatsSection() {
  return (
    <section className="relative py-20 bg-dark-800">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            whileHover={{
              scale: 1.05,
              y: -5
            }}
            className="glass rounded-lg p-6 border border-neonBlue/20 hover:border-neonBlue/40 transition-all text-center group">
            
              <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/10 mb-4 group-hover:animate-glow-pulse`}>
              
                <stat.icon className={`text-${stat.color}`} size={32} />
              </div>
              <div
              className={`text-4xl md:text-5xl font-bold text-${stat.color} mb-2 neon-glow`}>
              
                <CountUpAnimation end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}