"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 z-0"
        >
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
            <p className="text-gray-400 tracking-[0.3em] uppercase text-sm mb-4">Precision & Vision</p>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
              JASMINEINK
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 max-w-lg mx-auto text-lg md:text-xl font-light mb-10"
          >
            A high-end tattoo studio redefining skin art in Sunny Enclave, Kharar.
          </motion.p>
          
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors"
          >
            Book Session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
           <span className="text-xs uppercase tracking-widest ml-2 text-gray-400">5.0 on Google</span>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Portfolio.</h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">Our recent works showcasing fine lines, intricate geometry, and custom realism.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative h-[400px] md:h-[600px] overflow-hidden bg-gray-900 rounded-xl"
          >
            <Image 
              src="/images/gallery_1.jpg" 
              alt="Work 1" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative h-[400px] md:h-[600px] overflow-hidden bg-gray-900 rounded-xl md:translate-y-20"
          >
            <Image 
              src="/images/machine.jpg" 
              alt="Tattoo Machine" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
            />
          </motion.div>
        </div>
      </section>

      {/* Studio/About Section */}
      <section id="about" className="py-20 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[700px] w-full rounded-2xl overflow-hidden order-2 md:order-1"
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">The Space.</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light">
              We believe the environment dictates the art. Our ultra-modern, sterilized studio provides a calm and luxurious atmosphere for your next piece. From the moment you walk in, Jasmineink delivers a premium experience tailored entirely to you.
            </p>
            <div className="h-[1px] w-full bg-gray-800 mb-8" />
            <div className="flex justify-between items-center text-xs md:text-sm uppercase tracking-widest text-gray-500">
              <span>Est. 2026</span>
              <span>Kharar, PB</span>
            </div>
          </motion.div>
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
                <a href="tel:08427971018" className="inline-block text-2xl font-light hover:text-gray-300 transition-colors">
                  084279 71018
                </a>
              </div>
            </div>
         </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900 flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-600 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} Tattoos by Jasmineink.</span>
        <span className="hidden md:inline">|</span>
        <a href="https://ishinder.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          Developed by Ishinder Singh
        </a>
      </footer>
    </main>
  );
}
