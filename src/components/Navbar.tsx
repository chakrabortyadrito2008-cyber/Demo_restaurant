import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-col leading-tight">
          <span className="text-2xl font-serif font-bold tracking-widest text-gold">SHER E BENGAL</span>
          <span className="text-[10px] tracking-[0.3em] font-sans text-white/60">HOTEL & RESTAURANT</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-widest transition-colors hover:text-gold',
                  isActive ? 'text-gold font-medium' : 'text-white/80'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/rooms"
            className="bg-red text-white text-[10px] uppercase font-bold tracking-widest px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Book Now
          </NavLink>
        </div>

        {/* Mobile Menu Trigger */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass h-screen md:hidden flex flex-col p-8 space-y-6"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-gold flex items-center justify-between group"
              >
                {link.name}
                <ChevronRight className="opacity-0 group-hover:opacity-100 text-gold transition-opacity" />
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
