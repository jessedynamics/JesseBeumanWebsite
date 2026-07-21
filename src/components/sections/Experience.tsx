"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {resumeData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 mt-1.5 shadow-[0_0_15px_rgba(0,243,255,0.5)] z-10" />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <span className="text-primary font-mono text-sm">{exp.duration}</span>
                      </div>
                      
                      <div className="text-gray-300 font-medium mb-4 flex items-center gap-2">
                        {exp.company} <span className="w-1 h-1 rounded-full bg-gray-500" /> {exp.location}
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start">
                            <span className="text-primary mr-2 mt-1">▹</span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
