"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useTheme } from "@/components/providers/ThemeProvider"

/* ------------------------------------------------------------------ */
/*  CONTENT-MATCHING HERO: a 3D business-automation network.           */
/*  Process nodes connected by workflow edges, with glowing packets    */
/*  (tasks / data) flowing through them — literally "automation".      */
/* ------------------------------------------------------------------ */

function buildNetwork() {
  const COUNT = 16
  const R = 2.2
  const nodes: THREE.Vector3[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < COUNT; i++) {
    const y = 1 - (i / (COUNT - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    nodes.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(R))
  }
  // hubs = a few key process stages (rendered larger / accent)
  const hubs = [0, 5, 10, 14]

  // edges between reasonably close nodes => the workflow graph
  const edges: [number, number][] = []
  for (let i = 0; i < COUNT; i++) {
    for (let j = i + 1; j < COUNT; j++) {
      if (nodes[i].distanceTo(nodes[j]) < R * 1.15) edges.push([i, j])
    }
  }
  return { nodes, edges, hubs }
}

function useDotTexture() {
  return useMemo(() => {
    const s = 64
    const c = document.createElement("canvas")
    c.width = c.height = s
    const ctx = c.getContext("2d")!
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
    g.addColorStop(0, "rgba(255,255,255,1)")
    g.addColorStop(0.3, "rgba(255,255,255,0.85)")
    g.addColorStop(1, "rgba(255,255,255,0)")
    ctx.fillStyle = g
    ctx.fillRect(0, 0, s, s)
    const t = new THREE.CanvasTexture(c)
    t.needsUpdate = true
    return t
  }, [])
}

function AutomationNetwork({ dark }: { dark: boolean }) {
  const group = useRef<THREE.Group>(null)
  const packetsRef = useRef<THREE.Points>(null)
  const dot = useDotTexture()
  const { viewport } = useThree()
  const point = useRef({ x: 0, y: 0 })

  const { nodes, edges, hubs } = useMemo(buildNetwork, [])

  // light mode needs darker, saturated colours (additive glow is invisible on white)
  const nodeColor = dark ? "#9fe9ff" : "#0c6f9c"
  const hubColor = dark ? "#ffb24d" : "#e8770a"
  const lineColor = dark ? "#36c4ee" : "#1f8fbe"
  const packetColor = dark ? "#ffd089" : "#e8810f"
  const haloColor = dark ? "#36c4ee" : "#2f9bcb"
  // glowing parts must switch from additive→normal blending in light mode
  const glowBlend = dark ? THREE.AdditiveBlending : THREE.NormalBlending

  // geometry buffers
  const nodePos = useMemo(() => {
    const arr = new Float32Array(nodes.length * 3)
    nodes.forEach((n, i) => arr.set([n.x, n.y, n.z], i * 3))
    return arr
  }, [nodes])

  const hubPos = useMemo(() => {
    const arr = new Float32Array(hubs.length * 3)
    hubs.forEach((h, i) => arr.set([nodes[h].x, nodes[h].y, nodes[h].z], i * 3))
    return arr
  }, [hubs, nodes])

  const linePos = useMemo(() => {
    const arr = new Float32Array(edges.length * 6)
    edges.forEach(([a, b], i) => {
      arr.set([nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z], i * 6)
    })
    return arr
  }, [edges, nodes])

  // moving packets (tasks flowing through the automation)
  const PACKETS = 14
  const packets = useMemo(
    () =>
      Array.from({ length: PACKETS }, () => ({
        edge: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: 0.25 + Math.random() * 0.5,
      })),
    [edges.length],
  )
  const packetPos = useMemo(() => new Float32Array(PACKETS * 3), [])

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12
      const px = (state.pointer.x * viewport.width) / 22
      const py = (state.pointer.y * viewport.height) / 22
      point.current.x += (py * 0.18 - point.current.x) * 0.05
      point.current.y += (px * 0.18 - point.current.y) * 0.05
      group.current.rotation.x = point.current.x
      group.current.rotation.z = point.current.y * 0.3
    }
    // advance packets along their edges
    for (let i = 0; i < packets.length; i++) {
      const p = packets[i]
      p.t += delta * p.speed
      if (p.t > 1) {
        p.t = 0
        const [, prevB] = edges[p.edge]
        // hop to an edge connected to the node we arrived at
        const candidates = edges
          .map((e, idx) => ({ e, idx }))
          .filter(({ e }) => e[0] === prevB || e[1] === prevB)
        p.edge = candidates.length
          ? candidates[Math.floor(Math.random() * candidates.length)].idx
          : Math.floor(Math.random() * edges.length)
      }
      const [a, b] = edges[p.edge]
      const na = nodes[a]
      const nb = nodes[b]
      const t = p.t
      packetPos[i * 3] = na.x + (nb.x - na.x) * t
      packetPos[i * 3 + 1] = na.y + (nb.y - na.y) * t
      packetPos[i * 3 + 2] = na.z + (nb.z - na.z) * t
    }
    if (packetsRef.current) {
      const attr = packetsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute
      attr.needsUpdate = true
    }
  })

  return (
    <group ref={group}>
      {/* workflow edges */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePos, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={lineColor}
          transparent
          opacity={dark ? 0.3 : 0.6}
          depthWrite={false}
          blending={dark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </lineSegments>

      {/* halo glow behind nodes (fake bloom) */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.5} map={dot} color={haloColor} transparent opacity={dark ? 0.3 : 0.22} depthWrite={false} sizeAttenuation blending={glowBlend} />
      </points>

      {/* process nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.19} map={dot} color={nodeColor} transparent depthWrite={false} sizeAttenuation blending={dark ? THREE.AdditiveBlending : THREE.NormalBlending} />
      </points>

      {/* key hub stages (accent) */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[hubPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.34} map={dot} color={hubColor} transparent depthWrite={false} sizeAttenuation blending={glowBlend} />
      </points>

      {/* flowing packets (tasks / data moving through automation) */}
      <points ref={packetsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[packetPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.24} map={dot} color={packetColor} transparent depthWrite={false} sizeAttenuation blending={glowBlend} />
      </points>

      {/* faint depth sphere */}
      <mesh>
        <sphereGeometry args={[2.1, 48, 48]} />
        <meshBasicMaterial color={dark ? "#072742" : "#e3f2fb"} transparent opacity={dark ? 0.32 : 0.5} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

function Dust({ dark }: { dark: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const n = 120
    const a = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      a[i * 3] = (Math.random() - 0.5) * 12
      a[i * 3 + 1] = (Math.random() - 0.5) * 9
      a[i * 3 + 2] = (Math.random() - 0.5) * 7
    }
    return a
  }, [])
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.02
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color={dark ? "#6fc6e8" : "#86c8e8"} transparent opacity={dark ? 0.5 : 0.35} depthWrite={false} sizeAttenuation />
    </points>
  )
}

export default function NetworkGlobe() {
  const { theme } = useTheme()
  const dark = theme === "dark"
  return (
    <Canvas
      camera={{ position: [0, 0, 7.8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      performance={{ min: 0.5 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <AutomationNetwork dark={dark} />
        <Dust dark={dark} />
      </Suspense>
    </Canvas>
  )
}
