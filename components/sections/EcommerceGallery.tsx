'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Box, Palette, Smartphone, Users, RotateCw, ZoomIn } from 'lucide-react'

const galleryCategories = [
  { id: 'product-visualization', label: '3D Product Visualization', icon: <Box className="w-4 h-4" /> },
  { id: 'ar-room', label: 'AR Room Placement', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'material-customization', label: 'Material Customization', icon: <Palette className="w-4 h-4" /> },
  { id: 'marketing-assets', label: 'Marketing Assets', icon: <Users className="w-4 h-4" /> },
]

const galleryImages = {
  'product-visualization': [
    {
      id: 'sofa-hero',
      title: 'Luxury Modern Sofa - Hero Shot',
      description: 'Photorealistic 3D rendering in minimalist living room setting',
      category: '3D Visualization',
      features: ['Premium fabric texture', 'Soft natural lighting', 'Modern Scandinavian style']
    },
    {
      id: 'chair-360',
      title: 'Ergonomic Office Chair - 360° Rotation',
      description: '8-angle product rotation for interactive viewer',
      category: 'Interactive 3D',
      features: ['Premium mesh material', 'Adjustable features', 'Studio lighting']
    },
    {
      id: 'bed-lifestyle',
      title: 'King Size Bed - Lifestyle Setting',
      description: 'Realistic bedroom integration with ambient lighting',
      category: 'Lifestyle Render',
      features: ['Warm ambient lighting', 'Textured materials', 'Room integration']
    },
    {
      id: 'table-detail',
      title: 'Dining Table - Material Close-up',
      description: 'High-detail material texture and joinery',
      category: 'Detail Shot',
      features: ['Material texture focus', 'Joinery details', 'Light reflection']
    }
  ],
  'ar-room': [
    {
      id: 'room-before-after',
      title: 'Before/After Room Transformation',
      description: 'AR placement visualization showing furniture integration',
      category: 'AR Visualization',
      features: ['Dimension markers', 'Perfect integration', 'Space planning']
    },
    {
      id: 'living-room-ar',
      title: 'Living Room AR Placement',
      description: 'Interactive furniture placement in actual space',
      category: 'Interactive AR',
      features: ['Real-time placement', 'Multiple angles', 'Lighting adjustment']
    },
    {
      id: 'office-setup',
      title: 'Home Office AR Setup',
      description: 'Complete workspace arrangement visualization',
      category: 'Space Planning',
      features: ['Product grouping', 'Spatial harmony', 'Functionality focus']
    }
  ],
  'material-customization': [
    {
      id: 'wood-variations',
      title: 'Natural Wood Variations',
      description: 'Oak, walnut, and teak material options',
      category: 'Material Options',
      features: ['Natural grain patterns', 'Matte vs glossy finishes', 'Color variations']
    },
    {
      id: 'marble-options',
      title: 'Marble & Stone Finishes',
      description: 'Premium stone material customizations',
      category: 'Luxury Materials',
      features: ['Vein patterns', 'Polished finishes', 'Accent combinations']
    },
    {
      id: 'fabric-swatches',
      title: 'Fabric & Upholstery Options',
      description: 'Interactive fabric material selector',
      category: 'Upholstery',
      features: ['Texture variations', 'Color samples', 'Durability grades']
    },
    {
      id: 'metal-finishes',
      title: 'Metal Frame Finishes',
      description: 'Chrome, brass, and matte black options',
      category: 'Frame Options',
      features: ['Finish comparisons', 'Durability visuals', 'Style matching']
    }
  ],
  'marketing-assets': [
    {
      id: 'social-carousel',
      title: 'Instagram Carousel Series',
      description: '5-part social media content series',
      category: 'Social Media',
      features: ['Mobile optimization', 'Brand consistency', 'Engagement focus']
    },
    {
      id: 'email-banner',
      title: 'Seasonal Email Campaign',
      description: 'Winter collection promotional banner',
      category: 'Email Marketing',
      features: ['Text overlay space', 'Seasonal elements', 'Clear CTAs']
    },
    {
      id: 'product-comparison',
      title: 'Product Comparison Infographic',
      description: 'Luxe Home vs standard furniture comparison',
      category: 'Educational Content',
      features: ['Feature comparison', 'Value proposition', 'Visual hierarchy']
    },
    {
      id: 'catalog-spread',
      title: 'Digital Catalog Spread',
      description: 'Print-ready catalog page layout',
      category: 'Print Materials',
      features: ['High-resolution', 'Print optimization', 'Layout harmony']
    }
  ]
}

