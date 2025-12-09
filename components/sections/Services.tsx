'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Box, Smartphone, BarChart3, Palette, Users, Megaphone, TrendingUp, Layers } from 'lucide-react'

const services = [
  {
    title: 'E-commerce Conversion',
    description: 'Designing high-conversion product pages, checkout flows, and shopping experiences that reduce bounce rates and increase AOV.',
    icon: <ShoppingBag className="w-6 h-6" />,
    deliverables: ['Landing Page Design', 'Checkout Optimization', 'Product Page Templates', 'Mobile Shopping UX'],
    projects: 24
  },
  {
    title: 'Marketing Campaign Assets',
    description: 'Creating cohesive visual systems for email campaigns, social ads, and digital marketing that drive engagement and conversions.',
    icon: <Megaphone className="w-6 h-6" />, // Add Megaphone import
    deliverables: ['Email Templates', 'Social Ad Creatives', 'Campaign Landing Pages', 'Retargeting Assets'],
    projects: 32
  },
  {
    title: 'Growth-Focused UX',
    description: 'User experience design focused on customer acquisition, retention, and lifetime value optimization.',
    icon: <TrendingUp className="w-6 h-6" />,
    deliverables: ['User Onboarding Flows', 'Retention Systems', 'Referral Programs', 'Pricing Page Design'],
    projects: 18
  },
  {
    title: 'Brand Systems for Scale',
    description: 'Building scalable design systems and visual identities that maintain consistency across all marketing channels.',
    icon: <Layers className="w-6 h-6" />, // Add Layers import
    deliverables: ['Design Systems', 'Brand Guidelines', 'Content Templates', 'Asset Libraries'],
    projects: 21
  }
]

export default function Services() {
  return (
    <section className="py-32">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Services</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Comprehensive<br />E-commerce Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end design and development services for high-growth brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border bg-gradient-to-b from-card to-card/50 hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{service.projects}</span> Projects
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}