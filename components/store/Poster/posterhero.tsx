"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroProps {
  posters: string[]; // poster image urls
  slideIntervalMs?: number; // poster swap interval
  bgColors?: string[]; // background palette
  bgChangeIntervalMs?: number; // bg swap interval
  marqueeText?: string;
}

export default function PosterHero({
  posters = [
    "/Poster/Posters/poster1.jpg",
    "/Poster/Posters/poster2.jpg",
    "/Poster/Posters/poster3.jpg",
  ],
  slideIntervalMs = 6000,
  bgColors = ["#f3efe9", "#f6f1ea", "#fbf6f2", "#f9f4ee"],
  bgChangeIntervalMs = 7000,
  marqueeText = "NEXT • NEW RELEASES • FEATURED • LIMITED EDITION",
}: HeroProps) {
  const [posterIndex, setPosterIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const fadeDuration = 700; // ms - must match CSS transition
  const posterRef = useRef<HTMLImageElement | null>(null);

  // poster crossfade cycle
  useEffect(() => {
    const id = setInterval(() => {
      // fade out -> switch -> fade in
      setVisible(false);
      setTimeout(() => {
        setPosterIndex((p) => (p + 1) % posters.length);
        setVisible(true);
      }, fadeDuration);
    }, slideIntervalMs);
    return () => clearInterval(id);
  }, [posters.length, slideDurationMsWrapper(slideIntervalMs)]);

  // background color cycle
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((b) => (b + 1) % bgColors.length);
    }, bgChangeIntervalMs);
    return () => clearInterval(id);
  }, [bgColors.length, bgChangeIntervalMs]);

  // Helper so eslint won't complain about deps
  function slideDurationMsWrapper(v: number) {
    return v;
  }

  // build repeated marquee content to ensure seamless infinite effect
  const repeats = 6; // number of copies (large screens)
  const marqueeItems = new Array(repeats).fill(marqueeText + " • ");

  return (
    <section
      className="poster-hero"
      aria-label="Poster hero"
      style={{ background: bgColors[bgIndex] }}
    >
      {/* Infinite marquee text (behind the poster) */}
      <div className="marquee">
        <div className="marquee-track" aria-hidden>
          {marqueeItems.map((txt, i) => (
            <div className="marquee-item" key={i}>
              {txt}
            </div>
          ))}
        </div>
      </div>

      {/* Poster card (center) */}
      <div className="poster-card" role="img" aria-label="Poster">
        <img
          ref={posterRef}
          src={posters[posterIndex]}
          alt={`Poster ${posterIndex + 1}`}
          className={`poster-image ${visible ? "visible" : "hidden"}`}
          loading="eager"
        />
        {/* soft reflected shadow element for richer depth */}
        <div className="poster-shadow" aria-hidden />
      </div>

      <style jsx>{`
        /* Container */
        .poster-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 1s linear;
          isolation: isolate; /* keep layers GPU-friendly */
        }

        /* MARQUEE (behind poster) */
        .marquee {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 1; /* behind poster (poster-card has z-index 5) */
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 4rem;
          /* large font, heavy weight, sits across whole width */
          font-family: "Playfair Display", serif;
          font-size: clamp(4rem, 8vw, 10rem);
          font-weight: 900;
          color: rgba(16, 16, 16, 0.08);
          white-space: nowrap;
          transform: translate3d(0, 0, 0);
          will-change: transform;
          animation: marquee-left 28s linear infinite;
        }
        .marquee-item {
          display: inline-block;
          padding-right: 2rem;
        }
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Poster card in the center */
        .poster-card {
          position: relative;
          z-index: 5;
          width: min(80vw, 760px);
          max-height: 82vh;
          aspect-ratio: 9 / 14; /* portrait poster */
          border-radius: 24px;
          overflow: visible; /* allow shadow & tilt overflow */
          transform: rotate(-6deg) translateY(-2%);
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
          display: block;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }

        /* Slight hover lift & straighten */
        .poster-card:hover {
          transform: rotate(-2deg) translateY(-4%);
        }

        .poster-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 30px 80px rgba(18, 18, 18, 0.16);
          transition: opacity ${fadeDuration}ms ease, transform 900ms ease;
          transform-origin: center center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          will-change: opacity, transform;
        }

        .poster-image.hidden {
          opacity: 0;
          transform: scale(0.98) translateY(10px) rotate(-6deg);
        }
        .poster-image.visible {
          opacity: 1;
          transform: scale(1) translateY(0) rotate(-6deg);
        }

        /* decorative bottom-right rounded shadow as in screenshot */
        .poster-shadow {
          position: absolute;
          right: -6%;
          bottom: -4%;
          z-index: 4;
          width: 18%;
          height: 18%;
          border-radius: 50%;
          filter: blur(24px);
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.06));
          transform: translate(10%, 10%) rotate(-20deg);
          pointer-events: none;
        }

        /* Responsive tuning */
        @media (max-width: 980px) {
          .marquee-track {
            font-size: clamp(3rem, 7vw, 6.5rem);
            gap: 2.5rem;
            animation-duration: 20s;
          }
          .poster-card {
            width: min(86vw, 420px);
            transform: rotate(-5deg) translateY(-1%);
          }
          .poster-shadow {
            display: none;
          }
          .hero-title h1 {
            font-size: clamp(2.2rem, 6vw, 3.6rem);
          }
        }
        @media (max-width: 520px) {
          .marquee-track {
            font-size: clamp(2.2rem, 8vw, 3.6rem);
            animation-duration: 14s;
          }
          .poster-card {
            width: 72vw;
            aspect-ratio: 2 / 3;
            transform: rotate(-3deg) translateY(-1%);
          }
          .hero-title h1 {
            font-size: clamp(1.6rem, 6vw, 2rem);
          }
        }
      `}</style>
    </section>
  );
}
