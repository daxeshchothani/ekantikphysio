export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  benefits: string[];
  steps: string[];
  relatedSlugs: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  quote: string;
  image: string;
  rating: number;
  location: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
