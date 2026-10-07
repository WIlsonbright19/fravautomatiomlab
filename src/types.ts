export type FravPageId = 'home' | 'web' | 'automation' | 'about' | 'web-development' | 'about-us';
export type PageId = 'home' | 'web-dev' | 'ai-automation' | 'contact' | FravPageId;

export interface ProjectScene {
  index: string;
  discipline: 'WEB' | 'AUTOMATION';
  title: string;
  image: string;
  tagline?: string;
  description?: string;
  tags?: string[];
  metrics?: string;
  client?: string;
  year?: string;
}

export interface StudioPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  longDescription?: string;
  image: string;
  deliverables?: string[];
  cameraSpecs?: {
    camera: string;
    lens: string;
    iso: string;
    shutter: string;
  };
  metrics?: any;
  techSpecs?: any;
  tags?: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  subtitle?: string;
  description: string;
  image: string;
  features: string[];
  metrics?: any;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  initials: string;
  highlight?: boolean;
}
