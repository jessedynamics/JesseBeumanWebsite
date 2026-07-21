"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { resumeData } from "@/data/resume";
import Link from "next/link";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] -z-10" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay -z-10" />

      <div className="container mx-auto px-6 z-10">
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Available for new opportunities</span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-primary-gradient">{resumeData.name}</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            {resumeData.title}. <br className="hidden md:block"/>
            {resumeData.about}
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-foreground text-background font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="/resume.pdf"
              target="_blank"
              className="group px-8 py-4 rounded-xl glass-card font-semibold flex items-center gap-2 transition-all hover:bg-white/5 hover:scale-105 active:scale-95"
            >
              Resume <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 flex items-center gap-6">
            <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href={`mailto:${resumeData.contact.email}`} className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
