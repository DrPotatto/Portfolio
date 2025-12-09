import Hero from '@/components/sections/Hero'
import MetricsShowcase from '@/components/sections/MetricsShowcase'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Services from '@/components/sections/Services'
import FounderProject from '@/components/sections/FounderProject'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import TestimonialForm from '@/components/sections/TestimonialForm'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsShowcase />
      <FeaturedProjects />
      <Services />
      <FounderProject />
      <Process />
      <Testimonials />
      <TestimonialForm />
      <CTA />
    </>
  )
}