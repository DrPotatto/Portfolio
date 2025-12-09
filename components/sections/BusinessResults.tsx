'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight } from 'lucide-react';

export default function BusinessResults() {
  const metrics = [
    { icon: TrendingUp, value: "215%", label: "Highest Growth Delivered", project: "Iron Strength Gym" },
    { icon: DollarSign, value: "85%", label: "AOV Increase", project: "Luxe Home" },
    { icon: Users, value: "5,000+", label: "Active Users Built", project: "KifKif.space" },
    { icon: Target, value: "42%", label: "Error Rate Reduction", project: "TradeFlow Pro" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">Design That Delivers</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Measurable Business Impact
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every project is tied to specific business KPIs and revenue metrics.
            Here's what my designs have achieved for clients:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <metric.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold">{metric.value}</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
              <p className="text-gray-400 text-sm">Achieved for {metric.project}</p>
              
              {/* Animated underline */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">What Could My Design Do For Your Business?</h3>
          <p className="text-gray-400 mb-6">
            Based on historical data from similar e-commerce projects:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">If your monthly revenue is:</div>
              <div className="text-3xl font-bold">$50,000</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">A 40% conversion increase means:</div>
              <div className="text-3xl font-bold text-green-400">+$20,000/mo</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">Annual impact:</div>
              <div className="text-3xl font-bold text-blue-400">$240,000</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <motion.a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Calculate Your Potential ROI
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
