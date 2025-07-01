// src/components/ProjectPrismEffectCard/ProjectPrismEffectCard.tsx
import MadeWithCard from "../MadeWithCard/MadeWithCard";
import GlassPrismContainer from "../GlassPrismContainer/GlassPrismContainer";

type TechStackItem = {
  tech: string;
  imageUrl: string;
  backgroundColor: string;
  textColor?: string;
};

type ProjectPrismEffectCardProps = {
  title: string;
  description: string;
  date: string;
  client: string;
  images: string[]; // [main, sub1, sub2] - assuming at least 3 images for the desired layout
  stack: TechStackItem[];
};

const ProjectPrismEffectCard: React.FC<ProjectPrismEffectCardProps> = ({
  title,
  description,
  date,
  client,
  images,
  stack,
}) => {
  return (
    <GlassPrismContainer className="compact-project-prism-card">
      <div className="project-card">
        <div className="project-images">
          {images[0] && (
            <img src={images[0]} className="main-image" alt={`Main image for ${title}`} />
          )}
          {(images[1] || images[2]) && (
            <div className="sub-images">
              {images[1] && <img src={images[1]} className="sub-image" alt={`Sub image 1 for ${title}`} />}
              {images[2] && <img src={images[2]} className="sub-image" alt={`Sub image 2 for ${title}`} />}
            </div>
          )}
        </div>

        <div className="project-content">
          {/* --- TITLE MOVED TO THE TOP --- */}
          <h3 className="project-title">{title}</h3>

          <p className="project-description">{description}</p>

          <div className="project-meta">
            <span className="project-date">{date}</span>
            <span className="project-client">for {client}</span>
          </div>

          <div className="project-stack">
            {stack.map((item) => (
              <MadeWithCard
                key={item.tech}
                tech={item.tech}
                imageUrl={item.imageUrl}
                backgroundColor={item.backgroundColor}
                textColor={item.textColor}
              />
            ))}
          </div>
        </div>
      </div>
    </GlassPrismContainer>
  );
};

export default ProjectPrismEffectCard;