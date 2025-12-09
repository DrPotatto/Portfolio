'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Building, User, Star } from 'lucide-react'

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    testimonial: '',
    rating: 5
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', company: '', role: '', testimonial: '', rating: 5 })
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-4 block">Share Your Experience</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Business Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              For companies and business owners who have worked with Oussama. 
              Share how our collaboration drove measurable results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You for Your Testimonial!</h3>
                  <p className="text-muted-foreground">
                    Your feedback has been submitted. We appreciate you taking the time to share your experience.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        <Building className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Your Role (e.g., CEO, Marketing Director)"
                      required
                      className="w-full px-4 py-4 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Project Rating</label>
                    <div className="flex gap-2 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= formData.rating
                                ? 'fill-primary text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="testimonial"
                      value={formData.testimonial}
                      onChange={handleChange}
                      placeholder="Describe your experience working with Oussama. Focus on business impact, results achieved, and the value delivered to your company..."
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Please focus on measurable results and business impact.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Business Testimonial
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    This form is exclusively for businesses and clients who have worked with Oussama.
                    All testimonials are verified before publication.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-8 rounded-3xl border border-border bg-gradient-to-b from-card to-card/50">
                <h3 className="text-2xl font-bold mb-6">Testimonial Guidelines</h3>
                
                <ul className="space-y-4">
                  {[
                    'Focus on measurable business results',
                    'Mention specific projects or services',
                    'Describe the impact on your company',
                    'Share challenges that were overcome',
                    'Be honest and authentic'
                  ].map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
                <h4 className="text-lg font-bold mb-4">What We Value Most</h4>
                <p className="text-muted-foreground">
                  Testimonials that demonstrate how design decisions translated into business growth, 
                  increased revenue, or improved operational efficiency are particularly valuable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}