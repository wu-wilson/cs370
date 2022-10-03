import { useEffect, useRef, useState } from "react";
import styles from "./Particles.module.scss";

type Particle = { r: number; x: number; y: number; dx: number; dy: number };

// Convert a hex string into an rgb value {r: number, g: number, b: number}
const hexToRgb = (hex: string) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Return a random decimal to the tenths place.
const randomDecimal = (min: number, max: number) => {
  return Math.floor(Math.random() * (max * 10 - min * 10 + 1) + min * 10) / 10;
};

const Particles = ({
  num,
  radius,
  color,
}: {
  num: number;
  radius: number;
  color: string;
}) => {
  // Set up canvas
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // Generate an array of particles
  const createParticles = () => {
    const particles: Particle[] = [];
    if (canvas.current) {
      for (let i = 0; i < num; i++) {
        const r = radius;
        const x = Math.random() * (canvas.current.width - r * 2) + r;
        const y = Math.random() * (canvas.current.height - r * 2) + r;
        const dx =
          Math.floor(Math.random() * 2) === 1
            ? Math.random()
            : Math.random() * -1;
        const dy =
          Math.floor(Math.random() * 2) === 1
            ? Math.random()
            : Math.random() * -1;
        particles.push({ r: r, x: x, y: y, dx: dx, dy: dy });
      }
    }
    return particles;
  };

  let particles = createParticles();

  // Draw a single particle on the canvas
  const drawParticle = (particle: Particle) => {
    if (ctx) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  // Check the distance between 2 particles
  const checkDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Draw a line connecting 2 particles
  const linkParticles = (particle: Particle, particles: Particle[]) => {
    for (let i = 0; i < particles.length; i++) {
      const distance = checkDistance(
        particle.x,
        particle.y,
        particles[i].x,
        particles[i].y
      );
      const opacity = 1 - distance / 100;
      if (opacity > 0) {
        if (ctx) {
          ctx.lineWidth = 0.03;
          const rgb = hexToRgb(color);
          if (rgb) {
            ctx.strokeStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
          }
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  };

  // Draw all necessary lines
  const drawLines = () => {
    for (let i = 0; i < particles.length; i++) {
      linkParticles(particles[i], particles);
    }
  };

  // Begin the animation/drawing of all particles
  const animate = () => {
    const moveParticles = () => {
      if (ctx && canvas.current) {
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].x += particles[i].dx;
          particles[i].y += particles[i].dy;
          if (
            particles[i].x + particles[i].r > canvas.current.width ||
            particles[i].x - particles[i].r < 0
          ) {
            particles[i].dx *= -1;
          }
          if (
            particles[i].y + particles[i].r > canvas.current.height ||
            particles[i].y - particles[i].r < 0
          ) {
            particles[i].dy *= -1;
          }
          drawLines();
          drawParticle(particles[i]);
        }
      }
      requestAnimationFrame(moveParticles);
    };
    moveParticles();
  };

  useEffect(() => {
    if (canvas && canvas.current) {
      canvas.current.width = window.innerWidth * 1.5;
      canvas.current.height = window.innerHeight * 1.5;
      setCtx(canvas.current.getContext("2d"));
    }
  }, [canvas]);

  useEffect(() => {
    if (ctx) {
      animate();
    }
  }, [ctx]);

  // Whenever the window is resized, update the particles
  const updateParticles = (particles: Particle[]) => {
    if (ctx && canvas.current) {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      for (let i = 0; i < particles.length; i++) {
        if (
          particles[i].x + particles[i].r > canvas.current.width ||
          particles[i].x - particles[i].r < 0
        ) {
          particles[i].dx *= -1;
        }
        if (
          particles[i].y + particles[i].r > canvas.current.height ||
          particles[i].y - particles[i].r < 0
        ) {
          particles[i].dy *= -1;
        }
      }
    }
  };

  window.addEventListener(`resize`, () => {
    if (canvas.current) {
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      updateParticles(particles);
    }
  });

  return <canvas ref={canvas} className={styles["canvas"]} />;
};

export default Particles;
