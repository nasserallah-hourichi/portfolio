import type { ReactNode } from "react";
import "./GlassLiftContainer.css";

// Define the props for GlassLiftContainer
type GlassLiftContainerProps = {
  children: ReactNode;
  className?: string; // Add className as an optional prop
};

const GlassLiftContainer = ({ children, className }: GlassLiftContainerProps) => {
  // Combine the default class with any additional class names provided
  const combinedClassName = `glass-lift-container ${className || ''}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};

export default GlassLiftContainer;