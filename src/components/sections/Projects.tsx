"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Link from "next/link";

interface ProjectsProps {
  limit?: number;
}

export function Projects({ limit }: ProjectsProps) {
  const displayedProjects = limit ? resumeData.projects.slice(0, limit) : resumeData.projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Selected Work <span className="text-primary">.</span>
            </h2>
            <p className="text-gray-400 text-lg">A showcase of some of my recent projects</p>
          </div>
          
          {limit && (
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors"
            >
              View all projects <span>&rarr;</span>
            </Link>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-full glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-white/5 overflow-hidden flex items-center justify-center">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <span className="text-gray-500 text-sm font-mono tracking-wider">put portrait photo here</span>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-background transition-colors text-white">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.link.includes("github.com") && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-background transition-colors text-white">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
