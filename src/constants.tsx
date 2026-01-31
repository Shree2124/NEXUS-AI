
import React from 'react';
import { Bot, Cpu, Database, BarChart, Rocket, ShieldCheck } from 'lucide-react';
import type { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'llm',
    title: 'Custom LLM Integration',
    description: 'Bespoke large language model solutions tailored to your proprietary business data and workflows.',
    icon: 'Bot'
  },
  {
    id: 'strategy',
    title: 'AI Strategy & Roadmap',
    description: 'Transformative high-level consulting to align AI capabilities with your long-term business objectives.',
    icon: 'Rocket'
  },
  {
    id: 'data',
    title: 'Data Infrastructure',
    description: 'Scalable data pipelines and architecture optimized for high-performance machine learning models.',
    icon: 'Database'
  },
  {
    id: 'ops',
    title: 'MLOps & Automation',
    description: 'End-to-end automation of model deployment, monitoring, and iterative improvement cycles.',
    icon: 'Cpu'
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics',
    description: 'Deep-dive insights using advanced statistical models to forecast trends and customer behavior.',
    icon: 'BarChart'
  },
  {
    id: 'security',
    title: 'AI Governance & Security',
    description: 'Ensuring your AI implementations are ethical, secure, and compliant with global regulations.',
    icon: 'ShieldCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'FinStream Global',
    content: 'NexusAI transformed our customer service operations within 3 months. Their integration of custom LLMs reduced our response times by 70%.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Data',
    company: 'NextGen Logistics',
    content: 'The predictive models built by the Nexus team allowed us to optimize our supply chain routes, saving us millions in operational costs annually.',
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  }
];

export const IconMap: Record<string, React.ElementType> = {
  Bot,
  Cpu,
  Database,
  BarChart,
  Rocket,
  ShieldCheck
};
