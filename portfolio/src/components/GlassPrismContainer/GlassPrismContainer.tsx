// src/components/GlassContainer/GlassPrismContainer.tsx
import React from "react";
import type { ReactNode } from "react";
import "./GlassPrismContainer.css";

type GlassPrismContainerProps = {
  children: ReactNode;
  className?: string; // Add className as an optional prop
};

const GlassPrismContainer = ({ children, className }: GlassPrismContainerProps) => {
  return (
    // Combine the default class with any passed className
    <div className={`glass-prism-container ${className || ''}`}>
      {children}
    </div>
  );
};

export default GlassPrismContainer;