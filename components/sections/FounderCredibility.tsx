'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Clock, Target } from 'lucide-react';

export default function FounderCredibility() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-400 mb-4 block">
              FOUNDER-LED DESIGN THINKING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built &amp; Scaled a Platform to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}5,000+ Active Users
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              KifKif.space isn't just a design project—it's proof I understand user acquisition costs, 
              retention metrics, and conversion optimization from a founder's perspective.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Users, value: "5,000+", label: "Active Users" },
                { icon: TrendingUp, value: "87%", label: "Retention Rate" },
                { icon: Clock, value: "34%", label: "MoM Growth" },
                { icon: Target, value: "2.3x", label: "LTV Increase" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <div className="text-2xl font-bold">{item.value}</div>
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
            
            <motion.a 
              href="https://kifkif.space" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-700 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Visit KifKif.space
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Platform mockup with metrics overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800">
              <img 
                src="/images/projects/kifkif/platform-overview.webp" 
                alt="KifKif Platform"
                className="w-full h-auto"
              />
              
              {/* Metric overlays */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm text-gray-300">User Growth</div>
                <div className="text-2xl font-bold text-green-400">+34% MoM</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm text-gray-300">Retention</div>
                <div className="text-2xl font-bold text-blue-400">87%</div>
              </div>
            </div>
            
            {/* Testimonial card */}
            <div className="absolute -bottom-6 -left-6 max-w-sm bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-4">
                As a marketing director, seeing Oussama build and scale his own platform demonstrates exactly the kind of data-driven design thinking we need.
              </p>
              <div className="text-sm">
                <div className="font-semibold">Marketing Director</div>
                <div className="text-gray-400">E-commerce Brand</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}