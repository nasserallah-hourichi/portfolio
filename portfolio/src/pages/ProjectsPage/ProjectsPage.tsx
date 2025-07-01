import React from 'react';
import { projects } from '../../data/projects'; // Import your project data
import styles from './ProjectsPage.module.css'; // Import CSS module for ProjectsPage specific styles
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Make sure this path is correct

const ProjectsPage: React.FC = () => {
  return (
    // The main-content class comes from HomePage.css and handles padding-top for your floating navbar
    // and overall max-width, ensuring consistency with HomePage layout.
    <main className="main-content">
      <section id="all-projects-section" className={`${styles['projects-page-section']} glassmorphism-section`}>
        <h2 className="section-title">All My Projects</h2> {/* Re-use global section-title */}
        <p className={styles['projects-intro']}>
          Here's a comprehensive look at the diverse projects I've worked on, showcasing my skills in various technologies and domains.
        </p>
        <div className={styles['projects-list']}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id} // Ensure each project has a unique ID for the key
              title={project.title}
              description={project.description}
              date={project.date}
              client={project.client}
              images={project.images}
              stack={project.stack}
            />
          ))}
        </div>
        {/* You could add pagination or filtering options here if your project list grows very long */}
      </section>
    </main>
  );
};

export default ProjectsPage;