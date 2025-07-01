// src/types/project.ts

// Define TechStackItem if it's not already defined globally
export interface TechStackItem {
    tech: string;
    imageUrl: string;
    backgroundColor: string;
    textColor?: string; // Optional: If MadeWithCard allows textColor
  }
  
  // Update the Project interface
  export interface Project {
    id: string;
    title: string;
    description: string;
    link: string; // Still useful if you want a direct link, otherwise remove
    // image?: string; // If your old ProjectCard used a single 'image', you might replace this with 'images'
  
    // New properties required by ProjectPrismEffectCard:
    date: string;
    client: string;
    images: string[]; // Array for main, sub1, sub2 images
    stack: TechStackItem[]; // Array of tech stack items
  }