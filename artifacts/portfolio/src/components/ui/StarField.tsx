import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
  angle: number;
}

const STAR_COLORS = ['#ffffff', '#00e5ff', '#a855f7', '#e0f2fe', '#fbbf24'];

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Create stars
    const NUM_STARS = 280;
    const stars: Star[] = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.015 + 0.003,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    // Shooting stars
    const shooters: ShootingStar[] = Array.from({ length: 4 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 6 + 4,
      opacity: 0,
      active: false,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
    }));

    let nextShootTime = Date.now() + Math.random() * 3000 + 1500;

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset);
        const opacity = star.opacity + twinkle * 0.3;
        const size = star.size + twinkle * 0.3;

        ctx.save();
        ctx.globalAlpha = Math.max(0.05, Math.min(1, opacity));

        // Glow for colored stars
        if (star.color !== '#ffffff' && star.size > 1.2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = star.color;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, Math.max(0.2, size), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        ctx.restore();

        // Slowly drift upward
        star.y -= star.speed;
        if (star.y < -2) {
          star.y = canvas.height + 2;
          star.x = Math.random() * canvas.width;
        }
      }

      // Shooting stars
      const now = Date.now();
      if (now > nextShootTime) {
        const s = shooters[Math.floor(Math.random() * shooters.length)];
        if (!s.active) {
          s.x = Math.random() * canvas.width * 0.8;
          s.y = Math.random() * canvas.height * 0.4;
          s.opacity = 1;
          s.active = true;
          nextShootTime = now + Math.random() * 4000 + 2000;
        }
      }

      for (const s of shooters) {
        if (!s.active) continue;
        ctx.save();
        ctx.globalAlpha = s.opacity;
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        grad.addColorStop(0, '#00e5ff');
        grad.addColorStop(0.5, 'rgba(0,229,255,0.5)');
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.012;
        if (s.opacity <= 0) s.active = false;
      }

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
