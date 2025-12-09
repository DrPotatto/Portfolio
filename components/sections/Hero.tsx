'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene3D from '@/components/3d/Scene3D';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      yPercent: -20,
      scale: 0.95,
      rotationX: -10,
      transformPerspective: 1000,
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-400">E-COMMERCE & MARKETING DESIGN SPECIALIST</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8"
          >
            <span className="block text-white">Designing</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Revenue-Driving Systems
            </span>
            <span className="block text-white">That Deliver</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Measurable Growth
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            I build conversion-optimized design systems that deliver 
            <span className="font-semibold text-white"> 40-215% measurable results</span> 
            for e-commerce startups like Capy-Era. 
            <span className="block mt-2">Founder of KifKif.space (5,000+ users).</span>
          </motion.p>
          
          {/* Business Metrics Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-green-400">215%</div>
              <div className="text-sm text-gray-400">Membership Growth</div>
            </div>
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-blue-400">85%</div>
              <div className="text-sm text-gray-400">AOV Increase</div>
            </div>
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-purple-400">42%</div>
              <div className="text-sm text-gray-400">Error Reduction</div>
            </div>
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-yellow-400">73%</div>
              <div className="text-sm text-gray-400">Match Increase</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a 
              href="#work" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-medium hover:opacity-90 transition-all flex items-center gap-2 group"
            >
              View Case Studies with Metrics
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-gray-700 rounded-full text-lg font-medium hover:bg-gray-900/50 transition-all"
            >
              Book Strategy Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce text-gray-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}