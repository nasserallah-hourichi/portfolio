// src/components/AboutSection/AboutSection.tsx
import React from 'react';
import styles from './AboutSection.module.css'; // Import CSS module

const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className={`${styles['about-section']} glassmorphism-section`}>
      <h2 className="section-title">About Me</h2>
      <div className={styles['about-content']}>
        <p>
          With over 4 years of experience in software development, I specialize in creating scalable and maintainable applications. My expertise spans across frontend technologies like React and TypeScript, backend frameworks such as Node.js and Spring Boot, and robust database solutions including PostgreSQL and MongoDB. I am passionate about clean architecture, test-driven development, and continuous integration/delivery.
        </p>
        <p>
          I thrive in dynamic environments, constantly learning and adapting to new technologies to deliver high-quality solutions. When I'm not coding, you can find me [mention a hobby, e.g., exploring new tech, hiking, reading].
        </p>
        <div className={styles['skills-grid']}>
          <h3>Skills & Technologies:</h3>
          <ul>
            <li>React, Angular, TypeScript</li>
            <li>Spring Boot,Node.js, Express, Django</li>
            <li>PostgreSQL, MongoDB, MySQL</li>
            <li>ScaleWay, Azure, Docker, Kubernetes, Helm</li>
            <li>Unit Testing, Integration Testing</li>
            <li>Agile Methodologies, Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;