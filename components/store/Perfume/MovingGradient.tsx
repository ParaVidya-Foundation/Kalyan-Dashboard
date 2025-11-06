import React, { useEffect, useRef, useState } from 'react';

export default function MovingGradient() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      };
    };

    const animate = () => {
      // Smooth lerp for buttery cursor tracking
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.05;

      setMousePos({
        x: currentPos.current.x,
        y: currentPos.current.y
      });

      rafId.current = requestAnimationFrame(animate) as unknown as null;

    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate) as unknown as null;

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-[#fef6f0] via-[#fff9f5] to-[#fff3eb]">
      
      {/* Primary cursor-reactive gradient - warm peach */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          background: `
            radial-gradient(
              circle 750px at ${mousePos.x}% ${mousePos.y}%,
              rgba(255, 180, 140, 0.5) 0%,
              rgba(255, 200, 160, 0.38) 30%,
              rgba(255, 220, 190, 0.25) 55%,
              transparent 100%
            )
          `
        }}
      />

      {/* Secondary gradient - coral rose, counter movement */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          background: `
            radial-gradient(
              ellipse 850px 650px at ${95 - mousePos.x * 0.6}% ${95 - mousePos.y * 0.5}%,
              rgba(255, 160, 150, 0.45) 0%,
              rgba(255, 190, 170, 0.32) 35%,
              rgba(255, 210, 195, 0.2) 60%,
              transparent 100%
            )
          `
        }}
      />

      {/* Tertiary gradient - soft lavender pink, diagonal */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          background: `
            radial-gradient(
              ellipse 700px 800px at ${25 + mousePos.x * 0.35}% ${65 - mousePos.y * 0.4}%,
              rgba(255, 200, 180, 0.42) 0%,
              rgba(255, 220, 200, 0.3) 40%,
              rgba(255, 235, 220, 0.18) 65%,
              transparent 100%
            )
          `
        }}
      />

      {/* Fourth gradient - peachy amber, top area */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          background: `
            radial-gradient(
              ellipse 600px 700px at ${70 + mousePos.x * 0.2}% ${20 + mousePos.y * 0.3}%,
              rgba(255, 190, 150, 0.4) 0%,
              rgba(255, 210, 180, 0.28) 45%,
              transparent 100%
            )
          `
        }}
      />

      {/* Fifth gradient - blush pink, left side */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          background: `
            radial-gradient(
              ellipse 650px 750px at ${15 + mousePos.x * 0.15}% ${45 + mousePos.y * 0.25}%,
              rgba(255, 170, 160, 0.38) 0%,
              rgba(255, 195, 185, 0.25) 50%,
              transparent 100%
            )
          `
        }}
      />

      {/* Ambient cosmic orbs - floating in space */}
      <div className="absolute inset-0 opacity-85">
        <div 
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            top: '18%',
            left: '12%',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(255, 165, 120, 0.4) 0%, rgba(255, 190, 150, 0.25) 45%, transparent 75%)',
            transform: `translate(calc(-50% + ${mousePos.x * 0.08}px), calc(-50% + ${mousePos.y * 0.1}px))`,
            animation: 'float-orb-1 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            bottom: '15%',
            right: '18%',
            width: '650px',
            height: '650px',
            background: 'radial-gradient(circle, rgba(255, 180, 140, 0.38) 0%, rgba(255, 205, 175, 0.22) 50%, transparent 75%)',
            transform: `translate(calc(50% - ${mousePos.x * 0.1}px), calc(50% - ${mousePos.y * 0.08}px))`,
            animation: 'float-orb-2 25s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            top: '52%',
            right: '22%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255, 195, 160, 0.35) 0%, rgba(255, 215, 190, 0.2) 55%, transparent 80%)',
            transform: `translate(calc(50% + ${mousePos.x * 0.06}px), calc(-50% + ${mousePos.y * 0.12}px))`,
            animation: 'float-orb-3 22s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            top: '35%',
            left: '60%',
            width: '480px',
            height: '480px',
            background: 'radial-gradient(circle, rgba(255, 175, 145, 0.32) 0%, rgba(255, 200, 175, 0.18) 60%, transparent 85%)',
            transform: `translate(calc(-50% - ${mousePos.x * 0.07}px), calc(-50% - ${mousePos.y * 0.09}px))`,
            animation: 'float-orb-4 18s ease-in-out infinite'
          }}
        />
      </div>

      {/* Enhanced grain texture - more visible */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '250px 250px'
        }}
      />

      {/* Floating cosmic dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: `radial-gradient(circle, 
                ${i % 5 === 0 ? 'rgba(255, 160, 120, 0.65)' :
                  i % 5 === 1 ? 'rgba(255, 180, 140, 0.6)' :
                  i % 5 === 2 ? 'rgba(255, 200, 160, 0.55)' :
                  i % 5 === 3 ? 'rgba(255, 170, 130, 0.6)' :
                  'rgba(255, 190, 150, 0.58)'
                } 0%, transparent 70%)`,
              animation: `float-particle ${20 + (i % 15)}s linear infinite`,
              animationDelay: `${-(i % 20)}s`,
              filter: 'blur(0.5px)',
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>

      {/* Subtle shimmer overlay - luxury touch */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none will-change-transform"
        style={{
          background: `
            linear-gradient(
              ${115 + mousePos.x * 0.25}deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 47%,
              rgba(255, 255, 255, 0.15) 50%,
              rgba(255, 255, 255, 0.1) 53%,
              transparent 100%
            )
          `
        }}
      />

      {/* Soft edge vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(254, 240, 230, 0.7) 100%)'
        }}
      />

      <style jsx>{`
        @keyframes float-orb-1 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
          }
          25% { 
            transform: translate(-48%, -52%) scale(1.08);
          }
          50% { 
            transform: translate(-52%, -50%) scale(0.96);
          }
          75% { 
            transform: translate(-50%, -48%) scale(1.04);
          }
        }
        
        @keyframes float-orb-2 {
          0%, 100% { 
            transform: translate(50%, 50%) scale(1);
          }
          25% { 
            transform: translate(52%, 48%) scale(1.06);
          }
          50% { 
            transform: translate(48%, 52%) scale(0.98);
          }
          75% { 
            transform: translate(50%, 49%) scale(1.03);
          }
        }
        
        @keyframes float-orb-3 {
          0%, 100% { 
            transform: translate(50%, -50%) scale(1);
          }
          25% { 
            transform: translate(52%, -48%) scale(1.05);
          }
          50% { 
            transform: translate(48%, -52%) scale(0.97);
          }
          75% { 
            transform: translate(51%, -50%) scale(1.02);
          }
        }
        
        @keyframes float-orb-4 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
          }
          25% { 
            transform: translate(-48%, -52%) scale(1.07);
          }
          50% { 
            transform: translate(-52%, -48%) scale(0.95);
          }
          75% { 
            transform: translate(-49%, -51%) scale(1.04);
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(
              ${Math.random() * 200 - 100}px, 
              ${Math.random() * 200 - 100}px
            ) scale(${1 + Math.random() * 0.5});
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}