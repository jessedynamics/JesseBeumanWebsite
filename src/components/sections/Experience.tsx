"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/data/resume";
import Map, { MapRef, Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

// A small sub-component for the timeline item so we can track when it's in view
function TimelineItem({ 
  exp, 
  index, 
  isActive, 
  onClick, 
  onInView 
}: { 
  exp: any, 
  index: number, 
  isActive: boolean, 
  onClick: () => void,
  onInView: () => void 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col items-start pl-8 md:pl-12 cursor-pointer transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
      onClick={onClick}
    >
      {/* Timeline node */}
      <div className={`absolute left-0 top-0 w-4 h-4 rounded-full border-2 -translate-x-1/2 mt-1.5 transition-colors duration-300 z-10 ${isActive ? 'bg-primary border-primary shadow-[0_0_15px_rgba(0,243,255,0.8)]' : 'bg-background border-primary/50'}`} />

      {/* Content */}
      <div className="w-full">
        <div className={`glass-card p-6 md:p-8 rounded-2xl border transition-all duration-300 ${isActive ? 'border-primary/50 bg-white/5 transform scale-[1.02]' : 'border-white/10 hover:border-primary/30 bg-transparent'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <span className="text-primary font-mono text-sm">{exp.duration}</span>
          </div>
          
          <div className="text-gray-300 font-medium mb-4 flex items-center gap-2">
            {exp.company} <span className="w-1 h-1 rounded-full bg-gray-500" /> {exp.location}
          </div>

          <ul className="space-y-2 mb-6">
            {exp.description.map((desc: string, i: number) => (
              <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start">
                <span className="text-primary mr-2 mt-1">▹</span>
                {desc}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-auto">
            {exp.skills.map((skill: string, i: number) => (
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
}

export function Experience() {
  const mapRef = useRef<MapRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Set the map center to the first experience initially (if available)
  const initialLocation = resumeData.experience[0]?.coordinates;

  const handleFlyTo = (index: number) => {
    const coords = resumeData.experience[index]?.coordinates;
    if (coords && mapRef.current) {
      mapRef.current.flyTo({
        center: [coords.lng, coords.lat],
        zoom: coords.zoom || 12,
        duration: 1500,
        essential: true,
      });
    }
  };

  const handleClick = (index: number) => {
    setIsClicking(true);
    setActiveIndex(index);
    handleFlyTo(index);

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      setIsClicking(false);
    }, 1600); // slightly longer than flyTo duration
  };

  const handleInView = (index: number) => {
    if (!isClicking && activeIndex !== index) {
      setActiveIndex(index);
      handleFlyTo(index);
    }
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 text-lg">My journey</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Left Column: Map */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 glass-card lg:sticky lg:top-32 order-1 lg:order-1 z-10 self-start">
            <Map
              ref={mapRef}
              initialViewState={{
                longitude: initialLocation?.lng || 5.4714,
                latitude: initialLocation?.lat || 51.4416,
                zoom: 6
              }}
              mapStyle="/custom-map-style.json"
              interactive={true}
              scrollZoom={false}
              dragPan={true}
              doubleClickZoom={true}
              attributionControl={false}
            >
              {resumeData.experience.map((exp, index) => {
                if (!exp.coordinates) return null;
                const isActive = activeIndex === index;
                return (
                  <Marker 
                    key={index} 
                    longitude={exp.coordinates.lng} 
                    latitude={exp.coordinates.lat}
                    anchor="center"
                  >
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-primary border-white scale-150 shadow-[0_0_15px_rgba(0,243,255,0.8)]' : 'bg-background border-primary/50 cursor-pointer hover:scale-125'}`}
                         onClick={(e) => {
                           e.stopPropagation();
                           handleClick(index);
                         }}
                    />
                  </Marker>
                );
              })}
            </Map>
            <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
          </div>

          {/* Right Column: Timeline */}
          <div className="relative order-2 lg:order-2">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            <div className="flex flex-col gap-12 pb-[30vh]">
              {resumeData.experience.map((exp, index) => (
                <TimelineItem
                  key={index}
                  exp={exp}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={() => handleClick(index)}
                  onInView={() => handleInView(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
