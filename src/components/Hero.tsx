import React, { useEffect, useState } from 'react';
import { Sparkles, MoveRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-64 lg:pb-56 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Dynamic Background Voids */}
      <div className="absolute top-[-25%] left-[-15%] w-[70%] h-[70%] bg-slate-50 dark:bg-white/[0.02] blur-[150px] rounded-full transition-colors duration-1000"></div>
      <div className="absolute bottom-[-25%] right-[-15%] w-[70%] h-[70%] bg-slate-100 dark:bg-white/[0.02] blur-[150px] rounded-full transition-colors duration-1000"></div>
      
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-16 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Strategic Supremacy
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-hero font-bold text-slate-900 dark:text-white leading-[0.85] mb-12 tracking-[-0.06em]">
            Obsidian <br /> 
            <span className="gradient-text-mono italic">Intelligence</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 leading-tight mb-20 max-w-3xl font-medium tracking-tight">
            We build the cognitive infrastructure that runs high-stakes enterprise. Clinical execution meets frontier research.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-12 py-7 bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-xs rounded-full flex items-center justify-center gap-4 transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] dark:shadow-white/10"
            >
              Start Engagement
              <MoveRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-12 py-7 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center"
            >
              Our Capabilities
            </a>
          </div>

          <div className="mt-40 pt-16 border-t border-slate-100 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { label: 'Uptime Index', value: '99.9%' },
              { label: 'Neural Capacity', value: '250T' },
              { label: 'Global Hubs', value: '12' },
              { label: 'Data Sovereignty', value: '100%' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-3">
                <p className="text-4xl font-hero font-bold text-slate-900 dark:text-white tracking-tight leading-none">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 leading-none">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Asset */}
      <div className="absolute right-[-5%] top-[15%] w-[35%] aspect-square hidden lg:block opacity-10 dark:opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
           <div className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full blur-[120px] opacity-20 transition-colors duration-1000"></div>
           <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4628c71d5?auto=format&fit=crop&q=80&w=800" 
            alt="Nexus Asset" 
            className="w-full h-full object-cover rounded-full animate-slow-spin grayscale border border-slate-200 dark:border-white/10 transition-all duration-1000"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;