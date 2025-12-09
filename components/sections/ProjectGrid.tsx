'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: string;
  year: number;
  role: string;
  client?: string;
  tools?: string[];
  tags?: string[];
  heroImage?: string;
  measurableResults?: Array<{
    metric: string;
    value: string;
  }>;
}

interface ProjectGridProps {
  projects: Project[];
  showAll?: boolean;
}

const iconMap = {
  trending: TrendingUp,
  users: Users,
  dollar: DollarSign,
};

export default function ProjectGrid({ projects, showAll = false }: ProjectGridProps) {
  const [filter, setFilter] = useState('all');
  
  // Safely handle undefined arrays
  const allCategories = ['all', ...new Set(projects.map(p => p.category).filter(Boolean))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className="py-20">
      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'bg-gray-900 border border-gray-800 text-gray-300 hover:bg-gray-800'
            }`}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black/50 hover:border-gray-700 transition-all"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden">
              {project.heroImage ? (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-4xl opacity-30">{project.title.charAt(0)}</div>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-2 inline-block">
                    {project.category || 'Project'}
                  </span>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-gray-400 mt-1">{project.subtitle}</p>
                  )}
                </div>
                <Link
                  href={`/work/${project.slug}`}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
              
              {project.description && (
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
              )}
              
              {/* Business Metrics */}
              {project.measurableResults && project.measurableResults.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.measurableResults.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="bg-gray-800/30 rounded-lg p-3">
                      <div className="text-lg font-bold text-white">{result.value}</div>
                      <div className="text-xs text-gray-400">{result.metric}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Tools/Tags - Safely handle undefined */}
              {project.tools && project.tools.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-800">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
              )}
              
              {/* Project Details */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800 text-sm text-gray-400">
                <span>{project.role}</span>
                <span>{project.year}</span>
              </div>
            </div>
            
            {/* Hover effect line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* View All Button (if not showing all) */}
      {!showAll && filteredProjects.length > 6 && (
        <div className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Empty State */}
      {displayProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-4xl mb-4">📁</div>
          <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
          <p className="text-gray-400">Try selecting a different category.</p>
        </div>
      )}
    </section>
  );
}