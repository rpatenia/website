import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
type ProjectCategory = 'All' | 'AI/ML' | 'Web Dev' | 'Data Science';
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}
const projects: Project[] = [
{
  id: 1,
  title: 'Neural Style Transfer App',
  description:
  'AI-powered application that applies artistic styles to images using deep learning',
  longDescription:
  'Built a full-stack application that leverages convolutional neural networks to transfer artistic styles from famous paintings to user-uploaded images. Implemented using TensorFlow for the ML backend and React for an intuitive user interface. Achieved 95% user satisfaction rate.',
  category: ['AI/ML'],
  techStack: ['Python', 'TensorFlow', 'Flask', 'React', 'Docker'],
  liveUrl: '#',
  githubUrl: '#',
  featured: true
},
{
  id: 2,
  title: 'Sentiment Analysis Dashboard',
  description: 'Real-time sentiment analysis of social media data using BERT',
  category: ['AI/ML', 'Data Science'],
  techStack: ['Python', 'BERT', 'Streamlit', 'Pandas', 'Plotly'],
  liveUrl: '#',
  githubUrl: '#'
},
{
  id: 3,
  title: 'AI-Powered Code Review Bot',
  description:
  'Automated code review system using GPT models and GitHub Actions',
  category: ['AI/ML'],
  techStack: ['Python', 'OpenAI API', 'GitHub Actions', 'FastAPI'],
  liveUrl: '#',
  githubUrl: '#'
},
{
  id: 4,
  title: 'Real-Time Object Detection',
  description:
  'Computer vision system for real-time object detection and tracking',
  category: ['AI/ML'],
  techStack: ['Python', 'YOLO', 'OpenCV', 'TensorFlow'],
  liveUrl: '#',
  githubUrl: '#'
},
{
  id: 5,
  title: 'Full-Stack Task Manager',
  description:
  'Collaborative task management platform with real-time updates',
  category: ['Web Dev'],
  techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
  liveUrl: '#',
  githubUrl: '#'
},
{
  id: 6,
  title: 'Data Visualization Platform',
  description: 'Interactive data visualization tool for complex datasets',
  category: ['Data Science', 'Web Dev'],
  techStack: ['D3.js', 'React', 'Python', 'Pandas', 'PostgreSQL'],
  liveUrl: '#',
  githubUrl: '#'
}];

const categories: ProjectCategory[] = [
'All',
'AI/ML',
'Web Dev',
'Data Science'];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const filteredProjects = projects.filter((project) =>
  activeCategory === 'All' ? true : project.category.includes(activeCategory)
  );
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);
  return (
    <section id="projects" className="relative py-20 bg-dark-900">
      <div className="absolute inset-0 grid-bg opacity-20" />

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
          className="mb-12">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-glow">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
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
            duration: 0.6,
            delay: 0.2
          }}
          className="flex flex-wrap gap-3 mb-12">
          
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="relative px-6 py-2 rounded-lg font-medium transition-all">
            
              <span
              className={`relative z-10 ${activeCategory === category ? 'text-neonBlue' : 'text-gray-400 hover:text-white'}`}>
              
                {category}
              </span>
              {activeCategory === category &&
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-neonBlue/10 rounded-lg border border-neonBlue/30"
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }} />

            }
            </button>
          )}
        </motion.div>

        {/* Featured Project */}
        {featuredProject && activeCategory === 'All' &&
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
          className="mb-12">
          
            <div className="glass rounded-xl p-8 border-2 border-neonBlue/40 hover:border-neonBlue/60 transition-all group relative overflow-hidden">
              <div className="absolute top-4 right-4 px-4 py-1 bg-neonBlue/20 border border-neonBlue rounded-full text-neonBlue text-sm font-semibold">
                Featured
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Placeholder */}
                <div className="relative h-64 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-neonBlue/20 via-neonPurple/20 to-neonCyan/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl">🎨</div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-neonBlue transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredProject.longDescription ||
                  featuredProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.techStack.map((tech, index) =>
                  <span
                    key={index}
                    className="px-3 py-1 bg-neonPurple/10 border border-neonPurple/30 rounded-full text-neonPurple text-sm font-mono">
                    
                        {tech}
                      </span>
                  )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                    href={featuredProject.liveUrl}
                    whileHover={{
                      scale: 1.05
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-neonBlue text-dark-900 font-semibold rounded-lg hover:bg-neonBlueLight transition-colors">
                    
                      <ExternalLinkIcon size={18} />
                      Live Demo
                    </motion.a>
                    <motion.a
                    href={featuredProject.githubUrl}
                    whileHover={{
                      scale: 1.05
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-neonPurple text-neonPurple font-semibold rounded-lg hover:bg-neonPurple/10 transition-colors">
                    
                      <GithubIcon size={18} />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        }

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {regularProjects.map((project, index) =>
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              whileHover={{
                y: -8
              }}
              className="glass rounded-lg p-6 border border-neonBlue/20 hover:border-neonBlue/40 transition-all group cursor-pointer">
              
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) =>
                <span
                  key={index}
                  className="px-2 py-1 bg-neonCyan/10 border border-neonCyan/30 rounded text-neonCyan text-xs font-mono">
                  
                      {tech}
                    </span>
                )}
                  {project.techStack.length > 3 &&
                <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.techStack.length - 3}
                    </span>
                }
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                  href={project.liveUrl}
                  className="flex items-center gap-1 text-neonBlue hover:text-neonBlueLight text-sm font-medium transition-colors">
                  
                    <ExternalLinkIcon size={16} />
                    Demo
                  </a>
                  <a
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-neonPurple hover:text-neonPurpleDark text-sm font-medium transition-colors">
                  
                    <GithubIcon size={16} />
                    Code
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}