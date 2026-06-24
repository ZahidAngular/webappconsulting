"use client"

import { useEffect, useRef } from "react"
import { useScroll, useVelocity } from "framer-motion"

/* ─────────────────────────────────────────────────────────────
   SCROLL STORYTELLING — "One partner, then a whole network."
   • A bright CORE node sits alone at the hero.
   • Each section a new node FLIES IN and CONNECTS to the cluster,
     building a glowing partnership constellation (echoes the hero
     3D network globe).
   • Light PACKETS travel the links — but only while you scroll
     (automation/data in motion); idle = a calm pulse.
   • Lives in a clean bottom band → never collides with content.
   ───────────────────────────────────────────────────────────── */

const PAL = {
  cyan:   "#2bb7e4",
  orange: "#f7941d",
  teal:   "#33e0c4",
  ice:    "#bfeeff",
  blue:   "#5b8def",
}
const LINK = "#39c0ec"

// dx/dy = final offset from the moving anchor; r = node radius scale;
// c = colour; at = scroll-progress threshold to join
const NODES = [
  { dx:    0, dy:   0, r: 1.35, c: PAL.cyan,   at: 0.00 }, // core — the lead partner
  { dx:  -64, dy:  22, r: 0.95, c: PAL.orange, at: 0.13 },
  { dx:  -34, dy: -26, r: 1.05, c: PAL.ice,    at: 0.13 },
  { dx: -104, dy:  -6, r: 0.90, c: PAL.cyan,   at: 0.30 },
  { dx:  -56, dy:  38, r: 1.00, c: PAL.teal,   at: 0.30 },
  { dx: -140, dy:  24, r: 0.85, c: PAL.orange, at: 0.47 },
  { dx:  -86, dy: -32, r: 0.95, c: PAL.blue,   at: 0.47 },
  { dx: -126, dy: -40, r: 0.90, c: PAL.cyan,   at: 0.64 },
  { dx:  -44, dy:  50, r: 1.00, c: PAL.orange, at: 0.64 },
  { dx: -176, dy:   4, r: 0.85, c: PAL.ice,    at: 0.80 },
]

const ENTER_DX = 170   // new nodes fly in from the right
const ENTER_DY = 14
const mix = (a: number, b: number, t: number) => a + (b - a) * t
const easeOut = (t: number) => 1 - (1 - t) * (1 - t)

type Pt = { x: number; y: number; a: number; i: number } | null

export function ScrollNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()
  const vel = useVelocity(scrollYProgress)

  const stateRef = useRef({
    progress : 0,
    velocity : 0,
    flow     : 0,    // smoothed 0..1 — packet/energy flow while scrolling
    clock    : 0,
    joins    : NODES.map(() => 0),
  })

  useEffect(() => {
    const u1 = scrollYProgress.on("change", v => { stateRef.current.progress = v })
    const u2 = vel.on("change",            v => { stateRef.current.velocity = v })
    return () => { u1(); u2() }
  }, [scrollYProgress, vel])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let raf = 0
    let prev = performance.now()

    const frame = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05)
      prev = now
      const st = stateRef.current
      const speed = Math.abs(st.velocity)

      const targetFlow = speed > 0.0012 ? 1 : 0
      st.flow += (targetFlow - st.flow) * Math.min(dt * 6, 1)
      st.clock += dt * (0.35 + st.flow * 2.4)   // links energise while scrolling

      NODES.forEach((n, i) => {
        const want = st.progress >= n.at ? 1 : 0
        st.joins[i] += (want - st.joins[i]) * Math.min(dt * 2.3, 1)
      })

      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)
      if (W < 1024) { raf = requestAnimationFrame(frame); return }

      // clean bottom band; constellation drifts left as the story unfolds
      const anchorX = W * (0.9 - st.progress * 0.4)
      const anchorY = H * 0.82
      const clock = st.clock
      const flow = st.flow

      // 1) resolve node positions (fly-in entrance)
      const pts: Pt[] = NODES.map((n, i) => {
        const a = st.joins[i]
        if (a < 0.01) return null
        const jt = easeOut(Math.min(a, 1))
        const float = Math.sin(clock * 0.7 + i * 1.3) * 3
        return {
          x: anchorX + mix(n.dx + ENTER_DX, n.dx, jt),
          y: anchorY + mix(n.dy + ENTER_DY, n.dy, jt) + float,
          a: Math.min(a, 1),
          i,
        }
      })

      // 2) links + travelling packets (under the nodes)
      const core = pts[0]
      ctx.lineCap = "round"
      for (let i = 1; i < pts.length; i++) {
        const p = pts[i]
        if (!p) continue
        // edge to core, plus to nearest present peer (organic web)
        const targets: Pt[] = []
        if (core) targets.push(core)
        let best: Pt = null, bestD = Infinity
        for (let j = 1; j < pts.length; j++) {
          if (j === i) continue
          const q = pts[j]
          if (!q) continue
          const d = (q.x - p.x) ** 2 + (q.y - p.y) ** 2
          if (d < bestD) { bestD = d; best = q }
        }
        if (best) targets.push(best)

        for (let k = 0; k < targets.length; k++) {
          const q = targets[k]!
          const la = Math.min(p.a, q.a)
          // base line
          ctx.strokeStyle = LINK
          ctx.shadowColor = LINK
          ctx.shadowBlur = 6
          ctx.globalAlpha = la * (k === 0 ? 0.22 : 0.34)
          ctx.lineWidth = k === 0 ? 1 : 1.3
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          // travelling packet (only really visible while scrolling)
          if (flow > 0.05) {
            const t = ((clock * 0.5 + i * 0.13 + k * 0.5) % 1)
            const px = mix(p.x, q.x, t), py = mix(p.y, q.y, t)
            ctx.globalAlpha = la * flow
            ctx.fillStyle = "#ffffff"
            ctx.shadowColor = LINK
            ctx.shadowBlur = 10
            ctx.beginPath(); ctx.arc(px, py, 1.8, 0, Math.PI * 2); ctx.fill()
          }
        }
      }

      // 3) nodes on top
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        if (!p) continue
        const n = NODES[i]
        const baseR = 5 * n.r
        const pulse = 1 + 0.12 * Math.sin(clock * 1.6 + i) + flow * 0.18
        const R = baseR * pulse

        // soft outer halo
        ctx.globalAlpha = p.a * (0.16 + flow * 0.12)
        ctx.fillStyle = n.c
        ctx.shadowColor = n.c
        ctx.shadowBlur = 22 * n.r
        ctx.beginPath(); ctx.arc(p.x, p.y, R * 2.1, 0, Math.PI * 2); ctx.fill()

        // node body
        ctx.globalAlpha = p.a
        ctx.shadowBlur = 12 * n.r
        ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, Math.PI * 2); ctx.fill()

        // hot white core
        ctx.globalAlpha = p.a
        ctx.shadowBlur = 0
        ctx.fillStyle = "#ffffff"
        ctx.beginPath(); ctx.arc(p.x, p.y, R * 0.4, 0, Math.PI * 2); ctx.fill()

        // the lead node gets a gentle outer ring
        if (i === 0) {
          ctx.globalAlpha = p.a * (0.5 + flow * 0.3)
          ctx.strokeStyle = n.c
          ctx.lineWidth = 1.2
          ctx.shadowColor = n.c
          ctx.shadowBlur = 8
          ctx.beginPath(); ctx.arc(p.x, p.y, R + 5 + Math.sin(clock * 1.8) * 1.5, 0, Math.PI * 2); ctx.stroke()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-40" />
}
