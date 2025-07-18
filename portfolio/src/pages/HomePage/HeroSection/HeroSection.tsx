import React from 'react';
import styles from './HeroSection.module.css'; 
import tuxPicture from '../../../assets/tux_picture_black.jpg';
import scrollArrow from '../../../assets/icons8-double-down-96.png';



interface HeroSectionProps {
  onScrollToContact: () => void;
  onScrollToProjects: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact, onScrollToProjects }) => {
  return (
    <section id="home-section" className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        <div className={styles['intro-text']}>
          <p className={styles['greeting-text']}>Hello, I'm</p>
          <h1 className={styles['intro-title']}>Nasserallah Hourichi</h1>
          <p className={styles['intro-summary']}>
            An <b>Expert Software Engineer</b> with a strong foundation in architecture, clean code, and modern tools.
            I design and build robust systems that scale and deliver results with clarity and precision.
          </p>
          <div className={styles['hero-actions']}>
            <button className="btn primary-btn" onClick={onScrollToContact}>
              Get in Touch
            </button>
            <button className="btn secondary-btn" onClick={onScrollToProjects}>
              See My Work
            </button>
          </div>
        </div>

        <div className={styles['intro-image-container']}>
          <img src={tuxPicture} alt="Nasserallah Hourichi Portrait" className={styles['intro-image']} />
        </div>
      </div>

      <button
        aria-label="Scroll to Projects Section"
        className={styles['scroll-down-indicator']}
        onClick={onScrollToProjects}
      >
        <img src={scrollArrow} alt="Scroll down arrow" className={styles['scroll-arrow']} />
      </button>
    </section>
  );
};

export default HeroSection;