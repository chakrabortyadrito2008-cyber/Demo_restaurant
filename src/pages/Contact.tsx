import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { Textarea } from '@/src/components/ui/textarea';

import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { SEOSection } from '../components/SEOSection';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Room Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean, message?: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const path = 'contactInquiries';
    try {
      await addDoc(collection(db, path), {
        ...formState,
        createdAt: serverTimestamp()
      });
      
      setSubmitStatus({ 
        success: true, 
        message: 'Your royal inquiry has been securely stored in our vault. We shall respond with haste.' 
      });
      // Reset form
      setFormState({ name: '', email: '', subject: 'Room Inquiry', message: '' });
    } catch (err) {
      // Use the mandated error handler
      try {
        handleFirestoreError(err, OperationType.CREATE, path);
      } catch (finalErr: any) {
        setSubmitStatus({ 
          success: false, 
          message: 'Security protocol error. Please try again later or contact us directly.' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left: Info & Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 italic">Speak with <span className="not-italic text-gold">Royalty</span></h1>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all font-bold">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Address</h4>
                <p className="text-white font-light">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all font-bold">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Inquiries</h4>
                <p className="text-white font-light">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all font-bold">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Email</h4>
                <p className="text-white font-light">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>
          
          <form className="glass p-10 rounded-3xl gold-border space-y-6" onSubmit={handleSubmit}>
            {submitStatus && (
              <div className={`p-4 rounded-xl text-sm ${submitStatus.success ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red/10 text-red border border-red/20'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Name</label>
                <Input 
                  required
                  value={formState.name}
                  placeholder="Royal Guest"
                  className="bg-white/5 border-white/10 text-white focus-visible:ring-gold"
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Email</label>
                <Input 
                  required
                  type="email" 
                  value={formState.email}
                  placeholder="guest@mail.com"
                  className="bg-white/5 border-white/10 text-white focus-visible:ring-gold"
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Inquiry Type</label>
              <Select value={formState.subject} onValueChange={(v) => setFormState({...formState, subject: v})}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-gold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-primary-dark border-gold/20 text-white">
                  <SelectItem value="Room Inquiry">Room Inquiry</SelectItem>
                  <SelectItem value="Table Reservation">Table Reservation</SelectItem>
                  <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-bold">Message</label>
              <Textarea 
                required
                value={formState.message}
                rows={4}
                placeholder="How may we assist you?"
                className="bg-white/5 border-white/10 text-white focus-visible:ring-gold min-h-[120px]"
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red text-white py-6 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-black transform hover:scale-102 transition-all flex items-center justify-center gap-3 border-none gold-shadow"
            >
              {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
              {!isSubmitting && <Send size={16} />}
            </Button>
          </form>
        </motion.div>

        {/* Right: Brand Visual */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           className="h-[600px] lg:h-auto min-h-[500px] relative rounded-3xl overflow-hidden gold-border gold-shadow group"
        >
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
            alt="Sher E Bengal Luxury Exterior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          
          <div className="absolute top-8 left-8">
            <div className="glass px-6 py-3 rounded-full border border-gold/30 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Concierge Online</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 space-y-6">
            <div className="glass p-8 rounded-2xl border-t border-gold/20">
              <h3 className="text-3xl font-serif text-white mb-4 italic">Experience the <span className="not-italic text-gold">Presence</span></h3>
              <p className="text-white/60 text-sm font-light italic mb-6 leading-relaxed">
                Located in the heart of Durgapur's City Center, Sher E Bengal stands as a monument to fine living and culinary heritage.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <Phone size={14} />
                   </div>
                   <span className="text-xs font-bold text-white">+91 96099 00511</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <Mail size={14} />
                   </div>
                   <span className="text-xs font-bold text-white">info@sherebengal.com</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/919609900511" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-2xl transition-all group"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={24} />
                <span className="font-bold tracking-widest text-xs uppercase">Chat on WhatsApp</span>
              </div>
              <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </div>

      <SEOSection />
    </div>
  );
}
