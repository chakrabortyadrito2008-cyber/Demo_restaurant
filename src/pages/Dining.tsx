import { motion } from 'motion/react';
import { MENU_CATEGORIES } from '../constants';
import { UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { SEOSection } from '../components/SEOSection';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/src/components/ui/tabs';

export function Dining() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [reservation, setReservation] = useState({
    name: '',
    guests: '2',
    date: '',
    time: ''
  });

  const categories = ['All', ...MENU_CATEGORIES.map(c => c.name)];
  const filteredMenu = activeCategory === 'All' 
    ? MENU_CATEGORIES 
    : MENU_CATEGORIES.filter(c => c.name === activeCategory);

  return (
    <div className="pt-24 min-h-screen">
       {/* Hero Section */}
       <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=60&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Royal Dining"
            referrerPolicy="no-referrer"
            // @ts-ignore
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-gold font-medium mb-4 block">The Royal Kitchen</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">Taste of <span className="italic text-gold">Nobility</span></h1>
          <p className="text-white/60 max-w-xl mx-auto italic font-light">
            From sizzling Tandoors to authentic Chinese and royal Indian main courses—explore Durgapur's most extensive multi-cuisine menu.
          </p>
        </motion.div>
      </div>

      {/* Signature Series */}
      <section className="py-32 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4 block">Chef's selection</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Signature Series</h2>
            </div>
            <p className="text-white/40 italic font-light text-sm max-w-xs">
              Hand-picked masterpieces that embody the culinary heritage of Sher E Bengal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Awadhi Mutton Korma",
                desc: "Slow-cooked for 8 hours with heritage spices and saffron, served with royal sheermal.",
                image: "https://images.unsplash.com/photo-1545231027-63b3f162ad0e?q=80&w=600&auto=format&fit=crop",
                tag: "Bestseller"
              },
              {
                name: "Nizami Paneer Tikka",
                desc: "Triple-marinated paneer with a secret blend of herbs, finished in a traditional clay oven.",
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop",
                tag: "Signature"
              },
              {
                name: "Banarasi Fish Curry",
                desc: "Fresh Vetki in a rich, mustard-infused gravy that speaks the language of Bengal's rivers.",
                image: "https://images.unsplash.com/photo-1626082895617-2c6de3476af7?q=80&w=600&auto=format&fit=crop",
                tag: "Heritage"
              }
            ].map((dish, idx) => (
              <motion.div 
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden glass gold-border"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={dish.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={dish.name} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-[10px] uppercase font-bold text-gold tracking-widest mb-2 block">{dish.tag}</span>
                  <h3 className="text-2xl font-serif text-white mb-2">{dish.name}</h3>
                  <p className="text-white/50 text-xs italic font-light leading-relaxed mb-4">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs using shadcn */}
      <div className="sticky top-20 z-30 glass py-4 border-b border-gold/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="bg-transparent h-auto p-0 gap-8 flex overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className={cn(
                    "bg-transparent border-none p-0 text-[10px] uppercase tracking-widest font-bold transition-all data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold pb-2 rounded-none shadow-none",
                    activeCategory !== cat && "text-white/40"
                  )}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-4 gap-16">
        {/* Reservation Engine */}
        <div className="lg:col-span-1">
          <div className="sticky top-40 glass p-8 rounded-2xl gold-border gold-shadow">
            <div className="flex items-center gap-3 mb-6">
              <UtensilsCrossed className="text-gold" size={24} />
              <h3 className="font-serif text-2xl text-gold">Reserve a Table</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Your Name</label>
                <Input 
                  placeholder="Royal Guest"
                  className="bg-white/5 border-white/10 text-white focus-visible:ring-gold"
                  onChange={(e) => setReservation({...reservation, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Guests</label>
                  <Select value={reservation.guests} onValueChange={(v) => setReservation({...reservation, guests: v})}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-dark border-gold/20 text-white">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="6+">6+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                   <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Time</label>
                   <Select value={reservation.time} onValueChange={(v) => setReservation({...reservation, time: v})}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-gold">
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-dark border-gold/20 text-white">
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                      <SelectItem value="22:00">10:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

               <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Date</label>
                <Input 
                  type="date" 
                  className="bg-white/5 border-white/10 text-white focus-visible:ring-gold [color-scheme:dark]"
                  onChange={(e) => setReservation({...reservation, date: e.target.value})}
                />
              </div>

              <Button className="w-full bg-red text-white py-6 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red/90 transform hover:scale-105 transition-all mt-4 gold-shadow border-none">
                Verify Availability
              </Button>
            </div>
          </div>
        </div>

        {/* Digital Menu */}
        <div className="lg:col-span-3">
          <div className="space-y-24">
            {filteredMenu.map((category, idx) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden mb-12 gold-border">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover opacity-60" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center p-12">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold italic translate-y-[-4px]">{category.name}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {category.items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2 pb-2 border-b border-gold/20 flex-nowrap overflow-hidden">
                        <h4 className="text-lg font-serif text-white group-hover:text-gold transition-colors">{item.name}</h4>
                        <div className="flex-grow border-b border-dotted border-gold/30 mx-4 opacity-50" />
                        <span className="text-gold font-bold">{item.price}</span>
                      </div>
                      {(item as any).desc && (
                        <p className="text-xs text-white/40 font-light italic leading-relaxed">
                          {(item as any).desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="mt-24 p-12 glass rounded-3xl text-center border-dashed border-gold/20">
            <h3 className="text-2xl font-serif text-gold mb-4 italic">Corporate Luncheons & Gatherings</h3>
            <p className="text-white/40 text-sm mb-8 font-light italic">
              Specialized menus available for industrial corporate events and private royal celebrations.
            </p>
            <Button variant="link" className="text-white border-b-2 border-red rounded-none pb-1 h-auto px-0 text-xs font-bold uppercase tracking-widest hover:text-red hover:no-underline hover:tracking-[0.3em] transition-all">
              Inquire for Private Events
            </Button>
          </div>
        </div>
      </div>
      <SEOSection />
    </div>
  );
}
