import React from 'react';
import { SERVICES, IconMap } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 bg-slate-50 dark:bg-[#080808] border-y border-slate-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 reveal">
          <div className="max-w-2xl">
            <h2 className="text-slate-400 dark:text-slate-500 font-black mb-4 uppercase tracking-[0.4em] text-[10px]">Our Stack</h2>
            <h3 className="text-5xl md:text-8xl font-hero font-bold text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
              Enterprise <br /><span className="text-slate-300 dark:text-slate-600">Solutions</span>
            </h3>
          </div>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-[280px] font-medium leading-tight">
            Advanced architectural blocks designed for maximum performance and ethical clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-[3rem] overflow-hidden">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="group p-12 md:p-16 bg-white dark:bg-[#080808] transition-all duration-700 hover:z-10 reveal flex flex-col"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center mb-12 group-hover:scale-110 transition-all duration-500 shadow-xl dark:shadow-white/10">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight uppercase leading-none">{service.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-12 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-4 group/link cursor-pointer">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 group-hover/link:text-slate-900 dark:group-hover/link:text-white transition-colors">Technical Architecture</span>
                  <div className="h-px w-6 bg-slate-200 dark:bg-white/10 group-hover/link:w-12 group-hover/link:bg-slate-900 dark:group-hover/link:bg-white transition-all"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;