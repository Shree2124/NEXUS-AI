
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    company: string;
    message: string;
    industry: string;
  }
  
  export interface AIAnalysisResponse {
    text?: string;
    sentiment: string;
    priority: 'High' | 'Medium' | 'Low';
    suggestedSolutions: string[];
    personalizedGreeting: string;
  }
  