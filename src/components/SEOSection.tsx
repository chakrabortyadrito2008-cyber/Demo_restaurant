import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Shield, Star, Award } from 'lucide-react';

export function SEOSection() {
  return (
    <section className="py-24 bg-black/40 px-6 border-y border-gold/10 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4 block">Regional Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">The Heart of <span className="italic text-gold">Durgapur Hospitality</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm italic font-light">
            Strategically located in City Center, Sher E Bengal serves as the preferred destination for business leaders, leisure travelers, and food connoisseurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              icon: MapPin,
              title: "Prime Location",
              desc: "Situated on Jadabendra Panja Ave, City Center, with seamless access to industrial hubs and transit points."
            },
            {
              icon: Star,
              title: "Culinary Heritage",
              desc: "Widely recognized as Durgapur's best restaurant for authentic Mughlai, Indian, and Global cuisines."
            },
            {
              icon: Shield,
              title: "Corporate Preferred",
              desc: "A safe and sophisticated atmosphere, making it the top choice for VIPs and corporate delegations."
            },
            {
              icon: Award,
              title: "Royal Hospitality",
              desc: "Two decades of setting the gold standard in premium stays and grand banquet celebrations."
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-white font-serif text-xl mb-4">{feature.title}</h3>
              <p className="text-white/40 text-xs font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Placeholder for local partner logos or recognition badges */}
           <div className="text-[10px] uppercase tracking-widest text-white font-bold">TripAdvisor Recommended</div>
           <div className="text-[10px] uppercase tracking-widest text-white font-bold">Google Top Rated</div>
           <div className="text-[10px] uppercase tracking-widest text-white font-bold">MakeMyTrip Preferred</div>
           <div className="text-[10px] uppercase tracking-widest text-white font-bold">FSSAI Certified</div>
        </div>
      </div>
    </section>
  );
}
