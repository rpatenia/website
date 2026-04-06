import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
{
  name: 'Home',
  href: '#home'
},
{
  name: 'About',
  href: '#about'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Experience',
  href: '#experience'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-neonBlue/10' : 'bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-2xl font-bold font-mono neon-glow cursor-pointer"
            whileHover={{
              scale: 1.05
            }}>
            
            {'<AP />'}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium transition-colors">
              
                <span
                className={`relative z-10 ${activeSection === link.href.substring(1) ? 'text-neonBlue' : 'text-gray-300 hover:text-white'}`}>
                
                  {link.name}
                </span>
                {activeSection === link.href.substring(1) &&
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-neonBlue/10 rounded-lg border border-neonBlue/30"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} />

              }
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-neonBlue transition-colors">
            
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden glass border-t border-neonBlue/20">
          
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`block px-4 py-2 rounded-lg transition-colors ${activeSection === link.href.substring(1) ? 'bg-neonBlue/10 text-neonBlue border border-neonBlue/30' : 'text-gray-300 hover:bg-white/5'}`}>
              
                  {link.name}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}