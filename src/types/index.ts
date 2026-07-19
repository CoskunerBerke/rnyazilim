export interface CompanyInfo {
  name: string;
  legalName: string;
  domain: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappUrl: string;
  address: string;
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
    twitter?: string;
  };
  associatedSites?: { name: string; url: string }[];
  workingHours?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string; // Lucide icon identifier
  benefits: string[];
  technologies: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
}

export interface TechCapability {
  category: string;
  items: string[];
}
