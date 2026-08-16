"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Header Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Watermark */}
          <div className="flex flex-col">
            <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-white hover:opacity-80 transition-opacity">
              JASMINEINK<span className="text-gray-500">.</span>
            </Link>
            <a 
              href="https://ishinder.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-mono"
            >
              Developed by Ishinder Singh
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-gray-400">
            <Link href="#gallery" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="#about" className="hover:text-white transition-colors">Studio</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            <a 
              href="https://wa.me/918427971018" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-full border border-gray-800 transition-all font-medium flex items-center gap-2"
            >
              WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-full bg-gray-900 text-white border border-gray-800 hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile & Tablet Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl pt-28 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-widest text-gray-500 font-mono block mb-4">Navigation</span>
              <nav className="flex flex-col space-y-6 text-3xl font-bold tracking-tight">
                <Link 
                  href="#gallery" 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-400 transition-colors flex items-center justify-between"
                >
                  Portfolio
                  <span className="text-xs font-normal text-gray-600 uppercase tracking-widest font-mono">01</span>
                </Link>
                <Link 
                  href="#about" 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-400 transition-colors flex items-center justify-between"
                >
                  Studio & Safety
                  <span className="text-xs font-normal text-gray-600 uppercase tracking-widest font-mono">02</span>
                </Link>
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-400 transition-colors flex items-center justify-between"
                >
                  Contact & Map
                  <span className="text-xs font-normal text-gray-600 uppercase tracking-widest font-mono">03</span>
                </Link>
              </nav>
            </div>

            {/* Mobile Actions Footer */}
            <div className="space-y-4 pt-8 border-t border-gray-900">
              <a 
                href="tel:08427971018"
                className="w-full bg-gray-900 border border-gray-800 text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-semibold tracking-wider uppercase"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Call 084279 71018
              </a>

              <a 
                href="https://ishinder.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center text-xs text-gray-500 uppercase tracking-widest pt-2 font-mono"
              >
                Developed by Ishinder Singh
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
