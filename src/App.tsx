import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { TESTIMONIALS } from './constants';
import { Quote, ArrowUpRight } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';

const AppContent: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />

        {/* Philosophy Section */}
        <section id="philosophy" className="py-48 overflow-hidden relative bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-900 dark:bg-white/10 blur-[120px] rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-1000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000" 
                  alt="High Tech Philosophy" 
                  className="rounded-[3rem] shadow-3xl relative z-10 grayscale border border-slate-100 dark:border-white/5 transition-all duration-1000 group-hover:scale-[1.01]"
                />
                <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl hidden md:flex items-center gap-4 z-20 border border-slate-200 dark:border-white/10">
                   <div className="w-3 h-3 rounded-full bg-slate-900 dark:bg-white animate-pulse"></div>
                   <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Core Engine Online</span>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h2 className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Methodology</h2>
                  <h3 className="text-4xl md:text-7xl font-hero font-bold text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
                    Absolute <br /> <span className="text-slate-300 dark:text-slate-600">Observability</span>
                  </h3>
                  <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    We architect intelligence that explains itself. Our "White Box" approach ensures that every automated decision is traceable, compliant, and optimized for human-in-the-loop oversight.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: 'Sovereign Governance', detail: 'On-premise or private cloud security' },
                    { label: 'Clinical Precision', detail: 'Zero-hallucination inference pipelines' },
                    { label: 'Fluid Integration', detail: 'Native connectivity to legacy stacks' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-6 group">
                      <div className="mt-1 w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-bold tracking-tight uppercase text-sm mb-1">{item.label}</h4>
                        <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="testimonials" className="py-48 bg-slate-50 dark:bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-xl">
                <h2 className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Strategic Impact</h2>
                <h3 className="text-5xl md:text-8xl font-hero font-bold text-slate-900 dark:text-white tracking-tighter leading-[0.9]">Global <br /><span className="text-slate-300 dark:text-slate-600">Validators</span></h3>
              </div>
              <p className="text-slate-500 font-medium max-w-[280px] text-right text-lg leading-snug">Verification of outcomes across global banking, health, and energy sectors.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-[3rem] overflow-hidden">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white dark:bg-[#080808] p-16 md:p-20 group relative transition-colors duration-500">
                  <Quote className="absolute top-12 right-12 w-20 h-20 text-slate-900/[0.03] dark:text-white/[0.03]" />
                  <p className="text-2xl md:text-3xl text-slate-800 dark:text-slate-200 leading-tight mb-16 font-medium tracking-tight relative z-10">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-6">
                    <img src={t.avatar} className="w-14 h-14 rounded-full grayscale border border-slate-200 dark:border-white/10" alt={t.name} />
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest mb-1">{t.name}</h4>
                      <p className="text-slate-400 dark:text-slate-500 font-black uppercase text-[10px] tracking-[0.2em]">{t.role} • {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;