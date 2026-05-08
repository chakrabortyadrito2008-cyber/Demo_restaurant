import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/src/components/ui/dialog';
import { SEOSection } from '../components/SEOSection';

const IMAGES = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591088398332-8a77d399e843?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544124499-58912cbddaad?q=60&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1578683010236-d716f9759678?q=60&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d59735288?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517840901100-8179e982ad91?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=60&w=800&auto=format&fit=crop',
];

export function Gallery() {
  return (
    <div className="pt-24 min-h-screen pb-32">
       {/* Header */}
       <div className="py-20 px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium mb-4 block underline decoration-gold/20 underline-offset-8">Visual Narrative</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Glimpses of <span className="not-italic text-gold">Grandiose</span></h1>
          <p className="max-w-2xl mx-auto text-white/50 font-light italic">
            A window into the sophisticated lifestyle at Sher E Bengal Hotel & Restaurant. Each image captures a moment of our commitment to luxury.
          </p>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-[1400px] mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {IMAGES.map((src, idx) => (
          <div key={idx} className="break-inside-avoid">
            <Dialog>
              <DialogTrigger>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl gold-border"
                >
                  <img 
                    src={src} 
                    alt={`Sher E Bengal ${idx}`} 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gold/40 text-gold shadow-lg shadow-gold/20">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-black/90 p-0 border-gold/20 overflow-hidden">
                 <img 
                  src={src} 
                  alt="Gallery Fullscreen"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
      <div className="mt-32">
        <SEOSection />
      </div>
    </div>
  );
}
