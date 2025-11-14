"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export interface BentoItem {
  title: string;
  image?: string;
  video?: string;
  type: "image" | "video";
}

interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
  glowColor?: string; // allow easy theming
}

export default function MagicBento({
  items,
  className = "",
  glowColor = "132, 0, 255",
}: MagicBentoProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".bento-card");

    cards.forEach((card) => {
      const handleMove = (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(card, {
          "--glow-x": `${x}px`,
          "--glow-y": `${y}px`,
          duration: 0.2,
        });

        gsap.to(card, {
          rotateX: ((y - rect.height / 2) / rect.height) * -10,
          rotateY: ((x - rect.width / 2) / rect.width) * 10,
          transformPerspective: 900,
          ease: "power2.out",
          duration: 0.4,
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", handleMove as EventListener);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mousemove", handleMove as EventListener);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <section
      className={`relative flex justify-center py-16 ${className}`}
      style={{ perspective: "1200px" }}
    >
      <style jsx>{`
        .bento-grid {
          display: grid;
          gap: 0.6rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          width: min(95%, 58rem);
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .bento-grid .bento-card:nth-child(3) {
            grid-column: span 2;
            grid-row: span 2;
          }
        }

        .bento-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #060010;
          aspect-ratio: 4/3;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          will-change: transform, box-shadow;
          transform-style: preserve-3d;
        }

        .bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25),
            0 0 25px rgba(${glowColor}, 0.15);
        }

        /* Glow Overlay */
        .bento-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            300px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(${glowColor}, 0.25),
            rgba(${glowColor}, 0.05) 40%,
            transparent 80%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .bento-card:hover::after {
          opacity: 1;
        }

        .bento-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.1) 80%,
            transparent 100%
          );
          z-index: 2;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .bento-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          font-family: "Playfair Display", serif;
          font-size: clamp(1rem, 0.8rem + 0.5vw, 1.6rem);
          color: white;
          z-index: 3;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease;
        }

        .bento-card:hover .bento-title {
          transform: translateY(-4px);
        }

        .bento-img,
        .bento-video {
          position: absolute;
          inset: 0;
          object-fit: cover;
          z-index: 0;
          width: 100%;
          height: 100%;
          border-radius: 1.25rem;
          transition: transform 0.8s ease;
        }

        .bento-card:hover .bento-img,
        .bento-card:hover .bento-video {
          transform: scale(1.05);
        }

        .video-container {
          grid-column: span 2;
          grid-row: span 2;
          position: relative;
          overflow: hidden;
          border-radius: 1.25rem;
        }

        @media (max-width: 768px) {
          .video-container {
            grid-column: span 1;
            grid-row: auto;
          }
        }
      `}</style>

      <div ref={gridRef} className="bento-grid">
        {items.map((item, i) => (
          <div
            key={i}
            className={`bento-card group ${
              item.type === "video" ? "video-container" : ""
            }`}
          >
            {item.type === "image" && item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={85}
                priority={i < 2}
                className="bento-img"
              />
            ) : (
              <video
                src={item.video!}
                className="bento-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            )}
            <div className="bento-overlay" />
            <h3 className="bento-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
