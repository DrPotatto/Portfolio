'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Users,
  Rocket,
  Zap,
  CheckCircle,
  Award,
  Briefcase,
  Globe,
  Code,
  Palette
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: TrendingUp, value: "215%", label: "Highest Growth Delivered", desc: "Iron Strength Gym campaign" },
    { icon: DollarSign, value: "85%", label: "AOV Increase", desc: "Luxe Home 3D e-commerce" },
    { icon: Target, value: "42%", label: "Error Reduction", desc: "TradeFlow Pro trading platform" },
    { icon: Users, value: "5,000+", label: "Users Built For", desc: "KifKif.space reward platform" },
  ];

  const services = [
    {
      icon: Rocket,
      title: "E-commerce Design Systems",
      description: "Conversion-optimized design systems that increase AOV and reduce cart abandonment",
      features: ["Product page optimization", "Checkout flow redesign", "Mobile-first commerce"]
    },
    {
      icon: Zap,
      title: "Marketing Asset Creation",
      description: "High-converting marketing assets that drive measurable campaign results",
      features: ["Social media campaigns", "Email marketing templates", "Landing page design"]
    },
    {
      icon: Target,
      title: "Conversion Rate Optimization",
      description: "Data-driven UX improvements that directly impact your bottom line",
      features: ["A/B testing implementation", "User behavior analysis", "Funnel optimization"]
    }
  ];

  const journey = [
    { year: "2016", title: "Started in Digital Marketing", desc: "Built campaigns for local businesses, learned direct response marketing" },
    { year: "2018", title: "Transitioned to Product Design", desc: "Focused on SaaS and e-commerce platforms, learned technical implementation" },
    { year: "2020", title: "Specialized in E-commerce", desc: "Worked with 7-figure e-commerce brands, mastered conversion optimization" },
    { year: "2022", title: "Founded KifKif.space", desc: "Built reward platform to 5,000+ users, learned founder-level metrics" },
    { year: "2024", title: "Focus on High-Growth Startups", desc: "Helping companies like Capy-Era scale through strategic design" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        <div className="container relative z-10 px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full mb-6 inline-block">
                E-COMMERCE & MARKETING DESIGNER
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block">Design That</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Drives Business Growth
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm Oussama Ben Marzouk. I don't just make things look pretty—I design systems that increase revenue, 
                reduce costs, and scale marketing efforts for e-commerce companies like Capy-Era.
                <span className="block mt-4 font-semibold">
                  Founder of KifKif.space (5,000+ users) with hands-on experience in CAC, LTV, and conversion metrics.
                </span>
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/work" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  View Case Studies
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border border-gray-700 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
                >
                  Book Strategy Call
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Your actual photo */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src="/images/about/profile.jpg"
                  alt="Oussama Ben Marzouk - E-commerce & Marketing Designer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Stats floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-green-400">8+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-blue-400">40+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Impact Stats */}
      <section className="py-20 bg-black">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-300">Design That Delivers</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Measurable Business Impact
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold">{stat.value}</div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
                
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full mb-4 inline-block">
              WHAT I DO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-300">Specialized Services for</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                E-commerce Growth
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I focus on three core areas that directly impact your revenue and customer acquisition costs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors group"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Journey */}
      <section className="py-20 bg-black">
        <div className="container px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full mb-4 inline-block">
              FOUNDER JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-300">From Marketer to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Founder & Strategist
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My unique journey gives me insight into both marketing execution and product strategy.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
                      <div className="text-sm font-semibold text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-black" />
                  
                  {/* Empty space */}
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Drive Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how strategic design can impact your business metrics. 
              I offer free 30-minute strategy calls for e-commerce founders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Book Free Strategy Call
                <Rocket className="w-5 h-5" />
              </a>
              <a 
                href="/work" 
                className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
              >
                View Case Studies
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                <div className="text-2xl font-bold text-green-400">30 min</div>
                <div className="text-sm text-gray-400">Free Call</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">No Pitch</div>
                <div className="text-sm text-gray-400">Strategy Only</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">ROI Focus</div>
                <div className="text-sm text-gray-400">Business Metrics</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">Action Plan</div>
                <div className="text-sm text-gray-400">Delivered After</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}