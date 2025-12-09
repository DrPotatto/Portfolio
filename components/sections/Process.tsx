'use client'

import { motion } from 'framer-motion'
import { Search, Layout, Palette, Code, Rocket, BarChart } from 'lucide-react'

const processSteps = [
  { step: '01', title: 'Discovery', icon: <Search className="w-6 h-6" /> },
  { step: '02', title: 'Architecture', icon: <Layout className="w-6 h-6" /> },
  { step: '03', title: 'Design', icon: <Palette className="w-6 h-6" /> },
  { step: '04', title: 'Development', icon: <Code className="w-6 h-6" /> },
  { step: '05', title: 'Launch', icon: <Rocket className="w-6 h-6" /> },
  { step: '06', title: 'Optimization', icon: <BarChart className="w-6 h-6" /> }
]

export default function Process() {
  return (
    <section className="py-32">
      <div className="container px-6">
        <div className="mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Process</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Strategic Design<br />Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A proven methodology ensuring exceptional results through collaboration and iteration.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}
              >
                <div className="p-8 rounded-3xl border border-border bg-gradient-to-b from-card to-card/50">
                  <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-mono text-primary mb-1">{step.step}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background hidden lg:block ${
                  index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}