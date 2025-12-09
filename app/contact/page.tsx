'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Calendar, 
  CheckCircle, 
  MessageSquare,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    businessType: '',
    monthlyRevenue: '',
    challenge: '',
    timeline: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        businessType: '',
        monthlyRevenue: '',
        challenge: '',
        timeline: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const businessTypes = [
    'E-commerce Company',
    'Marketing Agency',
    'SaaS Startup',
    'Physical Product Brand',
    'Service Business',
    'Other'
  ];

  const revenueRanges = [
    'Under $10K/month',
    '$10K - $50K/month',
    '$50K - $200K/month',
    '$200K - $1M/month',
    'Over $1M/month'
  ];

  const timelineOptions = [
    'Immediate (Within 1 month)',
    'Short-term (1-3 months)',
    'Planning (3-6 months)',
    'Future (6+ months)',
    'Just exploring options'
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "ROI-Focused Design",
      description: "Every design decision tied to business metrics and revenue impact"
    },
    {
      icon: TrendingUp,
      title: "Scalable Systems",
      description: "Build once, scale infinitely with your growth"
    },
    {
      icon: Shield,
      title: "Data-Driven Approach",
      description: "Decisions based on analytics, not assumptions"
    },
    {
      icon: Clock,
      title: "Fast Execution",
      description: "2-4 week sprints for quick iterations and testing"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full mb-6 inline-block">
                FREE STRATEGY SESSION
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block text-gray-300">Let's Discuss Your</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Business Growth
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Book a free 30-minute strategy call to discuss how design can impact your 
                conversion rates, customer acquisition costs, and revenue growth.
                <span className="block mt-4 font-semibold text-white">
                  No sales pitch—just actionable insights for your business.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Benefits */}
      <section className="py-20 bg-black">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Work With Me for E-commerce Design?
                </h2>
                <p className="text-gray-400 mb-8">
                  Unlike creative designers, I focus on business outcomes. Here's what you get:
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <benefit.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial */}
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-6 mt-8">
                <div className="text-4xl text-blue-400 mb-4">"</div>
                <p className="text-gray-300 mb-4">
                  Oussama's approach to design is refreshingly business-focused. He spoke our language—CAC, LTV, conversion rates—and delivered a system that increased our AOV by 32% in 3 months.
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Marketing Director</div>
                  <div className="text-gray-400">E-commerce Brand ($2M+ revenue)</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Strategy Call Booked!</h3>
                  <p className="text-gray-300 mb-6">
                    I'll review your business details and send a calendar invite within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-400">
                    <MessageSquare className="w-5 h-5" />
                    <span>Check your email for confirmation</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Book Your Strategy Session</h3>
                      <p className="text-gray-400">30 minutes • Free • No obligation</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="Capy-Era (Optional)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        What type of business do you run? *
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Monthly Revenue Range *
                      </label>
                      <select
                        name="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Select revenue range</option>
                        {revenueRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      <p className="text-xs text-gray-500 mt-2">
                        This helps me tailor the strategy to your scale
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Biggest Design/Marketing Challenge *
                      </label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="e.g., Low conversion rates, high cart abandonment, poor mobile experience..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline for Implementation *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Hidden field for targeting */}
                    <input type="hidden" name="targetAudience" value="ecommerce_founders" />
                    
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Book Free Strategy Call
                      <Send className="w-5 h-5" />
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to receive a calendar invite and follow-up emails.
                      You can unsubscribe at any time.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gray-300">Other Ways to</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Get in Touch
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Prefer email or need to share files? Reach out directly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a 
				href="https://wa.me/21654743797"
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-colors"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message</h3>
                <p className="text-gray-400 mb-4">For detailed inquiries</p>
                <div className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  WhatsApp
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/oussama-ben-marzouk" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-colors"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-400 mb-4">For professional networking</p>
                <div className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors flex items-center justify-center gap-1">
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
              
              <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-fit mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-400 mb-4">Working remotely with</p>
                <div className="text-gray-300 font-semibold">
                  Global Clients
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Focus: E-commerce & Marketing Companies
                </div>
              </div>
            </div>
            
            {/* Process Timeline */}
            <div className="mt-20 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Strategy Call", desc: "30-minute free consultation" },
                  { step: "2", title: "Analysis", desc: "Deep dive into your business metrics" },
                  { step: "3", title: "Proposal", desc: "Custom plan with ROI projections" },
                  { step: "4", title: "Execution", desc: "2-4 week sprints with regular updates" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}