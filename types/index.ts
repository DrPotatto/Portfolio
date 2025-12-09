export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  year: string
  category: 'ecommerce' | 'branding' | '3d' | 'social' | 'web'
  industry: string
  client: string
  duration: string
  team: string
  tools: string[]
  tags: string[]
  coverImage: string
  thumbnail: string
  gallery: string[]
  businessGoal?: string
  marketingAssets?: string[]
  solution?: string
  results: {
    conversionIncrease: number
    revenueGrowth: number
    bounceRateDecrease: number
    mobileConversion: number
    customerSatisfaction: number
  }
  metrics?: Array<{
    label: string
    value: string
    description: string
  }>
  testimonial?: {
    text: string
    author: string
    role: string
    avatar: string
  }
  liveUrl?: string
  caseStudyUrl: string
}