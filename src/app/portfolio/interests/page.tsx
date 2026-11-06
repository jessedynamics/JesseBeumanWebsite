"use client";

import { resumeData } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function InterestsPage() {
  const [selectedInterest, setSelectedInterest] = useState<typeof resumeData.personalInterests[0] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedInterest?.gallery) {
      setGalleryIndex((prev) => (prev + 1) % selectedInterest.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedInterest?.gallery) {
      setGalleryIndex((prev) => (prev - 1 + selectedInterest.gallery.length) % selectedInterest.gallery.length);
    }
  };

  const openModal = (interest: typeof resumeData.personalInterests[0]) => {
    setSelectedInterest(interest);
    setGalleryIndex(0);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Beyond <span className="text-primary">Code.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A glimpse into what keeps me inspired, energized, and creative outside of the engineering world.
          </motion.p>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {resumeData.personalInterests.map((interest, index) => {
            // Check if the item is commented out in resume.ts (it wouldn't appear here if it was, but we still handle it)
            if (!interest) return null;
            return (
              <motion.div 
                key={index} 
                layoutId={`card-${interest.title}`}
                variants={item}
                onClick={() => openModal(interest)}
                className="group relative h-80 rounded-3xl overflow-hidden glass-card flex flex-col justify-end p-8 cursor-pointer"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 bg-background z-0">
                  {interest.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={interest.image} 
                      alt={interest.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105 transform" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                      <span className="text-gray-500 text-sm font-mono tracking-wider">put {interest.title.toLowerCase()} photo here</span>
                    </div>
                  )}
                  {/* Gradient Overlay for text readability - reduced fog */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent group-hover:via-background/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.h3 layoutId={`title-${interest.title}`} className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {interest.title}
                  </motion.h3>
                  <motion.p layoutId={`desc-${interest.title}`} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {interest.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedInterest && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInterest(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-6">
              <motion.div
                layoutId={`card-${selectedInterest.title}`}
                className="w-full max-w-5xl h-[70vh] bg-foreground/5 glass-card rounded-3xl overflow-hidden relative flex flex-col pointer-events-auto"
              >
                <button 
                  onClick={() => setSelectedInterest(null)}
                  className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Carousel Image */}
                <div className="relative flex-grow bg-black/50 flex items-center justify-center overflow-hidden">
                  {selectedInterest.gallery && selectedInterest.gallery.length > 0 ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        key={galleryIndex}
                        src={selectedInterest.gallery[galleryIndex]} 
                        alt={`${selectedInterest.title} gallery ${galleryIndex}`} 
                        className="w-full h-full object-contain animate-in fade-in duration-500"
                      />
                      {selectedInterest.gallery.length > 1 && (
                        <>
                          <button onClick={prevImage} className="absolute left-4 p-3 bg-black/50 hover:bg-primary hover:text-black rounded-full text-white transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button onClick={nextImage} className="absolute right-4 p-3 bg-black/50 hover:bg-primary hover:text-black rounded-full text-white transition-colors">
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </>
                  ) : selectedInterest.image ? (
                     // eslint-disable-next-line @next/next/no-img-element
                     <img 
                        src={selectedInterest.image} 
                        alt={selectedInterest.title} 
                        className="w-full h-full object-cover" 
                      />
                  ) : (
                    <span className="text-gray-500 font-mono tracking-wider">add images to the gallery array in resume.ts</span>
                  )}
                </div>

                {/* Modal Text */}
                <div className="p-8 bg-background/90 backdrop-blur-md">
                  <motion.h3 layoutId={`title-${selectedInterest.title}`} className="text-3xl font-display font-bold mb-2">
                    {selectedInterest.title}
                  </motion.h3>
                  <motion.p layoutId={`desc-${selectedInterest.title}`} className="text-gray-300">
                    {selectedInterest.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
