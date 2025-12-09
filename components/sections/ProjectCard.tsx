import React from 'react';
import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  metrics: {
    value: string;
    label: string;
    icon: 'trending' | 'users' | 'dollar';
  }[];
  slug: string;
}

const iconMap = {
  trending: TrendingUp,
  users: Users,
  dollar: DollarSign,
};

export default function BusinessProjectCard({ 
  title, 
  description, 
  category, 
  image, 
  metrics,
  slug 
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-all">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
              {category}
            </span>
            <h3 className="text-2xl font-bold mt-2">{title}</h3>
          </div>
          <a 
            href={`/work/${slug}`}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        {/* Business Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-blue-400" />
                  <div className="text-lg font-bold text-white">{metric.value}</div>
                </div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}