import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TerminalSection } from './components/TerminalSection';
import { ContactSection } from './components/ContactSection';
import { AIChatWidget } from './components/AIChatWidget';
export function App() {
  return (
    <div className="w-full min-h-screen bg-dark-900 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <TerminalSection />
      <ContactSection />
      <AIChatWidget />

      {/* Footer */}
      <footer className="bg-dark-800 border-t border-neonBlue/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Arjun Patel. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-neonBlue text-xs mt-2 font-mono">
            {'<Designed with passion and lots of coffee ☕ />'}
          </p>
        </div>
      </footer>
    </div>);

}