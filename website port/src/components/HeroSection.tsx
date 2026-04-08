import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
const titles = [
'AI/ML Engineer',
'Full-Stack Developer',
'Data Scientist',
'Problem Solver'];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.fill();
      }
    }
    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animId);
    };
  }, []);
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const codeLines = [
  {
    text: 'const ',
    color: 'text-purple-400'
  }];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: '#0a0a0f'
        }} />
      
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}>
            
            <motion.p
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.2
              }}
              className="text-neonBlue font-mono text-sm mb-4">
              
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.3
              }}
              className="text-5xl md:text-7xl font-bold mb-4 neon-glow">
              
              Ryan Patenia
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.4
              }}
              className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6 h-12 flex items-center">
              
              <span className="text-neonPurple">{displayText}</span>
              <span className="cursor-blink text-neonPurple ml-1">|</span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.5
              }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              
              Building Intelligent Systems That Solve Real-World Problems
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.6
              }}
              className="text-gray-400 text-lg mb-8 max-w-xl">
              
              I am a Computer Science student at Mapua University specializing in Data Science. I leverage AI and machine learning to create innovative, efficient solutions, with a current focus on Deep Learning and NLP
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.7
              }}
              className="flex flex-wrap gap-4">
              
              <motion.button
                onClick={scrollToProjects}
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-8 py-3 bg-neonBlue text-dark-900 font-semibold rounded-lg hover:bg-neonBlueLight transition-colors shadow-lg shadow-neonBlue/50">
                
                View Projects
              </motion.button>
              <motion.a
 href="https://drive.google.com/file/d/1a6Iejx5McebjQvfR5TobGXdQPs6pNxnD/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.05
  }}
  whileTap={{
    scale: 0.95
  }}
  className="px-8 py-3 border-2 border-neonPurple text-neonPurple font-semibold rounded-lg hover:bg-neonPurple/10 transition-colors">
  
  Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            className="hidden lg:block">
            
            <div className="glass rounded-lg p-6 font-mono text-sm border border-neonBlue/30 shadow-xl shadow-neonBlue/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-500">developer.ts</span>
              </div>
              <div className="text-gray-300 leading-relaxed whitespace-pre">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-neonBlue">developer</span>
                {' = {'}
                {'\n'}
                {'  name: '}
                <span className="text-green-400">{'"Ryan Patenia"'}</span>
                {',\n'}
                {'  role: '}
                <span className="text-green-400">{'"AI/ML Engineer"'}</span>
                {',\n'}
                {'  education: '}
                <span className="text-green-400">{'"BS COMPUTER SCIENCE"'}</span>
                {',\n'}
                {'  skills: ['}
                <span className="text-green-400">{'"Python"'}</span>
                {', '}
                <span className="text-green-400">{'"TensorFlow"'}</span>
                {', '}
                <span className="text-green-400">{'"React"'}</span>
                {'],\n'}
                {'  interests: ['}
                <span className="text-green-400">{'"AI"'}</span>
                {', '}
                <span className="text-green-400">{'"ML"'}</span>
                {', '}
                <span className="text-green-400">{'"Data Science"'}</span>
                {'],\n'}
                {'  passion: '}
                <span className="text-green-400">
                  {'"Building intelligent systems"'}
                </span>
                {',\n'}
                {'  currentFocus: '}
                <span className="text-green-400">
                  {'"Deep Learning & NLP"'}
                </span>
  
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
          className="text-neonBlue cursor-pointer"
          onClick={() =>
          document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
          })
          }>
          
          <ChevronDownIcon size={32} />
        </motion.div>
      </motion.div>
    </section>);

}