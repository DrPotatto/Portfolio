const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Creating Premium E-commerce Design Portfolio...\n');

// Create all directories (including nested ones)
const directories = [
  'app',
  'app/work',
  'app/about',
  'app/contact',
  'components',
  'components/ui',
  'components/3d', 
  'components/sections',
  'components/animations',
  'components/layout',
  'components/providers',
  'lib',
  'data',
  'types',
  'public',
  'public/images'
];

// First create all directories
directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`📁 Created: ${dir}`);
  }
});

// Create package.json
const packageJson = {
  "name": "premium-ecommerce-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@react-three/drei": "^9.94.5",
    "@react-three/fiber": "^8.15.24",
    "framer-motion": "^10.16.16",
    "gsap": "^3.12.5",
    "lenis": "^1.0.45",
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "react-intersection-observer": "^9.5.3",
    "three": "^0.162.0",
    "lucide-react": "^0.309.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/three": "^0.162.0",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log('📦 Created: package.json');

// Create configuration files
const configs = {
  'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
}`,

  'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`
};

Object.entries(configs).forEach(([file, content]) => {
  fs.writeFileSync(file, content);
  console.log(`⚙️  Created: ${file}`);
});

// Create app files
const appFiles = {
  'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    border-color: hsl(var(--border));
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    overflow-x: hidden;
  }
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.3);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.5);
}

::selection {
  background-color: hsl(var(--primary) / 0.2);
  color: hsl(var(--primary));
}`,

  'app/layout.tsx': `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium E-commerce Designer | 8+ Years Experience',
  description: 'Award-winning e-commerce designer specializing in high-conversion online stores, 3D visualization, and social media systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={\`\${inter.className} antialiased\`}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}`,

  'app/page.tsx': `import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}`,

  'app/work/page.tsx': `export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="container px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">Work</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Premium e-commerce case studies with measurable results.
        </p>
      </div>
    </main>
  )
}`,

  'app/about/page.tsx': `export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="container px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">About</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          8+ years transforming e-commerce brands through strategic design.
        </p>
      </div>
    </main>
  )
}`,

  'app/contact/page.tsx': `export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="container px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">Contact</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Let's create something remarkable together.
        </p>
      </div>
    </main>
  )
}`
};

// Create app files with proper directory creation
Object.entries(appFiles).forEach(([file, content]) => {
  const dir = path.dirname(file);
  const fullDir = path.join(process.cwd(), dir);
  
  // Ensure directory exists
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }
  
  fs.writeFileSync(file, content);
  console.log(`📄 Created: ${file}`);
});

