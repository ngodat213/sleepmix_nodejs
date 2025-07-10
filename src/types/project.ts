export interface ProjectHero {
  title: {
    highlight: string;
    normal: string;
  };
  description: string;
}

export interface Screenshot {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Feature {
  id: string;
  icon: {
    path: string;
    strokeWidth: number;
  };
  title: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
  url: string;
}

export interface ProjectMetadata {
  status: 'in_development' | 'completed' | 'archived';
  startDate: string;
  platform: string;
  category: string;
  team: {
    size: number;
    role: string;
  };
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  playStoreUrl?: string;
  hero: ProjectHero;
  screenshots: Screenshot[];
  features: Feature[];
  technologies: Technology[];
  metadata: ProjectMetadata;
} 