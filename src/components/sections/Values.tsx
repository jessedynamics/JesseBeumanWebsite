"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Lightbulb, Target, Zap } from "lucide-react";

export function Values() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb": return <Lightbulb className="w-8 h-8 text-primary" />;
      case "Target": return <Target className="w-8 h-8 text-primary" />;
      case "Zap": return <Zap className="w-8 h-8 text-primary" />;
      default: return <Lightbulb className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <section className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Core Values <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 text-lg">Principles that drive my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-card text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {getIcon(value.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
