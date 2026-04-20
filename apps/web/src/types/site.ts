export type ServiceCategory = 'engineering' | 'infrastructure' | 'security' | 'managed';
export type CaseStudyCategory = 'cloud' | 'platform' | 'security';
export type PackageTier = 'starter' | 'growth' | 'enterprise';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  bullets: string[];
  metric: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: CaseStudyCategory;
  client: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string[];
  results: string[];
  metrics: Array<{ label: string; value: string }>;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tier: PackageTier;
  price: string;
  audience: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  tagline: string;
}

export interface LeadSubmission {
  id: string;
  email: string;
  message: string;
  source: string;
  packageInterest?: string;
  createdAt: string;
}

export interface LeadFormValues {
  email: string;
  message: string;
  source: string;
  packageInterest?: string;
}
