import React from 'react';
import styles from './ProjectCard.module.css';
import type { Project } from '../../../types/project'; // Note: This Project type now needs to include images, date, client, stack

const ProjectCard: React.FC<Project> = ({ title, description, link, images }) => (
  <div className={`${styles['project-card']} glassmorphism-card`}>
    {images[0] && <img src={images[0]} alt={`${title} project preview`} className={styles['project-card-image']} />}
    <h3 className={styles['project-card-title']}>{title}</h3>
    <p className={styles['project-card-description']}>{description}</p>
    <a href={link} className={styles['project-card-link']} target="_blank" rel="noopener noreferrer">
      View Project
      <span className={styles['arrow-icon']}>→</span>
    </a>
  </div>
);

export default ProjectCard;