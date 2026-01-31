
import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Impact', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <span className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tighter uppercase">Nexus<span className="opacity-50">AI</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-slate-900 dark:bg-white text-white dark:text-black px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-black/5 dark:shadow-white/5"
            >
              Enquire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 p-2">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="md:hidden glass absolute w-full left-0 top-full border-b border-slate-200 dark:border-white/10 p-8 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-black uppercase tracking-widest text-slate-600 dark:text-slate-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-slate-900 dark:bg-white text-white dark:text-black py-4 rounded-full text-xs font-black uppercase tracking-widest"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
