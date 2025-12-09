'use client'

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
}