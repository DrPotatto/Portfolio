'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, User } from 'lucide-react';

interface ProjectPhoto {
  url: string;
  caption: string;
  type: 'process' | 'result' | 'design' | 'development';
}

interface ProjectPhotosProps {
  photos: ProjectPhoto[];
  title: string;
}

export default function ProjectPhotos({ photos, title }: ProjectPhotosProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  // Group photos by type
  const processPhotos = photos.filter(p => p.type === 'process');
  const resultPhotos = photos.filter(p => p.type === 'result');
  const designPhotos = photos.filter(p => p.type === 'design');
  const developmentPhotos = photos.filter(p => p.type === 'development');

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <User className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">PROJECT PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">Behind the Design:</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              My Creative Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how I transformed ideas into results—from initial sketches to final implementation.
          </p>
        </div>

        {/* Process Photos */}
        {processPhotos.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              Design Process & Iterations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
                  onClick={() => openLightbox(photos.indexOf(photo))}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">{photo.caption}</span>
                        <Maximize2 className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded">
                      Process
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Design & Development Photos */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {designPhotos.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                UI/UX Design Work
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {designPhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
                    onClick={() => openLightbox(photos.indexOf(photo))}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded">
                        Design
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {developmentPhotos.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                Development Implementation
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {developmentPhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
                    onClick={() => openLightbox(photos.indexOf(photo))}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded">
                        Code
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Photos */}
        {resultPhotos.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              Final Results & Impact
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
                  onClick={() => openLightbox(photos.indexOf(photo))}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-400 rounded">
                      Result
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Designer's Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl"
        >
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
                <img
                  src="/images/about/profile.jpg"
                  alt="Oussama Ben Marzouk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="md:hidden">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                      src="/images/about/profile.jpg"
                      alt="Oussama Ben Marzouk"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Oussama Ben Marzouk</h4>
                  <p className="text-gray-400">Lead Designer & Developer</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-blue-400">My approach to this project:</span> {title} required balancing aesthetic appeal with functional requirements. I focused on creating intuitive user flows while ensuring the technical architecture could support real-time features.
                </p>
                <p className="text-gray-300">
                  The most rewarding part was seeing how strategic design decisions directly impacted business metrics—whether it was reducing user errors in trading platforms or increasing engagement in social campaigns.
                </p>
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedIndex].url}
                alt={photos[selectedIndex].caption}
                className="w-full h-full object-contain"
              />
              <div className="text-center text-white mt-4">
                {photos[selectedIndex].caption}
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {selectedIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}