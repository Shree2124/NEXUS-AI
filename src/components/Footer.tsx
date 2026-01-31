
import React from 'react';
import { BrainCircuit, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#050505] pt-32 pb-16 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tighter uppercase">Nexus<span className="opacity-50">AI</span></span>
          </div>
          
          <div className="flex gap-12 text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Career</a>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} NexusAI Strategic Group.
          </p>
          <div className="flex items-center gap-4">
             <div className="w-1 h-1 rounded-full bg-green-500"></div>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">System Nominal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
