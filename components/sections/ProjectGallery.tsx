// components/sections/ProjectGallery.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Target, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
  captions?: string[];
  projectTitle: string;
}

export default function ProjectGallery({ images, captions, projectTitle }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Take only the first 3 images
  const displayImages = images.slice(0, 3);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  // Business impact descriptions for each image
  const businessImpacts = [
    {
      icon: <Target className="w-4 h-4" />,
      title: "Conversion Focus",
      description: "Optimized for maximum user action"
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: "Growth Engine",
      description: "Designed to scale with business"
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "User-Centric",
      description: "Built around customer needs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Maximize2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">DESIGN IN ACTION</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">Strategic Design: </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {projectTitle}
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three key interfaces that drove measurable business results—each designed with specific ROI in mind.
          </p>
        </div>

        {/* Gallery Grid - Only 3 Images */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {displayImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Image Card */}
                <div 
                  className="relative overflow-hidden rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer bg-gray-900/30 mb-6"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image Container */}
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={image}
                      alt={captions?.[index] || `Key design ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-white">View Full Screen</span>
                          <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Impact Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700">
                      <div className="text-blue-400">
                        {businessImpacts[index].icon}
                      </div>
                      <span className="text-xs font-semibold text-white">
                        {businessImpacts[index].title}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content Below Image */}
                <div className="text-center">
                  <h3 className="font-bold text-lg text-white mb-2">
                    {captions?.[index] || `Key Interface ${index + 1}`}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3">
                    {businessImpacts[index].description}
                  </p>
                  
                  {/* Design Focus Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-purple-500' : 
                      'bg-green-500'
                    }`} />
                    <span className="text-xs font-medium text-gray-300">
                      {index === 0 ? 'Primary Conversion' : 
                       index === 1 ? 'Growth Feature' : 
                       'User Experience'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Business Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Design That Drives Business
              </h3>
              <p className="text-gray-400">
                Each interface was optimized for specific business outcomes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
                  3
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">
                  Key Interfaces
                </div>
                <div className="text-xs text-gray-500">
                  Focused on highest-impact screens
                </div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                  1 Goal
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">
                  Business Results
                </div>
                <div className="text-xs text-gray-500">
                  Every design decision measured by ROI
                </div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-2">
                  ∞ Impact
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">
                  Scalable Design
                </div>
                <div className="text-xs text-gray-500">
                  Systems that grow with your business
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>

              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-6xl max-h-[80vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={images[selectedIndex]}
                    alt={captions?.[selectedIndex] || `Project image ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
                
                <div className="text-center text-white mt-6 px-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {captions?.[selectedIndex] || `Key Design ${selectedIndex + 1}`}
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    {businessImpacts[selectedIndex % 3].description} • Strategic design element driving business outcomes
                  </p>
                </div>
              </motion.div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}