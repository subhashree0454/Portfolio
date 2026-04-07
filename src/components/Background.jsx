import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 2000 }) {
  const points = useRef()

  // Use useMemo for performance (2026 best practice)
  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sc = new Float32Array(count)
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 15
        pos[i * 3 + 1] = (Math.random() - 0.5) * 15
        pos[i * 3 + 2] = (Math.random() - 0.5) * 15
        sc[i] = Math.random()
    }
    return [pos, sc]
  }, [count])

  useFrame((state) => {
    const { mouse } = state
    points.current.rotation.y += 0.001
    points.current.rotation.x += 0.0005
    
    // Smooth mouse interaction (2026 premium feel)
    points.current.rotation.y += mouse.x * 0.01
    points.current.rotation.x += mouse.y * 0.01
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#9b59b6"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none opacity-50 bg-[#0f172a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  )
}

export default Background