export default function EcommerceGallery() {
  const [activeCategory, setActiveCategory] = useState('product-visualization')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [is3dViewer, setIs3dViewer] = useState(false)

  const currentImages = galleryImages[activeCategory as keyof typeof galleryImages] || []

  return (
    <section className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Gallery Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary mb-4 block">3D E-commerce Assets</span>
            <h2 className="text-4xl font-bold mb-6">Interactive Product Visualization Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-quality 3D assets, AR experiences, and marketing materials created for Luxe Home.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setSelectedImage(null)
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* 3D Viewer Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={() => setIs3dViewer(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !is3dViewer ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <ZoomIn className="w-4 h-4 inline mr-2" />
              Static Gallery
            </button>
            <button
              onClick={() => setIs3dViewer(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                is3dViewer ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <RotateCw className="w-4 h-4 inline mr-2" />
              3D Interactive Viewer
            </button>
          </motion.div>

          {/* Gallery Grid */}
          {!is3dViewer ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black mb-4">
                    {/* Placeholder for image - Replace with your actual images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-4xl mb-4">
                          {activeCategory === 'product-visualization' && '🛋️'}
                          {activeCategory === 'ar-room' && '📱'}
                          {activeCategory === 'material-customization' && '🎨'}
                          {activeCategory === 'marketing-assets' && '📊'}
                        </div>
                        <div className="text-lg font-medium">{image.title}</div>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Details */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-sm font-medium mb-1">{image.title}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{image.description}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{image.title}</h3>
                      <span className="text-xs px-2 py-1 bg-muted rounded">{image.category}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{image.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {image.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* 3D Interactive Viewer */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-border"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 max-w-2xl">
                  <div className="text-6xl mb-6">🎮</div>
                  <h3 className="text-3xl font-bold mb-4">Interactive 3D Product Viewer</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    This would be an interactive WebGL viewer where users can rotate products,
                    change materials, and visualize furniture in their space.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
                      Rotate Product
                    </button>
                    <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted">
                      Change Material
                    </button>
                    <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted">
                      AR View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Gallery Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24+</div>
                <div className="text-sm text-muted-foreground">3D Assets Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-sm text-muted-foreground">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4K</div>
                <div className="text-sm text-muted-foreground">Resolution Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">360°</div>
                <div className="text-sm text-muted-foreground">Interactive Views</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => 
                  prev === 0 ? currentImages.length - 1 : (prev || 0) - 1
                )
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => 
                  prev === currentImages.length - 1 ? 0 : (prev || 0) + 1
                )
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-[60vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">
                    {activeCategory === 'product-visualization' && '🛋️'}
                    {activeCategory === 'ar-room' && '📱'}
                    {activeCategory === 'material-customization' && '🎨'}
                    {activeCategory === 'marketing-assets' && '📊'}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    {currentImages[selectedImage]?.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {currentImages[selectedImage]?.description}
                  </p>
                </div>
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm font-medium mb-1">
                        Image {selectedImage + 1} of {currentImages.length} • {currentImages[selectedImage]?.category}
                      </div>
                      <div className="text-2xl font-bold">{currentImages[selectedImage]?.title}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">Luxe Home Collection</div>
                      <div className="text-xs text-muted-foreground">3D E-commerce Assets</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    {currentImages[selectedImage]?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}