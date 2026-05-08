import { motion } from 'motion/react';
import { ROOM_TIERS } from '../constants';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { SEOSection } from '../components/SEOSection';
import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';

export function Rooms() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    tier: ''
  });

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=60&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-50"
            alt="Suites Hero"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-black/60" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-4 block">World-Class Accommodations</span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-6 tracking-tighter">Luxury <span className="italic text-gold">Suites</span></h1>
            <p className="text-white/60 max-w-2xl mx-auto italic font-light text-lg">
              Experience the pinnacle of hospitality in Durgapur's most prestigious suites.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 py-32">

        {/* Booking Sidebar Engine */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 glass p-8 rounded-2xl gold-border gold-shadow">
            <h3 className="font-serif text-2xl text-gold mb-6 border-b border-gold/10 pb-4">Check Availability</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Check In Date</label>
                <div className="relative">
                  <Input 
                    type="date" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-gold [color-scheme:dark]"
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Check Out Date</label>
                <div className="relative">
                  <Input 
                    type="date" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-gold [color-scheme:dark]"
                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Guests</label>
                  <Select value={bookingData.guests} onValueChange={(v) => setBookingData({...bookingData, guests: v})}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-dark border-gold/20 text-white">
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 Persons</SelectItem>
                      <SelectItem value="3">3 Persons</SelectItem>
                      <SelectItem value="4+">4+ Persons</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                   <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Tier</label>
                   <Select value={bookingData.tier} onValueChange={(v) => setBookingData({...bookingData, tier: v})}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-gold">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-dark border-gold/20 text-white">
                      <SelectItem value="any">Any</SelectItem>
                      {ROOM_TIERS.map(t => <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full bg-red text-white py-6 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red/90 transform hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 mt-4 border-none gold-shadow">
                Search Availability
                <ArrowRight size={16} />
              </Button>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs text-white/40 italic">
                  <Phone size={14} className="text-gold" />
                  Direct Booking: +91 96099 00511
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room List */}
        <div className="lg:col-span-2 space-y-12">
          {ROOM_TIERS.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row group overflow-hidden glass rounded-3xl border border-white/5 hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-gold transition-colors">{room.name}</h2>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block">From</span>
                      <span className="text-xl font-serif text-gold font-bold">{room.price}</span>
                      <span className="text-[10px] text-white/30 block">/ Night</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm font-light mb-6 leading-relaxed italic border-l-2 border-gold/40 pl-4">
                    {room.description}
                  </p>
                  <div className="grid grid-cols-2 gap-y-3 mb-8">
                    {room.amenities.map(amenity => (
                      <div key={amenity} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60">
                        <Check size={12} className="text-gold" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="self-start border-white/20 text-white/80 px-8 py-6 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-gold hover:text-gold transition-all group-hover:gold-shadow bg-transparent">
                  View Details & Gallery
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SEOSection />
    </div>
  );
}
