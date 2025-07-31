"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#book-demo", label: "Book a Demo" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Sonoma System Logo" width={48} height={48} className="rounded-lg" />
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <div className="hidden sm:flex gap-8 items-center text-base font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-cyan-300 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-[#0f172a] font-semibold px-5 py-2 rounded-full shadow hover:from-cyan-400 hover:to-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400">Contact</Link>
        </div>
        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0f172a] border-b border-white/10 flex flex-col items-center py-4 gap-4 sm:hidden animate-fade-in z-50">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-cyan-300 transition-colors text-lg px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-[#0f172a] font-semibold px-5 py-2 rounded-full shadow hover:from-cyan-400 hover:to-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 