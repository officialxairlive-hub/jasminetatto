import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattoos by Jasmineink | Premium Studio",
  description: "Ultra-modern, high-end tattoo studio located in Sunny Enclave, Kharar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050505] text-white`}
      >
        <nav className="fixed top-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 mix-blend-difference gap-4 md:gap-0 bg-black/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest uppercase">
              Jasmineink.
            </Link>
            <a href="https://ishinder.in" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest mt-1 hidden md:block">
              Developed by Ishinder Singh
            </a>
          </div>
          <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300 items-center">
            <Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link>
            <Link href="#about" className="hover:text-white transition-colors">Studio</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            <a href="https://ishinder.in" target="_blank" rel="noopener noreferrer" className="text-[9px] text-gray-500 hover:text-white transition-colors md:hidden ml-2 border-l border-gray-700 pl-4">
              Developed by Ishinder Singh
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
