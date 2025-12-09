'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react'

export default function MetricsShowcase() {
  const metrics = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: '42%',
      label: 'Avg. Conversion Lift',
      description: 'Across e-commerce projects'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '3.2x',
      label: 'Average ROI',
      description: 'On design investment'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '68%',
      label: 'Reduced Cart Abandonment',
      description: 'Through UX optimization'
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: '24/7',
      label: 'Growth Monitoring',
      description: 'Data-driven optimization'
    }
  ]

  return (
    <section className="py-20">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Marketing-Focused Results</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design decisions measured by business impact and revenue growth.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">
                  {metric.icon}
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}