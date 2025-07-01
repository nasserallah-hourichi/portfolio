import React from 'react';
import './HomePage.css';
import { projects } from '../../data/projects';
import AboutSection from './AboutSection/AboutSection';
import ContactSection from './ContactSection/ContactSection';
import HeroSection from './HeroSection/HeroSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';



const HomePage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-container">
      <main className="main-content">
        <HeroSection
          onScrollToContact={() => scrollToSection('contact-section')}
          onScrollToProjects={() => scrollToSection('projects-section')}
        />
        <ProjectsSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </main>
    
    </div>
  );
};

export default HomePage;