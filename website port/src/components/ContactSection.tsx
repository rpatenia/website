import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from 'lucide-react';
import { toast, Toaster } from 'sonner';
const socialLinks = [
{
  name: 'GitHub',
  icon: GithubIcon,
  url: 'https://github.com/arjunpatel',
  color: 'neonBlue'
},
{
  name: 'LinkedIn',
  icon: LinkedinIcon,
  url: 'https://linkedin.com/in/arjunpatel',
  color: 'neonPurple'
},
{
  name: 'Email',
  icon: MailIcon,
  url: 'mailto:arjun.patel@email.com',
  color: 'neonCyan'
}];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 4000,
      style: {
        background: '#0d0d1a',
        border: '1px solid #00d4ff',
        color: '#00d4ff'
      }
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <section id="contact" className="relative py-20 bg-dark-900">
      <Toaster position="bottom-right" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="mb-16 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-glow">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about AI/ML. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-neonBlue/20 rounded-lg text-white focus:outline-none focus:border-neonBlue transition-colors"
                  placeholder="Your name" />
                
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-neonBlue/20 rounded-lg text-white focus:outline-none focus:border-neonBlue transition-colors"
                  placeholder="your.email@example.com" />
                
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-neonBlue/20 rounded-lg text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
                  placeholder="Your message..." />
                
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="w-full px-8 py-4 bg-neonBlue text-dark-900 font-semibold rounded-lg hover:bg-neonBlueLight transition-colors shadow-lg shadow-neonBlue/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                
                {isSubmitting ?
                <>
                    <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </> :

                <>
                    <SendIcon size={20} />
                    Send Message
                  </>
                }
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="flex flex-col justify-center">
            
            <div className="glass rounded-lg p-8 border border-neonPurple/20">
              <h3 className="text-2xl font-bold text-neonPurple mb-6">
                Connect With Me
              </h3>

              <div className="space-y-6 mb-8">
                {socialLinks.map((link, index) =>
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 10
                  }}
                  className="flex items-center gap-4 group">
                  
                    <div
                    className={`p-3 rounded-lg bg-${link.color}/10 group-hover:bg-${link.color}/20 transition-colors`}>
                    
                      <link.icon className={`text-${link.color}`} size={24} />
                    </div>
                    <div>
                      <p
                      className={`font-semibold text-${link.color} group-hover:text-white transition-colors`}>
                      
                        {link.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {link.url.
                      replace('https://', '').
                      replace('mailto:', '')}
                      </p>
                    </div>
                  </motion.a>
                )}
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Currently based in India and open to remote opportunities
                  worldwide. Available for freelance projects, internships, and
                  full-time positions in AI/ML engineering.
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="hidden lg:block mt-8 mx-auto w-32 h-32 rounded-full border-2 border-neonCyan/20 relative">
              
              <div className="absolute inset-4 rounded-full border-2 border-neonPurple/20" />
              <div className="absolute inset-8 rounded-full border-2 border-neonBlue/20" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}