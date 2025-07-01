import type { FC } from "react";
import "./MadeWithCard.css";

type MadeWithCardProps = {
  tech: string;
  imageUrl: string;
  backgroundColor?: string;
  textColor?: string;
};

const MadeWithCard: FC<MadeWithCardProps> = ({
  tech,
  imageUrl,
  backgroundColor = "#001D3D",
  textColor = "#ffffff",
}) => {
  return (
    <div
      className="made-with-card"
      style={{ backgroundColor, color: textColor }}
    >
      <img src={imageUrl} alt={tech} className="made-with-logo" />
      <div className="made-with-texts">
        <span className="made-with-small">Made with</span>
        <span className="made-with-tech">{tech}</span>
      </div>
    </div>
  );
};

export default MadeWithCard;
