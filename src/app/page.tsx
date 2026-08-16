"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  X, 
  ChevronDown, 
  MessageSquare, 
  Maximize2 
} from "lucide-react";
import { useState } from "react";

// Portfolio items with categories
const PORTFOLIO_ITEMS = [
  { id: "1", title: "Custom Arm Piece", category: "Custom", image: "/images/gallery_1.jpg", desc: "Intricate floral and geometric fusion artwork." },
  { id: "2", title: "Botanical Snake", category: "Fine Line", image: "/images/fineline.jpg", desc: "Delicate micro-realism fine line on wrist." },
  { id: "3", title: "Majestic Lion", category: "Realism", image: "/images/realism.jpg", desc: "High-contrast black & grey shoulder portrait." },
  { id: "4", title: "Precision Rotary Tool", category: "Studio", image: "/images/machine.jpg", desc: "Medical grade sterilized tattoo setup in action." },
];

// Safety standards data
const SAFETY_STANDARDS = [
  { icon: ShieldCheck, title: "100% Autoclave Sterilized", text: "Medical-grade sterilization protocols for all reusable studio equipment." },
  { icon: Sparkles, title: "Single-Use Needles", text: "Every needle and cartridge is brand new, sealed, and disposed of after a single session." },
  { icon: Award, title: "Vegan & Non-Toxic Inks", text: "We exclusively use organic, EU-certified, cruelty-free premium tattoo inks." },
  { icon: CheckCircle2, title: "Certified Hygiene", text: "Exceeding international health department regulations and safety standards." }
];

// FAQs data
const FAQS = [
  { question: "How do I book a consultation or session?", answer: "You can click the 'Book Session' button anywhere on this page or message us directly on WhatsApp at 084279 71018. We will discuss your concept, placement, size, and provide a price quote." },
  { question: "What are your hygiene & sterilization standards?", answer: "Your health and safety are our top priority. We use hospital-grade autoclaves, 100% single-use disposable needles, and eco-friendly vegan inks. All work surfaces are sanitized before and after every client." },
  { question: "How should I prepare for my tattoo appointment?", answer: "Make sure to get a good night's sleep, stay well hydrated, and eat a hearty meal before your session. Avoid alcohol 24 hours prior and wear comfortable clothing that allows easy access to the tattoo area." },
  { question: "What is your tattoo aftercare process?", answer: "We provide detailed aftercare instructions and medical-grade protective film (SecondSkin) after your session. Keep the area clean, avoid direct sunlight and swimming for 2 weeks, and apply our recommended aftercare balm." },
];

