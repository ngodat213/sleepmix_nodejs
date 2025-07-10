interface Section {
  title: string;
}

interface Summary extends Section {
  content: string;
}

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

interface Education extends Section {
  items: EducationItem[];
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  skills: string[];
  achievements: string[];
}

interface Experience extends Section {
  items: ExperienceItem[];
}

interface ProjectItem {
  name: string;
  skills: string[];
  description: string;
}

interface Projects extends Section {
  items: ProjectItem[];
}

export interface About {
  title: string;
  summary: Summary;
  education: Education;
  experience: Experience;
  projects: Projects;
} 