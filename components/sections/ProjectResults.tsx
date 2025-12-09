'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Users } from 'lucide-react';

interface ProjectResultsProps {
  metrics: Array<{
    before: string;
    after: string;
    improvement: string;
    label: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string;
  };
}

export default function ProjectResults({ metrics, testimonial }: ProjectResultsProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">The </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Numbers Don't Lie
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every design decision was tied to measurable business outcomes.
          </p>
        </div>

        {/* Metrics Comparison */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8"
            >
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className="flex items-baseline justify-center gap-2">
                  <div className="text-2xl text-gray-500 line-through">{metric.before}</div>
                  <div className="text-4xl font-bold text-green-400">{metric.after}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 rounded-full">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{metric.improvement}</span>
                  <span className="text-gray-400">improvement</span>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-6 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                  style={{ width: metric.improvement.replace('%', '') + '%' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        {testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12"
          >
            <div className="text-6xl text-blue-400 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
              <div>
                <div className="font-semibold text-lg">{testimonial.author}</div>
                <div className="text-gray-400">
                  {testimonial.role}
                  {testimonial.company && ` • ${testimonial.company}`}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ROI Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Potential Impact for Your Business</h3>
          <p className="text-gray-400 mb-8">
            Based on these results, similar e-commerce businesses could expect:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 rounded-xl p-6">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-2xl font-bold">20-85%</div>
              <div className="text-gray-400">Increase in key metrics</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-2xl font-bold">3-6 months</div>
              <div className="text-gray-400">ROI timeline</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold">10x</div>
              <div className="text-gray-400">Return on design investment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}