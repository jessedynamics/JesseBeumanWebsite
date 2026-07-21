"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export function Interests() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Interests <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 text-lg">What I explore outside of work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-primary transition-colors">{interest.title}</h3>
              <p className="text-gray-400 relative z-10">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
