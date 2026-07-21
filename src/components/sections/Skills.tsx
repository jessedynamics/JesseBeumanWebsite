"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech Stack <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {resumeData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 243, 255, 0.4)" 
              }}
              className="px-6 py-3 glass rounded-full text-white font-medium border border-white/10 hover:border-primary/50 transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
