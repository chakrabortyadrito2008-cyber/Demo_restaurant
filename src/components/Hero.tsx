import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background with Parallax effect via useTransform */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
          alt="Sher E Bengal Luxury Exterior"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-transparent to-primary-dark" />
      </motion.div>

      <motion.div 
        style={{ opacity, y: textY }}
        className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start lg:items-center lg:text-center"
      >
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold font-medium mb-6 animate-pulse">
            Royal Luxury meets Modern Comfort
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            An Experience <br /> <span className="text-gold italic">Beyond</span> Royalty.
          </h1>
          <p className="max-w-xl lg:mx-auto text-white/60 text-sm md:text-lg mb-10 font-light leading-relaxed">
            Discover Durgapur's premier destination for fine dining and luxury stay. 
            Immerse yourself in a world where every detail is crafted for your prestige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center lg:justify-center">
            <button className="bg-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red/90 hover:scale-105 transition-all gold-shadow group flex items-center gap-3 border-none cursor-pointer">
              Explore Our Rooms
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ChevronRight size={16} />
              </motion.span>
            </button>
            <button className="border border-gold/40 text-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold/10 hover:border-gold transition-all cursor-pointer bg-transparent">
              Reserve a Table
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Detail Overlay (Semi-3D feel) */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6 glass p-6 rounded-2xl gold-border"
      >
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest text-white/50">Current Status</p>
          <p className="text-gold font-medium">Fine Dining Open</p>
        </div>
        <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
        </div>
      </motion.div>
    </section>
  );
}

