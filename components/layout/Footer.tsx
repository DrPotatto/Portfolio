'use client';

import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Work': [
      { href: '/work/trading-platform-ux', label: 'TradeFlow Pro' },
      { href: '/work/iron-strength-gym', label: 'Iron Strength Gym' },
      { href: '/work/cintaconnect', label: 'CintaConnect' },
      { href: '/work/luxe-home', label: 'Luxe Home' },
      { href: '/work/kifkif-space', label: 'KifKif.space' },
    ],
    'Services': [
      { href: '/about#services', label: 'E-commerce Design' },
      { href: '/about#services', label: 'Marketing Assets' },
      { href: '/about#services', label: 'CRO & Optimization' },
    ],
    'Connect': [
      { href: 'https://linkedin.com/in/oussama-ben-marzouk', label: 'LinkedIn' },
      { href: 'https://twitter.com', label: 'Twitter' },
      { href: 'https://instagram.com/oussama.ben.marzouk', label: 'Instagram' },
      { href: 'mailto:oussama.ben.marzouk.3@gmail.com"', label: 'Email' },
    ],
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl tracking-tight">OBM</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Oussama Ben Marzouk</div>
                  <div className="text-sm text-gray-400">E-commerce & Marketing Design</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing conversion-focused systems that drive measurable business growth for e-commerce companies.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/oussama-ben-marzouk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-300" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-gray-300" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-300" />
                </a>
                <a
                  href="mailto:contact@oussama.design"
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-300" />
                </a>
              </div>
            </div>
            
            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Newsletter CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">E-commerce Growth Insights</h3>
                <p className="text-gray-400">
                  Get bi-weekly tips on conversion optimization, marketing assets, and e-commerce design.
                </p>
              </div>
              
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your work email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Oussama Ben Marzouk. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}