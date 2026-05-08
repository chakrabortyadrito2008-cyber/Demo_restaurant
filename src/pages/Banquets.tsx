import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { Calendar, Users, Music, Utensils, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BANQUET_HALLS = [
  {
    name: "The Imperial Ballroom",
    capacity: "500-800 Guests",
    desc: "A majestic space for grand weddings and corporate galas, featuring crystal chandeliers and a state-of-the-art sound system.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Royal Pavilion",
    capacity: "200-400 Guests",
    desc: "An elegant setting for mid-sized celebrations, heritage-inspired decor, and seamless indoor-outdoor connectivity.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "The Regency Lounge",
    capacity: "50-150 Guests",
    desc: "Perfect for intimate gatherings, pre-wedding rituals, or upscale corporate meetups in an atmosphere of refined luxury.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop"
  }
];

export function Banquets() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Banquets Hero"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-4 block">Celebrations & Events</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-6">Royal <span className="italic text-gold">Occasions</span></h1>
            <p className="text-white/60 max-w-2xl mx-auto italic font-light text-lg">
              Crafting memories that last a lifetime in Durgapur's most prestigious banquet halls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {[
            { icon: Calendar, title: "Grand Weddings", desc: "End-to-end luxury wedding planning and execution." },
            { icon: Users, title: "Corporate Events", desc: "Sophisticated settings for meetings and conferences." },
            { icon: Music, title: "Social Parties", desc: "Vibrant spaces for birthdays, anniversaries, and more." },
            { icon: Utensils, title: "Royal Catering", desc: "Exquisite multi-cuisine menus prepared by master chefs." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold mx-auto mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm italic font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Banquet Halls List */}
        <div className="space-y-40">
          {BANQUET_HALLS.map((hall, idx) => (
            <motion.div 
              key={hall.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden gold-border gold-shadow">
                  <img src={hall.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={hall.name} />
                </div>
                <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 glass px-8 py-4 rounded-2xl gold-border hidden sm:block">
                  <span className="text-gold font-bold">{hall.capacity}</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
                  <span className="text-[10px] uppercase tracking-widest text-gold ml-2 font-bold">Premier Hall</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{hall.name}</h2>
                <p className="text-white/60 mb-8 text-lg font-light italic leading-relaxed">
                  {hall.desc}
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold hover:text-black rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-all gap-3 bg-transparent">
                    Request for Site Visit
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-black/40 border-y border-gold/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Star className="text-gold mx-auto mb-8 animate-pulse" size={40} />
          <h2 className="text-3xl md:text-5xl font-serif text-white italic mb-10">
            "The wedding was absolutely magical. The staff at Sher E Bengal handled every detail with royal precision. Our guests were in awe."
          </h2>
          <p className="text-gold uppercase tracking-[0.3em] font-bold text-xs">- The Mukherjee Reception, 2024</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Plan Your <span className="italic text-gold">Masterpiece</span></h2>
        <p className="text-white/40 mb-12 max-w-xl mx-auto font-light">
          From the first inquiry to the final goodbye, experience 5-star hospitality in every single detail.
        </p>
        <Link to="/contact">
           <Button className="bg-red text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gold hover:text-black transition-all gold-shadow border-none">
             Send Event Inquiry
           </Button>
        </Link>
      </section>
    </div>
  );
}
