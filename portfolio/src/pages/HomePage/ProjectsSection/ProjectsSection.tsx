import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'; 
import styles from './ProjectsSection.module.css'; 
import type { Project } from '../../../types/project';
interface ProjectsSectionProps {
  projects: Project[]; 
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects-section" className={`${styles['projects-section']} glassmorphism-section`}>
      <h2 className="section-title">My Recent Work</h2> 
      <div className={styles['projects-grid']}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <button className="btn outline-btn view-all-btn">View All Projects</button>
    </section>
  );
};

export default ProjectsSection;