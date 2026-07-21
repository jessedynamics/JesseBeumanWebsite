"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter text-white">
          JB<span className="text-primary">.</span>
        </a>

        <nav className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300 ${scrolled ? "glass" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all"
        >
          Let's Talk
        </a>

        {/* Mobile menu button could go here */}
      </div>
    </motion.header>
  );
}
