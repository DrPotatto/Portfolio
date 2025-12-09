'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Lightbulb, 
  BarChart3, 
  Zap,
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle,
  Code,
  Layout
} from 'lucide-react';

interface ProjectOverviewProps {
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  timeline?: string;
  role: string;
  client?: string;
  category: string;
  technicalStack?: string[];
  keyFeatures?: string[];
}

const iconMap = {
  dollar: DollarSign,
  users: Users,
  trending: TrendingUp,
  check: CheckCircle,
};

export default function ProjectOverview({
  challenge,
  solution,
  results,
  timeline,
  role,
  client,
  category,
  technicalStack = [],
  keyFeatures = []
}: ProjectOverviewProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full mb-4 inline-block">
            BUSINESS CASE STUDY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From <span className="text-red-400">Challenge</span> to{' '}
            <span className="text-green-400">Solution</span> to{' '}
            <span className="text-blue-400">Results</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Challenge Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-red-500/20">
                <Target className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold">Business Challenge</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{challenge}</p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/20">
                <Lightbulb className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Design-Driven Solution</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{solution}</p>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold">Project Details</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Role</div>
                <div className="text-lg font-semibold">{role}</div>
              </div>
              
              {client && (
                <div>
                  <div className="text-sm text-gray-400 mb-1">Client</div>
                  <div className="text-lg font-semibold">{client}</div>
                </div>
              )}
              
              <div>
                <div className="text-sm text-gray-400 mb-1">Category</div>
                <div className="text-lg font-semibold">{category}</div>
              </div>
              
              {timeline && (
                <div>
                  <div className="text-sm text-gray-400 mb-1">Timeline</div>
                  <div className="text-lg font-semibold">{timeline}</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-green-500/20">
              <BarChart3 className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Measurable Business Impact</h3>
              <p className="text-gray-400">Quantifiable results delivered through design & development</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-800">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white">{result.value}</div>
                </div>
                
                <div className="text-lg font-semibold mb-2">{result.metric}</div>
                <p className="text-gray-400 text-sm">{result.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Stack Section */}
        {technicalStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-blue-500/20">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Technical Implementation</h3>
                <p className="text-gray-400">Built with modern technologies for optimal performance</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {technicalStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Next.js 14 Highlight */}
            {technicalStack.some(tech => tech.toLowerCase().includes('next.js')) && (
              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Layout className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-400">Next.js 14 Implementation</div>
                    <div className="text-sm text-gray-400">
                      Utilized App Router, Server Components, and optimized image loading for superior performance.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Key Features Section */}
        {keyFeatures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <CheckCircle className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Key Features & Capabilities</h3>
                <p className="text-gray-400">Designed and developed to solve specific user needs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ROI Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6">Business Value Created</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">Estimated Revenue Impact</div>
              <div className="text-2xl font-bold text-green-400">$150K+</div>
              <div className="text-xs text-gray-400">Annual potential increase for client</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">Development Efficiency</div>
              <div className="text-2xl font-bold text-blue-400">30-40%</div>
              <div className="text-xs text-gray-400">Faster time-to-market with Next.js 14</div>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">Scalability Score</div>
              <div className="text-2xl font-bold text-purple-400">9/10</div>
              <div className="text-xs text-gray-400">Architecture supporting future growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}