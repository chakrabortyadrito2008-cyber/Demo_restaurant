/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { lazy, Suspense, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ParticleBackground } from './components/ParticleBackground';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Lazy load pages for better initial load performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Rooms = lazy(() => import('./pages/Rooms').then(m => ({ default: m.Rooms })));
const Dining = lazy(() => import('./pages/Dining').then(m => ({ default: m.Dining })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Banquets = lazy(() => import('./pages/Banquets').then(m => ({ default: m.Banquets })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary-dark">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5] 
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-gold font-serif text-2xl tracking-[0.3em] font-bold"
    >
      SHER E BENGAL
    </motion.div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-primary-dark relative overflow-hidden">
        <ParticleBackground />
        {/* Animated Background Golden Lights */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] golden-aura rounded-full"
          />
          <motion.div 
            animate={{ 
              x: [0, -80, 0], 
              y: [0, 120, 0],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] golden-aura rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] left-[30%] w-[30%] h-[30%] golden-aura rounded-full"
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/dining" element={<Dining />} />
                <Route path="/banquets" element={<Banquets />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <footer className="bg-black/80 border-t border-gold/10 py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-gold mb-6">SHER E BENGAL</h2>
              <p className="text-white/40 max-w-md font-light leading-relaxed mb-6">
                A premium hospitality destination in the heart of Durgapur. 
                Experience the perfect synthesis of royal tradition and modern comfort.
              </p>
              <div className="flex gap-4">
                <Link to="/rooms" className="text-[10px] uppercase tracking-widest text-gold hover:text-white transition-colors">Rooms</Link>
                <Link to="/dining" className="text-[10px] uppercase tracking-widest text-gold hover:text-white transition-colors">Dining</Link>
                <Link to="/banquets" className="text-[10px] uppercase tracking-widest text-gold hover:text-white transition-colors">Banquets</Link>
                <Link to="/gallery" className="text-[10px] uppercase tracking-widest text-gold hover:text-white transition-colors">Gallery</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 underline decoration-gold/30">Connect</h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="hover:text-gold cursor-pointer transition-colors">+91 96099 00511</li>
                <li className="hover:text-gold cursor-pointer transition-colors">stay@sherebengal.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6 underline decoration-gold/30">Location</h3>
              <p className="text-sm text-white/80 leading-loose">
                Jadabendra Panja Ave,<br />
                City Center, Durgapur,<br />
                West Bengal 713216
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
            <p>© 2024 Sher E Bengal Hotel & Restaurant. All rights reserved.</p>
            <p className="text-gold/60 italic">Designed for Royalty</p>
          </div>
        </footer>
      </div>
    </div>
    </Router>
    </ErrorBoundary>
  );
}

