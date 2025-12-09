import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Code, Palette } from 'lucide-react';
import { projects } from '@/data/projects';

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="container px-6">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">BUSINESS-FOCUSED PORTFOLIO</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block">Design ×</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Development
            </span>
            <span className="block">Case Studies</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Real projects delivering measurable business results through strategic design and technical execution. 
            Each case study shows the complete journey from business challenge to implemented solution.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Palette className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-gray-300">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-gray-300">Next.js 14 Development</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
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
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-gray-400 mt-1 text-sm">{project.subtitle}</p>
                    )}
                  </div>
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Role & Year */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>
                
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
                
                {/* Status Badge */}
                {project.status && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      backgroundColor: project.status === 'Completed' ? '#10b98120' : 
                                      project.status === 'Active' ? '#3b82f620' : 
                                      project.status === 'In Development' ? '#f59e0b20' : '#6b728020',
                      color: project.status === 'Completed' ? '#10b981' : 
                            project.status === 'Active' ? '#3b82f6' : 
                            project.status === 'In Development' ? '#f59e0b' : '#6b7280',
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{
                        backgroundColor: project.status === 'Completed' ? '#10b981' : 
                                        project.status === 'Active' ? '#3b82f6' : 
                                        project.status === 'In Development' ? '#f59e0b' : '#6b7280',
                      }}
                    />
                    {project.status}
                  </div>
                )}
                
                {/* Tech Stack Preview */}
                {project.technicalStack && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800">
                    {project.technicalStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                      >
                        {tech.includes('Next.js') ? 'Next.js 14' : tech.split(' ')[0]}
                      </span>
                    ))}
                    {project.technicalStack.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                        +{project.technicalStack.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">40-215%</div>
            <div className="text-gray-400">Average Results Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">Next.js 14</div>
            <div className="text-gray-400">Primary Tech Stack</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Drive Similar Results?</h3>
              <p className="text-gray-400">
                Let's discuss how strategic design and development can impact your business metrics.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book Free Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}