// Client Testimonials
const TESTIMONIALS = [
  { name: "Amanpreet Kaur", rating: 5, quote: "Jasmine is an absolute master of fine line tattoos! The detail on my forearm piece is mind-blowing. The studio is super clean and luxurious." },
  { name: "Rahul Sharma", rating: 5, quote: "Best tattoo experience in Kharar/Chandigarh region! Super professional, painless experience, and great hygiene standards." },
  { name: "Priya Verma", rating: 5, quote: "I was nervous for my first tattoo, but Jasmine made me feel so comfortable. 5 stars isn't enough!" }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Interactive states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    style: "Fine Line",
    placement: "Forearm",
    date: ""
  });

  const filteredPortfolio = selectedCategory === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Jasmineink! I would like to book a tattoo session.%0A%0A*Name:* ${bookingData.name}%0A*Phone:* ${bookingData.phone}%0A*Style:* ${bookingData.style}%0A*Placement:* ${bookingData.placement}%0A*Preferred Date:* ${bookingData.date}`;
    window.open(`https://wa.me/918427971018?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Hero Tattoo"
            fill
            className="object-cover opacity-40 brightness-75 grayscale-[20%]"
            priority
          />
        </motion.div>
        
        <div className="z-10 text-center px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-gray-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">Precision & Vision</p>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
              JASMINEINK
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 max-w-lg mx-auto text-base md:text-xl font-light mb-10 px-4"
          >
            A high-end luxury tattoo studio redefining fine-line and realism skin art in Sunny Enclave, Kharar.
          </motion.p>
          
          <motion.button 
            onClick={() => setIsBookingOpen(true)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full text-xs md:text-sm uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors shadow-2xl"
          >
            Book Session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-gray-800">
           <div className="flex text-yellow-500">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="w-3.5 h-3.5 fill-yellow-500" />
             ))}
           </div>
           <span className="text-[11px] uppercase tracking-widest text-gray-300 font-medium">5.0 Rated on Google Reviews</span>
        </div>
      </section>

      {/* Safety & Hygiene Standards Banner */}
      <section className="py-16 bg-[#0a0a0a] border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SAFETY_STANDARDS.map((std, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#050505] border border-gray-900 hover:border-gray-700 transition-all flex flex-col items-center md:items-start text-center md:text-left"
              >
                <std.icon className="w-8 h-8 text-gray-300 mb-4" />
                <h3 className="text-base font-semibold mb-2">{std.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{std.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Portfolio Gallery */}
      <section id="gallery" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Portfolio.</h2>
            <p className="text-gray-400 max-w-md">Filter by style to inspect our precision craftsmanship.</p>
          </div>

          {/* Style Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-[#0a0a0a] p-1.5 rounded-full border border-gray-800">
            {["All", "Fine Line", "Realism", "Custom", "Studio"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all font-medium ${
                  selectedCategory === cat 
                    ? "bg-white text-black font-semibold shadow-lg" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-[450px] md:h-[550px] overflow-hidden bg-gray-900 rounded-2xl cursor-pointer border border-gray-900 hover:border-gray-700 transition-all"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 border border-gray-800 px-3 py-1 rounded-full bg-black/50">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-3 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-300 font-light">{item.desc}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Studio/About Section */}
      <section id="about" className="py-20 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[700px] w-full rounded-2xl overflow-hidden order-2 md:order-1 border border-gray-800"
          >
            <Image 
              src="/images/studio.jpg" 
              alt="Studio Interior" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 block">Meet Jasmineink</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">The Studio & Vision.</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 font-light">
              We believe environment dictates art. Our ultra-modern, sterilized studio provides a peaceful, sterile, and high-end atmosphere for your skin art.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light">
              Specializing in fine line florals, custom geometric shapes, and deep black-and-grey realism, Jasmineink treats every single session as a permanent masterpiece.
            </p>
            <div className="h-[1px] w-full bg-gray-800 mb-8" />
            <div className="flex justify-between items-center text-xs md:text-sm uppercase tracking-widest text-gray-500">
              <span>Est. 2026</span>
              <span>Kharar, PB</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-[#050505] px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 block">Verified Feedback</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Client Words.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-gray-900 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">"{rev.quote}"</p>
              </div>
              <div className="border-t border-gray-900 pt-4 flex justify-between items-center">
                <span className="text-sm font-semibold">{rev.name}</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-wider">Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-32 bg-[#0a0a0a] px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked.</h2>
            <p className="text-gray-400 text-sm">Everything you need to know before your tattoo session.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-800 rounded-2xl overflow-hidden bg-[#050505] transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-900/50 transition-colors"
                >
                  <span className="text-base md:text-lg font-medium">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === index ? "rotate-180 text-white" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto text-center">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 md:mb-16">Connect.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto text-center md:text-left">
              <div className="p-8 md:p-10 border border-gray-800 rounded-2xl bg-[#0a0a0a] hover:border-gray-600 transition-colors flex flex-col items-center md:items-start">
                <MapPin className="w-8 h-8 mb-6 text-gray-400" />
                <h3 className="text-xl font-medium mb-4">Location</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  36A, Sector 125, <br />
                  Sunny Enclave, <br />
                  Kharar, Punjab 140301
                </p>
              </div>
              
              <div className="p-8 md:p-10 border border-gray-800 rounded-2xl bg-[#0a0a0a] hover:border-gray-600 transition-colors flex flex-col justify-between items-center md:items-start">
                <div className="flex flex-col items-center md:items-start">
                  <Phone className="w-8 h-8 mb-6 text-gray-400" />
                  <h3 className="text-xl font-medium mb-4">Inquiries</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Call or WhatsApp us to discuss your design, pricing, and availability.
                  </p>
                </div>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-white text-black py-4 rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors"
                >
                  Book Session Now
                </button>
              </div>
            </div>
         </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900 flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-600 uppercase tracking-widest px-4">
        <span>&copy; {new Date().getFullYear()} Tattoos by Jasmineink.</span>
        <span className="hidden md:inline">|</span>
        <a href="https://ishinder.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          Developed by Ishinder Singh
        </a>
      </footer>

      {/* Floating WhatsApp Quick-Chat Button */}
      <a 
        href="https://wa.me/918427971018?text=Hi%20Jasmineink!%20I'd%20like%20to%20inquire%20about%20a%20tattoo%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600/90 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-110 flex items-center justify-center border border-emerald-400/30"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-white" />
      </a>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <Image 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                fill 
                className="object-contain" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Multi-Step Booking Drawer Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBookingOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-md bg-[#0a0a0a] h-full p-8 overflow-y-auto border-l border-gray-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight">Book a Session</h3>
                  <button onClick={() => setIsBookingOpen(false)} className="p-2 hover:bg-gray-800 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleWhatsAppBooking} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={bookingData.name}
                      onChange={e => setBookingData({...bookingData, name: e.target.value})}
                      placeholder="e.g. Amanpreet Kaur"
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3.5 text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={bookingData.phone}
                      onChange={e => setBookingData({...bookingData, phone: e.target.value})}
                      placeholder="e.g. 084279 71018"
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3.5 text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Preferred Style</label>
                    <select 
                      value={bookingData.style}
                      onChange={e => setBookingData({...bookingData, style: e.target.value})}
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3.5 text-sm focus:border-white focus:outline-none transition-colors"
                    >
                      <option value="Fine Line">Fine Line</option>
                      <option value="Black & Grey Realism">Black & Grey Realism</option>
                      <option value="Custom Geometric">Custom Geometric</option>
                      <option value="Cover Up">Cover Up</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Placement & Size</label>
                    <input 
                      type="text" 
                      value={bookingData.placement}
                      onChange={e => setBookingData({...bookingData, placement: e.target.value})}
                      placeholder="e.g. Forearm, 4 inches"
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3.5 text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      value={bookingData.date}
                      onChange={e => setBookingData({...bookingData, date: e.target.value})}
                      className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3.5 text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    Continue via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="mt-8 text-center text-xs text-gray-500">
                Direct WhatsApp consultation with Jasmineink
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
