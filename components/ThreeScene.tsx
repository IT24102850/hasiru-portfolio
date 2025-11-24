'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'

function FloatingShapes() {
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={1}>
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial color="#bc13fe" metalness={0.3} roughness={0.2} />
      </mesh>
      <mesh position={[0.9, 0.2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#0ff0fc" metalness={0.1} roughness={0.3} />
      </mesh>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <FloatingShapes />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
