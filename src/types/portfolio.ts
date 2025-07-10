export interface Social {
  name: string;
  url: string;
  icon: string;
  isActive?: boolean;
}

export interface Personal {
  name: string;
  title: string;
  image: string;
  location: string;
  email: string;
  phone: string;
  social: Social[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  summary: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  skills: string[];
  summary: string[];
}

export interface ProjectDetail {
  title: string;
  items: string[];
}

export interface ProjectStats {
  developmentTime: string;
  teamSize: string;
  platform: string;
  status: string;
}

export interface Project {
  name: string;
  thumbnail: string;
  skills: string[];
  summary: string[];
  details?: ProjectDetail[];
  link: string;
  showOnHome?: boolean;
  stats?: ProjectStats;
}

export interface Skills {
  Languages: string[];
  Technologies: string[];
  Tools: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

export interface Portfolio {
  personal: Personal;
  summary: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  certifications: Certification[];
} 