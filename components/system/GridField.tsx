"use client";

import { useEffect, useRef } from "react";

type Point = { ax: number; ay: number; sx: number; sy: number };

export function GridField({
  spacing = 64,
  bulgeStrength = 20,
  cursorRadius = 240,
  glowRadius = 220,
}: {
  spacing?: number;
  bulgeStrength?: number;
  cursorRadius?: number;
  glowRadius?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const gridRef = useRef<Point[][]>([]);
  const mouse = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const raf = useRef<number>(0);
  const size = useRef({ w: 0, h: 0 });
  const glowOpacity = useRef(0);
  const engagement = useRef(0);
  const reduced = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const lineColor = "rgba(255, 255, 255, 0.05)";

    function buildGrid(w: number, h: number) {
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      const grid: Point[][] = [];
      for (let row = 0; row < rows; row++) {
        const r: Point[] = [];
        for (let col = 0; col < cols; col++) {
          const ax = col * spacing;
          const ay = row * spacing;
          r.push({ ax, ay, sx: ax, sy: ay });
        }
        grid.push(r);
      }
      gridRef.current = grid;
    }

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size.current = { w, h };
      buildGrid(w, h);
    }

    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    const speedTimer = setInterval(() => {
      const m = mouse.current;
      const dx = m.prevX - m.x;
      const dy = m.prevY - m.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      m.speed += (dist - m.speed) * 0.5;
      if (m.speed < 0.001) m.speed = 0;
      m.prevX = m.x;
      m.prevY = m.y;
    }, 20);

    function drawStatic() {
      const grid = gridRef.current;
      const { w, h } = size.current;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let row = 0; row < grid.length; row++) {
        ctx.beginPath();
        for (let col = 0; col < grid[row].length; col++) {
          const p = grid[row][col];
          col === 0 ? ctx.moveTo(p.ax, p.ay) : ctx.lineTo(p.ax, p.ay);
        }
        ctx.stroke();
      }
      for (let col = 0; col < (grid[0]?.length || 0); col++) {
        ctx.beginPath();
        for (let row = 0; row < grid.length; row++) {
          const p = grid[row][col];
          row === 0 ? ctx.moveTo(p.ax, p.ay) : ctx.lineTo(p.ax, p.ay);
        }
        ctx.stroke();
      }
    }

    function tick() {
      const grid = gridRef.current;
      const m = mouse.current;
      const { w, h } = size.current;

      const target = Math.min(m.speed / 5, 1);
      engagement.current += (target - engagement.current) * 0.06;
      if (engagement.current < 0.001) engagement.current = 0;
      const eng = engagement.current;
      glowOpacity.current += (eng - glowOpacity.current) * 0.08;

      const glowEl = glowRef.current;
      if (glowEl) {
        glowEl.setAttribute("cx", String(m.x));
        glowEl.setAttribute("cy", String(m.y));
        glowEl.style.opacity = String(glowOpacity.current * 0.9);
      }

      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const crSq = cursorRadius * cursorRadius;

      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
          const p = grid[row][col];
          const dx = m.x - p.ax;
          const dy = m.y - p.ay;
          const distSq = dx * dx + dy * dy;

          if (distSq < crSq && eng > 0.01) {
            const dist = Math.sqrt(distSq) || 1;
            const t = 1 - dist / cursorRadius;
            const push = t * t * bulgeStrength * eng;
            const angle = Math.atan2(dy, dx);
            p.sx += (p.ax - Math.cos(angle) * push - p.sx) * 0.15;
            p.sy += (p.ay - Math.sin(angle) * push - p.sy) * 0.15;
          } else {
            p.sx += (p.ax - p.sx) * 0.1;
            p.sy += (p.ay - p.sy) * 0.1;
          }
        }
      }

      for (let row = 0; row < grid.length; row++) {
        ctx.beginPath();
        for (let col = 0; col < grid[row].length; col++) {
          const p = grid[row][col];
          col === 0 ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
        }
        ctx.stroke();
      }
      for (let col = 0; col < (grid[0]?.length || 0); col++) {
        ctx.beginPath();
        for (let row = 0; row < grid.length; row++) {
          const p = grid[row][col];
          row === 0 ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
        }
        ctx.stroke();
      }

      raf.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduced.current) {
      drawStatic();
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      raf.current = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf.current);
      clearInterval(speedTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spacing, bulgeStrength, cursorRadius]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0px, black 120px)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, black 120px)",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="grid-field-glow">
            <stop offset="0%" stopColor="#d4a056" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#d4a056" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          ref={glowRef}
          cx="-9999"
          cy="-9999"
          r={glowRadius}
          fill="url(#grid-field-glow)"
          style={{ opacity: 0 }}
        />
      </svg>
    </div>
  );
}