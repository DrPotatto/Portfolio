'use client'

import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, Globe } from 'lucide-react'
import Link from 'next/link'

export default function FounderProject() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-sm font-medium text-primary mb-4 block">Founder Experience</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Built & Scaled<br />KifKif.space</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              As Founder & Product Designer, built a reward-based platform scaling to thousands of active users 
              in Tunisia, focusing on trust-building UX and scalable growth systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl border border-border bg-card">
                <h3 className="text-3xl font-bold mb-4">Reward-Based Platform</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Users earn real money through task-based rewards. Designed for clarity, trust, and 
                  seamless user progression from onboarding to payout.
                </p>
                
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-5 h-5 text-primary" />
                  <Link 
                    href="https://www.kifkif.space" 
                    target="_blank"
                    className="text-primary hover:underline font-medium"
                  >
                    kifkif.space
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-primary/5">
                    <div className="text-2xl font-bold mb-1">5k+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-primary/5">
                    <div className="text-2xl font-bold mb-1">TND 50k+</div>
                    <div className="text-sm text-muted-foreground">Payouts Distributed</div>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-lg font-semibold">Task Completion</div>
                  <div className="text-sm text-muted-foreground">92% completion rate</div>
                </div>
                <div className="p-6 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-lg font-semibold">User Retention</div>
                  <div className="text-sm text-muted-foreground">45% MoM growth</div>
                </div>
              </div>
            </motion.div>

            {/* Design Focus Areas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Growth-Focused Design Decisions</h3>
              
              {[
                {
                  title: 'Trust-Building UX',
                  description: 'Clear value proposition, transparent reward systems, and secure payment flows to build user confidence.'
                },
                {
                  title: 'Scalable Task System',
                  description: 'Designed modular task components that allowed rapid expansion of reward categories.'
                },
                {
                  title: 'Mobile-First Payout Flow',
                  description: 'Optimized for Tunisia\'s mobile-first market with simplified withdrawal process.'
                },
                {
                  title: 'Gamified Progression',
                  description: 'Level-based rewards and achievement systems to increase engagement and retention.'
                }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border bg-card/50">
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}