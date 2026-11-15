import { useEffect, useRef } from 'react';

/**
 * "Metal Fury" hero effect.
 *
 * A scroll-driven canvas layer: a spinning segmented metal ring (the
 * beyblade motif) with lightning arcs and rising embers. The ring's
 * rotation and the ember intensity both respond to page scroll, so the
 * animation reacts as you move down the page.
 *
 * Performance notes:
 *  - device pixel ratio capped at 2
 *  - particle count scales with viewport width
 *  - animation paused when the hero is off screen
 *  - renders a single static frame when reduced motion is requested
 */

const EMBER_COUNT = 70;

export default function HeroFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const embers = [];
    const bolts = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedEmbers = () => {
      embers.length = 0;
      const count = width < 640 ? 34 : EMBER_COUNT;
      for (let i = 0; i < count; i++) {
        embers.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.7 + 0.5,
          vy: -(Math.random() * 0.28 + 0.08),
          drift: (Math.random() - 0.5) * 0.18,
          alpha: Math.random() * 0.5 + 0.15,
          warm: Math.random() > 0.55,
        });
      }
    };

    /* --- drawing helpers ------------------------------------------- */

    const drawRing = (cx, cy, radius, angle, segments, gap, lineWidth, color, alpha) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';

      const step = (Math.PI * 2) / segments;
      for (let i = 0; i < segments; i++) {
        const start = i * step;
        ctx.beginPath();
        ctx.arc(0, 0, radius, start, start + step * (1 - gap));
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawTicks = (cx, cy, radius, angle, count) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-angle * 0.6);
      ctx.strokeStyle = 'rgba(243, 177, 60, 0.55)';
      ctx.lineWidth = 1;
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2;
        const inner = radius * 0.955;
        const outer = radius * (i % 5 === 0 ? 1.075 : 1.03);
        ctx.globalAlpha = i % 5 === 0 ? 0.75 : 0.3;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
        ctx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
        ctx.stroke();
      }
      ctx.restore();
    };

    const spawnBolt = (cx, cy, radius, angle, intensity) => {
      const points = [];
      const startAngle = angle + (Math.random() - 0.5) * 0.7;
      const length = radius * (1.25 + Math.random() * 0.75);
      const steps = 7;
      const jitter = 12 * intensity + 4;

      for (let i = 0; i <= steps; i++) {
        const p = i / steps;
        const a = startAngle + (Math.random() - 0.5) * 0.16 * p;
        const r = radius * 0.92 + (length - radius * 0.92) * p;
        points.push({
          x: cx + Math.cos(a) * r + (Math.random() - 0.5) * jitter * p,
          y: cy + Math.sin(a) * r + (Math.random() - 0.5) * jitter * p,
        });
      }

      bolts.push({ points, life: 1 });
    };

    const drawBolts = (dt) => {
      ctx.save();
      ctx.lineJoin = 'round';
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        bolt.life -= dt * 3.2;
        if (bolt.life <= 0) {
          bolts.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = bolt.life * 0.85;
        ctx.strokeStyle = 'rgba(255, 214, 150, 0.9)';
        ctx.lineWidth = 1.6;
        ctx.shadowColor = 'rgba(243, 177, 60, 0.9)';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        bolt.points.forEach((pt, idx) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(229, 56, 47, 0.55)';
        ctx.lineWidth = 3.4;
        ctx.globalAlpha = bolt.life * 0.35;
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawEmbers = (dt, boost) => {
      ctx.save();
      for (const e of embers) {
        e.y += e.vy * (1 + boost * 2.4) * dt * 60;
        e.x += e.drift * dt * 60;

        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        if (e.x < -10) e.x = width + 10;
        if (e.x > width + 10) e.x = -10;

        ctx.globalAlpha = e.alpha * (0.55 + boost * 0.45);
        ctx.fillStyle = e.warm ? 'rgba(243, 177, 60, 0.95)' : 'rgba(229, 56, 47, 0.85)';
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    /* --- main loop -------------------------------------------------- */

    let raf = 0;
    let last = 0;
    let elapsed = 0;
    let visible = true;
    let nextBolt = 0.9;

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05) || 0.016;
      last = now;
      elapsed += dt;

      // 0 at the top of the hero, 1 once it has scrolled away
      const scrollProgress = Math.min(
        Math.max(window.scrollY / Math.max(window.innerHeight, 1), 0),
        1,
      );

      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.46;
      const base = Math.min(width, height) * 0.34;
      const radius = base * (1 + scrollProgress * 0.16);

      // soft core glow
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.7);
      glow.addColorStop(0, `rgba(229, 56, 47, ${0.16 + scrollProgress * 0.14})`);
      glow.addColorStop(0.45, 'rgba(243, 177, 60, 0.05)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      drawEmbers(dt, scrollProgress);

      const spin = elapsed * 0.22 + scrollProgress * 2.6;

      drawRing(cx, cy, radius, spin, 34, 0.42, 1.4, 'rgba(154, 165, 184, 0.5)', 0.9);
      drawRing(cx, cy, radius * 0.88, -spin * 1.5, 18, 0.55, 2.6, 'rgba(229, 56, 47, 0.85)', 0.75);
      drawRing(cx, cy, radius * 0.66, spin * 2.2, 8, 0.35, 1.2, 'rgba(243, 177, 60, 0.9)', 0.6);
      drawTicks(cx, cy, radius, spin, 60);

      nextBolt -= dt;
      if (nextBolt <= 0) {
        spawnBolt(cx, cy, radius, Math.random() * Math.PI * 2, scrollProgress);
        nextBolt = 0.55 + Math.random() * 1.5;
      }
      drawBolts(dt);

      if (visible) raf = requestAnimationFrame(frame);
    };

    const staticFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.5;
      const cy = height * 0.46;
      const radius = Math.min(width, height) * 0.34;

      const glow = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.7);
      glow.addColorStop(0, 'rgba(229, 56, 47, 0.16)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      drawEmbers(0, 0.2);
      drawRing(cx, cy, radius, 0.4, 34, 0.42, 1.4, 'rgba(154, 165, 184, 0.5)', 0.9);
      drawRing(cx, cy, radius * 0.88, -0.2, 18, 0.55, 2.6, 'rgba(229, 56, 47, 0.85)', 0.75);
      drawRing(cx, cy, radius * 0.66, 0.9, 8, 0.35, 1.2, 'rgba(243, 177, 60, 0.9)', 0.6);
      drawTicks(cx, cy, radius, 0.2, 60);
    };

    resize();
    seedEmbers();

    /** Cancel any previous loop, draw one frame immediately, then continue. */
    const start = () => {
      cancelAnimationFrame(raf);
      last = performance.now();
      frame(last);
    };

    const ro = new ResizeObserver(() => {
      resize();
      seedEmbers();
      if (reduceMotion) staticFrame();
      else start();
    });
    ro.observe(canvas);

    // Pause the loop when the hero leaves the viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduceMotion) start();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    if (reduceMotion) {
      staticFrame();
    } else {
      start();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__fx" aria-hidden="true" />;
}