// Create core components
const coreComponents = {
  'components/layout/Navigation.tsx': `'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-500 \${
          isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-border/50' : 'py-6'
        }\`}
      >
        <div className="container px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">AC</span>
              </div>
              <span className="text-lg font-semibold">
                Alex Chen<span className="text-primary">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={\`text-sm font-medium transition-all hover:text-primary py-2 \${
                    pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  }\`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all"
              >
                Start a Project
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-background pt-24">
          <div className="container px-6">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={\`block py-4 text-2xl font-medium border-b border-border transition-colors \${
                    pathname === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                  }\`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}`,

  'components/layout/Footer.tsx': `import Link from 'next/link'
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">AC</span>
              </div>
              <div>
                <span className="text-xl font-semibold">Alex Chen</span>
                <p className="text-sm text-muted-foreground">Premium E-commerce Design</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Designing high-conversion digital experiences for luxury brands.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Work</h3>
            <ul className="space-y-3">
              {['E-commerce', '3D & AR', 'Brand Systems', 'Social Media'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Process', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Chen Design. All rights reserved.
        </div>
      </div>
    </footer>
  )
}`,

  'components/providers/ThemeProvider.tsx': `'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: 'dark',
  setTheme: () => null,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)`,

  'components/sections/Hero.tsx': `'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scene3D from '@/components/3d/Scene3D'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      yPercent: -20,
      scale: 0.95,
      rotationX: -10,
      transformPerspective: 1000,
    })
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">8+ Years Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8"
          >
            <span className="block">Designing</span>
            <span className="text-primary">High-Conversion</span>
            <span className="block">E-commerce</span>
            <span>Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Transforming luxury brands with strategic design, 3D visualization, 
            and data-driven optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all flex items-center gap-2 group">
              View Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-border rounded-full text-lg font-medium hover:bg-muted transition-all">
              Start a Project
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}`,

  'components/3d/Scene3D.tsx': `'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

function FloatingShapes() {
  const group = useRef<THREE.Group>(null)
  const scrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY / (window.innerHeight * 2)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = scrollY.current * Math.PI * 0.25
      group.current.rotation.y = scrollY.current * Math.PI * 0.5
      
      const time = state.clock.getElapsedTime()
      group.current.position.y = Math.sin(time * 0.5) * 0.2
      
      group.current.children.forEach((child, index) => {
        child.rotation.x = time * 0.1 + index
        child.rotation.y = time * 0.15 + index
      })
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, 0, 0]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial 
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[3, 1, -2]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial 
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
        <mesh position={[0, -2, 1]}>
          <torusKnotGeometry args={[1, 0.4, 128, 16]} />
          <meshStandardMaterial 
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh position={[-2, 2, -1]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial 
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.2}
            metalness={0.6}
            roughness={0.4}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#10b981" />
        
        <FloatingShapes />
      </Canvas>
    </div>
  )
}`,

  'lib/utils.ts': `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,

  'types/index.ts': `export interface Project {
  id: string
  slug: string
  title: string
  description: string
  year: string
  category: string
  industry: string
  client: string
  tools: string[]
  results: {
    conversionIncrease: number
    revenueGrowth: number
    bounceRateDecrease: number
    customerSatisfaction: number
  }
}`,

  'data/projects.ts': `import { Project } from '@/types'

export const featuredProjects: Project[] = [
  {
    id: 'luxury-fashion-ecommerce',
    slug: 'luxury-fashion-ecommerce',
    title: 'Luxe Couture | Luxury Fashion E-commerce',
    description: 'Complete digital transformation increasing conversion by 58% through 3D product visualization.',
    year: '2023',
    category: 'ecommerce',
    industry: 'Luxury Fashion',
    client: 'Luxe Couture',
    tools: ['Figma', 'Three.js', 'Shopify Plus', 'WebGL'],
    results: {
      conversionIncrease: 58,
      revenueGrowth: 142,
      bounceRateDecrease: 67,
      customerSatisfaction: 94
    }
  },
  {
    id: 'premium-watches-ecommerce',
    slug: 'premium-watches-ecommerce',
    title: 'Chronos | Luxury Watches E-commerce',
    description: 'Interactive 360° product viewer resulting in 72% increase in online sales.',
    year: '2023',
    category: 'ecommerce',
    industry: 'Luxury Watches',
    client: 'Chronos Watches',
    tools: ['Blender', 'Three.js', 'Next.js', 'WebGL'],
    results: {
      conversionIncrease: 72,
      revenueGrowth: 89,
      bounceRateDecrease: 54,
      customerSatisfaction: 96
    }
  },
  {
    id: 'beauty-subscription-platform',
    slug: 'beauty-subscription-platform',
    title: 'GlamBox | Beauty Subscription Platform',
    description: 'AI-powered personalized beauty subscription with 3x subscriber growth.',
    year: '2022',
    category: 'ecommerce',
    industry: 'Beauty & Cosmetics',
    client: 'GlamBox',
    tools: ['Figma', 'React', 'Node.js', 'Stripe'],
    results: {
      conversionIncrease: 45,
      revenueGrowth: 320,
      bounceRateDecrease: 38,
      customerSatisfaction: 91
    }
  }
]

export const getAllProjects = () => featuredProjects
export const getProjectBySlug = (slug: string) => 
  featuredProjects.find(project => project.slug === slug)`
};

// Create core components
Object.entries(coreComponents).forEach(([file, content]) => {
  const dir = path.dirname(file);
  const fullDir = path.join(process.cwd(), dir);
  
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }
  
  fs.writeFileSync(file, content);
  console.log(`🎨 Created: ${file}`);
});

// Create placeholder components
const placeholders = {
  'components/sections/FeaturedProjects.tsx': `'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { featuredProjects } from '@/data/projects'

export default function FeaturedProjects() {
  return (
    <section className="py-32">
      <div className="container px-6">
        <div className="mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Featured Work</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Premium E-commerce<br />Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            In-depth explorations of design challenges, strategic solutions, and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={\`/work/\${project.slug}\`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span key={tool} className="px-3 py-1 rounded-full text-xs bg-white/10">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          +{project.results.conversionIncrease}%
                        </div>
                        <div className="text-xs text-muted-foreground">Conversion Lift</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/work" className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
            View All Case Studies
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}`,

  'components/sections/Services.tsx': `'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Cube, Smartphone, BarChart3, Palette, Users } from 'lucide-react'

const services = [
  {
    title: 'E-commerce Design',
    description: 'Complete online store design from concept to launch.',
    icon: <ShoppingBag className="w-6 h-6" />,
    projects: 24
  },
  {
    title: '3D & AR Experiences',
    description: 'Interactive product visualization and AR try-on.',
    icon: <Cube className="w-6 h-6" />,
    projects: 18
  },
  {
    title: 'Mobile Commerce',
    description: 'Native apps and PWAs for mobile shopping.',
    icon: <Smartphone className="w-6 h-6" />,
    projects: 16
  },
  {
    title: 'Conversion Optimization',
    description: 'Data-driven design improvements.',
    icon: <BarChart3 className="w-6 h-6" />,
    projects: 32
  },
  {
    title: 'Brand Systems',
    description: 'Visual identity and design systems.',
    icon: <Palette className="w-6 h-6" />,
    projects: 21
  },
  {
    title: 'Social Commerce',
    description: 'Instagram shopping and social media conversion.',
    icon: <Users className="w-6 h-6" />,
    projects: 28
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
}`,

  'components/sections/Process.tsx': `'use client'

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
                className={\`relative \${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}\`}
              >
                <div className="p-8 rounded-3xl border border-border bg-gradient-to-b from-card to-card/50">
                  <div className={\`flex items-center gap-4 \${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}\`}>
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-mono text-primary mb-1">{step.step}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className={\`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background hidden lg:block \${
                  index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                }\`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}`,

  'components/sections/Testimonials.tsx': `'use client'

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
}`,

  'components/sections/CTA.tsx': `'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Ready to Transform<br />Your E-commerce?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Let's discuss how strategic design can drive measurable growth for your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group">
              <Calendar className="w-5 h-5" />
              Book Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 border-2 border-border rounded-full text-lg font-medium hover:bg-muted transition-all">
              Send Message
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}`
};

// Create placeholder components
Object.entries(placeholders).forEach(([file, content]) => {
  const dir = path.dirname(file);
  const fullDir = path.join(process.cwd(), dir);
  
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }
  
  fs.writeFileSync(file, content);
  console.log(`✨ Created: ${file}`);
});

// Create README
const readme = `# Premium E-commerce Design Portfolio

A cutting-edge Next.js portfolio with 3D animations and premium design.

## Features
- 🌀 3D scrolling experience with Three.js
- 🎨 Premium dark theme design
- 📊 Impressive e-commerce case studies
- 📱 Fully responsive
- ⚡ Performance optimized

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open http://localhost:3000

## Project Structure
- \`/app/\` - Next.js pages
- \`/components/\` - React components
- \`/components/3d/\` - Three.js scenes
- \`/data/\` - Project data
- \`/public/\` - Static assets

## Customization
1. Edit \`/data/projects.ts\` with your work
2. Update content in \`/components/sections/\`
3. Modify 3D scene in \`/components/3d/Scene3D.tsx\`

## Deploy
\`\`\`bash
npm run build
vercel
\`\`\`

## Technologies
- Next.js 14
- TypeScript
- Tailwind CSS
- Three.js / React Three Fiber
- Framer Motion
- GSAP
`;

fs.writeFileSync('README.md', readme);
console.log('📘 Created: README.md');

// Create .gitignore
const gitignore = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`;

fs.writeFileSync('.gitignore', gitignore);
console.log('🔒 Created: .gitignore');

console.log('\n✅ Portfolio creation complete!');
console.log('\n🚀 Next steps:');
console.log('1. Install dependencies: npm install');
console.log('2. Start development: npm run dev');
console.log('3. Open: http://localhost:3000');
console.log('\n✨ Your portfolio includes:');
console.log('- 3D animated hero section');
console.log('- 3 premium e-commerce case studies');
console.log('- Complete navigation & footer');
console.log('- Services showcase');
console.log('- Testimonials section');
console.log('- Contact CTA');
console.log('\n🎨 Customize:');
console.log('- Edit /data/projects.ts with your work');
console.log('- Update text in components/sections/');
console.log('- Add your images to /public/images/');

console.log('\n🎉 All files created successfully!');
console.log('\n💡 Run the following commands:');
console.log('npm install');
console.log('npm run dev');