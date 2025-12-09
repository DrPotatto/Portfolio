'use client';

import React from 'react';

interface ProjectFilterProps {
  categories?: string[];
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export default function ProjectFilter({ 
  categories = [], 
  activeFilter = 'all',
  onFilterChange 
}: ProjectFilterProps) {
  const allCategories = ['all', ...categories.filter(Boolean)];
  
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange?.(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeFilter === category
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              : 'bg-gray-900 border border-gray-800 text-gray-300 hover:bg-gray-800'
          }`}
        >
          {category === 'all' ? 'All Projects' : category}
        </button>
      ))}
    </div>
  );
}