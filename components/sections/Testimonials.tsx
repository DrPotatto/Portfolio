'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Working with Alex transformed our e-commerce business. The 3D product visualization alone increased our conversion rate by 58%.",
    author: "Sarah Chen",
    role: "CEO, Luxe Couture",
    rating: 5
  },
  {
    quote: "The interactive watch configurator reduced customer support inquiries by 70% and significantly increased our average order value.",
    author: "Michael Rodriguez",
    role: "Head of Digital, Chronos Watches",
    rating: 5
  },
  {
    quote: "Alex's design thinking transformed our onboarding flow. Our subscriber base has grown 3x in just 6 months.",
    author: "Jessica Park",
    role: "Product Lead, GlamBox",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Testimonials</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Client Success<br />Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from brands that have transformed their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-3xl border border-border bg-gradient-to-b from-card to-card/50">
                <div className="absolute -top-6 -left-6 w-12 h-12 text-primary/20">
                  <Quote className="w-full h-full" />
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-lg font-medium mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div>
                  <div className="font-bold text-lg">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}