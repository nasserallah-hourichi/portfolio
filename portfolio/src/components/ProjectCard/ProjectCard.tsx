// ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.css'; // Your ProjectCard CSS module
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Assuming 'techStack' items have these properties
interface TechStackItem {
  tech: string;
  imageUrl: string;
  backgroundColor: string;
}

// Props for your ProjectCard component
interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  client: string;
  images: string[]; // Array of image URLs
  stack: TechStackItem[]; // Array of tech stack items
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  client,
  images,
  stack,
}) => {
  return (
    <div className={styles['project-card']}>
      {/* Container for Images: Carousel on left, Summary on right */}
      <div className={styles['project-images-section']}>
        {/* Main Image Carousel */}
        <div className={styles['project-images-carousel-wrapper']}>
          {images && images.length > 0 ? (
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false} // Hide bottom dots, as we'll have a side summary
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              className={styles['project-carousel']}
            >
              {images.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`${title} image ${index + 1}`} className={styles['carousel-image']} />
                </div>
              ))}
            </Carousel>
          ) : (
            <div className={styles['no-image-placeholder']}>
              No Images Available
            </div>
          )}
        </div>

        {/* Image Summary Section */}
        {images && images.length > 0 && (
          <div className={styles['project-image-summary']}>
            {images.slice(0, 4).map((imageUrl, index) => ( // Display up to 4 images in summary
              <img
                key={index}
                src={imageUrl}
                alt={`${title} thumbnail ${index + 1}`}
                className={styles['summary-thumbnail']}
              />
            ))}
            {images.length > 4 && (
                <div className={styles['summary-more-indicator']}>
                    +{images.length - 4} more
                </div>
            )}
          </div>
        )}
      </div>

      {/* Project Content Section */}
      <div className={styles['project-content']}>
        <h3 className={styles['project-title']}>{title}</h3>
        <p className={styles['project-description']}>{description}</p>
        <div className={styles['project-meta']}>
          <span>{date}</span>
          <span>Client: {client}</span>
        </div>
        <div className={styles['project-stack']}>
          {stack.map((techItem, index) => (
            <div
              key={index}
              className={styles['tech-item']}
              style={{ backgroundColor: techItem.backgroundColor }}
            >
              <img src={techItem.imageUrl} alt={techItem.tech} className={styles['tech-icon']} />
              <span className={styles['tech-name']}>{techItem.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;