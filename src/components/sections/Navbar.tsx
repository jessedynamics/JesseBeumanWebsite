"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
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
        <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-white">
          JB<span className="text-primary">.</span>
        </Link>

        <nav className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300 ${scrolled ? "glass" : "bg-white/5 backdrop-blur-md border border-white/5"}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Link 
          href="/contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all"
        >
          Let's Talk
        </Link>
      </div>
    </motion.header>
  );
}
