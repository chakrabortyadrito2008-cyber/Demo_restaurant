import { motion, useScroll, useTransform } from 'motion/react';
import { Hero } from '../components/Hero';
import { SEOSection } from '../components/SEOSection';
import { TESTIMONIALS } from '../constants';
import { Star, ArrowRight, Award, Coffee, Wifi, Car, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const FEATURES = [
  { icon: Coffee, title: 'Fine Dining', desc: 'Savor authentic Mughlai flavors and global cuisines in a regal setting.' },
  { icon: Wifi, title: 'High-speed Wi-Fi', desc: 'Stay connected with business-grade wireless connectivity.' },
  { icon: Car, title: 'Valet Parking', desc: 'Hassle-free parking with our professional valet staff.' },
  { icon: Shield, title: '24/7 Security', desc: 'Your safety is our priority with constant surveillance.' }
];

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textXLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textXRight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="overflow-hidden bg-primary-dark">
      <Hero />
      <SEOSection />

      {/* Floating Text Section */}
      <section className="relative py-20 overflow-hidden bg-black/20">
        <motion.div 
          style={{ x: textXLeft }}
          className="absolute top-0 left-0 text-[15rem] font-serif font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none leading-none"
        >
          EXPERIENCE ROYALTY EXPERIENCE ROYALTY
        </motion.div>
        <motion.div 
          style={{ x: textXRight }}
          className="absolute bottom-0 right-0 text-[15rem] font-serif font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none leading-none"
        >
          SHER E BENGAL SHER E BENGAL
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-4 block">The Legacy</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                Where Heritage <br /> Resides in <span className="italic text-gold">Grandeur</span>
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed text-lg font-light">
                For over two decades, Sher E Bengal has stood as a beacon of elite hospitality. 
                Our story is woven with the threads of royal Indian traditions and the gold standard of modern luxury service.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                 <Link to="/rooms" className="group inline-flex items-center gap-4 text-gold text-xs uppercase tracking-[0.3em] font-bold">
                  EXPLORE THE SUITES
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/banquets" className="group inline-flex items-center gap-4 text-gold text-xs uppercase tracking-[0.3em] font-bold">
                  PLAN AN EVENT
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0.1, 0.4], [0, -50]) }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden gold-border gold-shadow relative">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                  alt="Sher E Bengal Durgapur Interior Luxury Detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl gold-border hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Five Star Comfort</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">Certified Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid with Staggered Motion */}
      <section className="py-32 bg-black/40 border-y border-gold/10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-24"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4 block">World Class</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Elite Amenities</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-3xl gold-border hover:gold-shadow transition-all group flex flex-col items-center text-center cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform group-hover:bg-gold/10">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light italic">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="h-[70vh] relative overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-[120%] object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
            alt="Parallax background"
          />
          <div className="absolute inset-0 bg-primary-dark/40" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-black text-white italic mb-8">
            Sip. <span className="text-gold">Savour.</span> Stay.
          </h2>
          <Link to="/dining">
             <button className="bg-red text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gold hover:text-black transition-all gold-shadow border-none cursor-pointer">
               Explore Dining
             </button>
          </Link>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">The Voice of <br /><span className="italic text-gold">Honored</span> Guests</h2>
            </div>
            <div className="text-right">
              <p className="text-gold font-serif text-3xl mb-2 italic">Excellent 4.8/5</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Based on 2,500+ Reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-3xl gold-border hover:bg-gold/5 transition-colors group relative overflow-hidden cursor-default"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.floor(testimonial.rating) ? "fill-gold text-gold" : "text-white/10"} />
                  ))}
                </div>
                <p className="text-white/80 font-light italic mb-10 text-lg leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-serif text-gold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-serif text-white group-hover:text-gold transition-colors">{testimonial.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Scroll Entrance */}
      <section className="py-40 relative px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass p-20 rounded-[3rem] gold-border gold-shadow relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent pointer-events-none" />
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-10 leading-[0.9]">
            Begin Your <br /> <span className="text-gold italic">Regal Story</span>
          </h2>
          <p className="text-white/40 mb-12 max-w-xl mx-auto font-light leading-relaxed italic">
            Whether for business or celebration, allow us to host you in a manner befitting your distinction. 
            Durgapur's finest address awaits your arrival.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <button className="bg-red text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:scale-110 hover:bg-red/90 transition-all gold-shadow border-none cursor-pointer min-w-[220px]">
                Book Your Stay
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-gold text-gold px-12 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gold/10 transition-all bg-transparent cursor-pointer min-w-[220px]">
                Inquire Now
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
