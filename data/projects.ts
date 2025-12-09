export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: number | string;
  role: string;
  client?: string;
  liveUrl?: string;
  featuredImage: string;
  status?: 'Completed' | 'In Development' | 'Active';
  
  // Business sections
  businessChallenge: string;
  designSolution: string;
  technicalImplementation?: string[];
  keyFeatures?: string[];
  
  // Marketing assets
  marketingAssets?: string[];
  
  // Measurable results
  measurableResults: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  
  // Technical stack
  technicalStack?: string[];
  
  // Visual assets
  heroImage: string;
  gallery: string[];
  galleryCaptions?: string[];
  
  // Testimonial
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "tradeflow-pro",
    title: "TradeFlow Pro",
    subtitle: "AI-Powered Trading Platform with Real-time Analytics",
    category: "Fintech SaaS",
    year: 2024,
    role: "Lead UI/UX Designer & Full-Stack Developer",
    client: "Fintech Startup",
    liveUrl: "https://tradeflow-pro.com",
    status: "Completed",
	featuredImage: '/images/projects/tradeflow-pro/dashboard-view.webp',
    
    businessChallenge: "Professional traders needed a unified platform combining advanced charting, AI-driven insights, and automated trading scripts. Existing solutions were fragmented across multiple tools with poor integration and monthly costs exceeding $500 per user.",
    
    designSolution: "Designed and developed a comprehensive trading platform featuring real-time charting with 50+ indicators, AI-powered trade analysis, and a marketplace for trading scripts. Created an intuitive dashboard that consolidates portfolio management, market analysis, and automated trading in one interface.",
    
    technicalImplementation: [
      "Built with Next.js 14 App Router for optimal performance",
      "Real-time WebSocket connections for live market data",
      "AI integration for trade pattern recognition",
      "Server-side rendering for SEO and initial load performance",
      "Progressive Web App capabilities for desktop-like experience"
    ],
    
    keyFeatures: [
      "Real-time TradingView charts with custom indicators",
      "AI trade assistant with risk assessment",
      "Script marketplace with 100+ automated strategies",
      "Portfolio analytics with performance tracking",
      "Mobile-responsive trading interface"
    ],
    
    marketingAssets: [
      "Platform demo videos showcasing AI features",
      "Technical documentation for developer API",
      "Case studies on trader ROI improvement",
      "Comparison content vs. traditional platforms"
    ],
    
    measurableResults: [
      { metric: "User Error Reduction", value: "42%", description: "Streamlined interface reduced trading mistakes and misclicks" },
      { metric: "Platform Performance", value: "<100ms", description: "Real-time chart updates with WebSocket integration" },
      { metric: "User Retention", value: "89%", description: "Monthly active users retained due to AI features" },
      { metric: "Development Efficiency", value: "30% faster", description: "Reduced development time using Next.js 14 optimizations" }
    ],
    
    technicalStack: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "WebSocket API",
      "TradingView Charts",
      "OpenAI API Integration",
      "PostgreSQL",
      "Redis for caching",
      "Docker & Vercel"
    ],
    
    heroImage: "/images/projects/tradeflow-pro/hero-showcase.webp",
    gallery: [
      "/images/projects/tradeflow-pro/dashboard-view.webp",
      "/images/projects/tradeflow-pro/ai-analysis-tool.webp",
      "/images/projects/tradeflow-pro/mobile-trading.webp",
      "/images/projects/tradeflow-pro/script-marketplace.webp"
    ],
    
    
    
    testimonial: {
      quote: "Oussama delivered a production-ready platform that exceeded our expectations. His dual expertise in design and Next.js 14 development meant we avoided the typical handoff issues and launched 2 months ahead of schedule. The platform now serves 500+ active traders daily.",
      author: "Michael Chen",
      role: "CTO & Co-founder",
      company: "TradeFlow Pro"
    }
  },
  {
    slug: "ft45-fitness",
    title: "FT45 Fitness",
    subtitle: "Instagram Marketing System Driving Gym Membership Growth",
    category: "Fitness Marketing",
    year: 2023,
    role: "Marketing Designer & Growth Strategist",
    status: "Completed",
	featuredImage: '/images/projects/ft45-fitness/gym.webp',
    
    businessChallenge: "A premium fitness studio with excellent facilities was struggling with inconsistent social media presence, resulting in low membership growth and high customer acquisition costs despite positive word-of-mouth.",
    
    designSolution: "Created a complete Instagram marketing ecosystem including templated content calendars, story sequences, targeted ad creatives, and a user-generated content system. Focused on transformation stories, community building, and clear value propositions.",
    
    keyFeatures: [
      "90-day content calendar with daily posts",
      "Instagram Story templates (50+ variations)",
      "Transformation journey post series",
      "Targeted ad creatives for different demographics",
      "UGC system encouraging member testimonials",
      "Hashtag strategy increasing discoverability"
    ],
    
    marketingAssets: [
      "Content calendar spreadsheet with posting schedule",
      "Adobe Illustrator templates for rapid content creation",
      "Video tutorials for staff on content creation",
      "Analytics dashboard tracking campaign performance"
    ],
    
    measurableResults: [
      { metric: "Instagram Followers", value: "+312%", description: "Increase from 1,200 to 5,000+ in 3 months" },
      { metric: "Engagement Rate", value: "8.7%", description: "Significantly above industry average of 1.5%" },
      { metric: "Membership Inquiries", value: "+187%", description: "Increase in qualified leads from social media" },
      { metric: "Cost Per Lead", value: "$2.14", description: "Reduced from previous $8.50 through targeted content" },
      { metric: "Class Occupancy", value: "94%", description: "Average class fill rate after campaign launch" }
    ],
    
    heroImage: "/images/projects/ft45-fitness/hero-showcase.webp",
    gallery: [
      "/images/projects/ft45-fitness/feed-grid.webp",
      "/images/projects/ft45-fitness/story-sequence.webp",
      "/images/projects/ft45-fitness/ad-creatives.webp",
      "/images/projects/ft45-fitness/gym.webp"
    ],
    
    
    
    testimonial: {
      quote: "The marketing system Oussama created became our growth engine. We went from struggling to fill classes to having waiting lists within 90 days. His designs not only looked great but were strategically crafted to convert viewers into members.",
      author: "Sarah Johnson",
      role: "Owner & Head Trainer",
      company: "FT45 Fitness"
    }
  },
  {
    slug: "cintaconnect",
    title: "CintaConnect",
    subtitle: "Secure Video Dating Platform with AI Moderation",
    category: "Social Technology",
    year: "2024",
    role: "Product Designer & Frontend Developer",
    client: "Dating Startup",
    status: "In Development",
    
    businessChallenge: "Existing video chat platforms lacked proper safety features and community guidelines, leading to poor user experiences. There was a clear market need for a secure alternative to Omegle with modern features and respectful interactions.",
    
    designSolution: "Designing a video dating platform with AI-powered content moderation, multi-factor user verification, and interactive features that encourage meaningful connections. The interface prioritizes safety without compromising on engagement.",
    
    technicalImplementation: [
      "Next.js 14 for optimal performance and SEO",
      "WebRTC implementation for high-quality video calls",
      "AI moderation API for real-time content filtering",
      "Advanced user matching algorithm",
      "Real-time messaging with end-to-end encryption"
    ],
    
    keyFeatures: [
      "AI content moderation detecting inappropriate behavior",
      "Three-step user verification system",
      "Interest-based matching with compatibility scoring",
      "Interactive ice-breaker games for awkward moments",
      "Privacy-focused design (disables screenshots)",
      "Report and block system with human review"
    ],
    
    measurableResults: [
      { metric: "Moderation Accuracy", value: "94%", description: "AI system successfully flagging inappropriate content" },
      { metric: "User Satisfaction", value: "4.7/5", description: "Average rating from 200+ beta testers" },
      { metric: "Meaningful Connections", value: "68%", description: "Users reporting positive interactions" },
      { metric: "Safety Reports", value: "83% decrease", description: "Compared to similar platforms without moderation" }
    ],
    
    technicalStack: [
      "Next.js 14",
      "TypeScript",
      "WebRTC",
      "OpenAI Moderation API",
      "Socket.io for real-time",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    
    heroImage: "/images/projects/cintaconnect/hero-showcase.webp",
    gallery: [
      "/images/projects/cintaconnect/matching-interface.webp",
      "/images/projects/cintaconnect/video-chat-ui.webp",
      "/images/projects/cintaconnect/safety-features.webp",
      "/images/projects/cintaconnect/mobile-app-preview.webp"
    ],
    
    
  },
  {
    slug: "kifkif-space",
    title: "KifKif.space",
    subtitle: "Reward Platform Scaling to 2,000+ Active Users",
    category: "Founder Project",
    year: "2023-Present",
    role: "Founder, Product Designer & Full-Stack Developer",
    status: "Active",
    
    businessChallenge: "Tunisian market lacked unified reward platforms, with brands running isolated loyalty programs leading to low user engagement. Customers wanted a single platform to earn rewards across multiple brands.",
    
    designSolution: "Built and launched a gamified reward platform connecting brands with users through interactive challenges, cashback rewards, and social sharing features. Designed the complete user journey from signup to cashout.",
    
    technicalImplementation: [
      "Built with Next.js 14 for optimal performance in Tunisia's variable internet conditions",
      "Real-time reward tracking and notification system",
      "Automated payout processing with fraud detection",
      "Scalable architecture handling 10,000+ monthly visits",
      "Mobile-first design for Tunisia's 85% mobile internet usage"
    ],
    
    keyFeatures: [
      "Brand challenge system with tiered rewards",
      "Social sharing multipliers increasing engagement",
      "Real-time progress tracking for challenges",
      "Automated cashout system to local payment methods",
      "Brand analytics dashboard showing campaign performance",
      "Referral program with bonus rewards"
    ],
    
    measurableResults: [
      { metric: "Active Users", value: "2,000+", description: "Monthly active users consistently engaging with challenges" },
      { metric: "Retention Rate", value: "67%", description: "Users returning monthly to complete new challenges" },
      { metric: "Brand Partners", value: "28", description: "Active brand partnerships including major retailers" },
      { metric: "User Earnings", value: "$15,000+", description: "Total rewards cashed out by users to date" },
      { metric: "Platform Revenue", value: "$8,500 MRR", description: "Monthly recurring revenue from brand subscriptions" }
    ],
    
    technicalStack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Redis for caching",
      "Stripe for payments",
      "Tailwind CSS",
      "Vercel for hosting"
    ],
    
    heroImage: "/images/projects/kifkif-space/hero-showcase.webp",
    gallery: [
      "/images/projects/kifkif-space/platform-dashboard.webp",
      "/images/projects/kifkif-space/reward-challenges.webp",
      "/images/projects/kifkif-space/brand-partner-portal.webp",
      "/images/projects/kifkif-space/growth-analytics.webp"
    ],
    
    
    
    testimonial: {
      quote: "Building KifKif from scratch taught me everything about startup metrics—CAC, LTV, retention, and scalable architecture. This founder experience means I understand business challenges from both design and technical perspectives, which informs every client project I take on.",
      author: "Oussama Ben Marzouk",
      role: "Founder & Lead Developer",
      company: "KifKif.space"
    }
  },
  {
    slug: "luxe-home",
    title: "Luxe Home",
    subtitle: "3D E-commerce with AR Product Visualization",
    category: "E-commerce Technology",
    year: 2024,
    role: "3D Designer & UX Developer",
    client: "Premium Home Decor Brand",
    status: "Completed",
    
    businessChallenge: "High-value home decor items ($500-$5,000 range) suffered from 35% return rates due to customers being unable to visualize products in their space. This created logistical costs and customer dissatisfaction.",
    
    designSolution: "Developed an interactive 3D product viewer with AR capabilities, allowing customers to visualize furniture and decor in their actual space using their smartphone camera. Implemented room planning tools and product bundling suggestions.",
    
    technicalImplementation: [
      "Three.js for high-performance 3D rendering in browser",
      "AR.js for mobile augmented reality experiences",
      "Next.js 14 with Image Optimization for fast loading",
      "CDN delivery for optimized 3D model loading",
      "Progressive enhancement for varying device capabilities"
    ],
    
    keyFeatures: [
      "360° product viewing with zoom and rotate controls",
      "AR room placement using smartphone camera",
      "Room planner with drag-and-drop furniture",
      "Material and color customization in real-time",
      "Social sharing of room designs",
      "Save and compare multiple room configurations"
    ],
    
    measurableResults: [
      { metric: "Return Rate Reduction", value: "62%", description: "Decrease in product returns after AR feature implementation" },
      { metric: "Average Order Value", value: "+47%", description: "Increase due to successful bundling suggestions" },
      { metric: "Conversion Rate", value: "+128%", description: "Increase on product pages with 3D/AR viewers" },
      { metric: "Time on Page", value: "3.2x longer", description: "Increased engagement with interactive features" },
      { metric: "Support Calls", value: "70% decrease", description: "Reduction in sizing/fit inquiries" }
    ],
    
    technicalStack: [
      "Next.js 14",
      "Three.js",
      "AR.js",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary for 3D assets",
      "Vercel Edge Functions"
    ],
    
    heroImage: "/images/projects/luxe-home/hero-showcase.webp",
    gallery: [
      "/images/projects/luxe-home/3d-product-viewer.webp",
      "/images/projects/luxe-home/ar-room-preview.webp",
      "/images/projects/luxe-home/product-configurator.webp",
      "/images/projects/luxe-home/mobile-ar-demo.webp"
    ],
    
    
    
    testimonial: {
      quote: "The 3D visualization feature transformed our sales process. Customers now buy with confidence, and our support team spends less time on sizing questions. The implementation was seamless and integrated perfectly with our existing Next.js storefront.",
      author: "David Park",
      role: "E-commerce Director",
      company: "Luxe Home"
    }
  }
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: string) {
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects() {
  return projects.filter(project => 
    project.slug === "tradeflow-pro" || 
    project.slug === "kifkif-space" || 
    project.slug === "luxe-home"
  );
}