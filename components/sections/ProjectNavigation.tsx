'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface ProjectNavigationProps {
  previousProject?: {
    slug: string;
    title: string;
    category: string;
  };
  nextProject?: {
    slug: string;
    title: string;
    category: string;
  };
}

export default function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Previous Project */}
          {previousProject && (
            <Link
              href={`/work/${previousProject.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 text-blue-400 mb-4">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm font-semibold">Previous Project</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {previousProject.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{previousProject.category}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          )}

          {/* Next Project */}
          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-700 transition-all md:text-right"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 text-blue-400 mb-4 justify-end">
                  <span className="text-sm font-semibold">Next Project</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {nextProject.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{nextProject.category}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          )}

          {/* View All Projects */}
          {!previousProject && !nextProject && (
            <Link
              href="/work"
              className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  View All Case Studies
                </h3>
                <p className="text-gray-400 mb-6">
                  Explore more projects with measurable business results
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full">
                  <span>See all projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Drive Similar Results?</h3>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how design can impact your business metrics.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}