"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Maximize2, Volume2, VolumeX } from "lucide-react";

type Media =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "video"; src: string; poster?: string; alt?: string; muted?: boolean };

type Props = {
  items: Media[];
  aspect?: number;               // e.g. 1 for square, 4/5 for tall images
  className?: string;
};

export default function ProductCarousel({ items, aspect = 1, className }: Props) {
  const [index, setIndex] = useState(0);
  const [isFs, setIsFs] = useState(false);
  const [muted, setMuted] = useState(true);
  const fsRef = useRef<HTMLDivElement>(null);

  const current = items[index];

  // Fullscreen helpers
  const openFs = async () => {
    if (!fsRef.current) return;
    if (!document.fullscreenElement) {
      await fsRef.current.requestFullscreen?.();
      setIsFs(true);
    }
  };
  const onFsChange = () => setIsFs(Boolean(document.fullscreenElement));
  useEffect(() => {
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Keyboard nav in FS
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!document.fullscreenElement) return;
      if (e.key === "ArrowRight") setIndex((i) => Math.min(items.length - 1, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "Escape") document.exitFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length]);

  // Preload neighbors
  const neighbors = useMemo(() => {
    const prev = Math.max(0, index - 1);
    const next = Math.min(items.length - 1, index + 1);
    return [prev, next];
  }, [index, items.length]);

  useEffect(() => {
    neighbors.forEach((i) => {
      const m = items[i];
      if (m?.kind === "image") {
        const img = new window.Image();
        img.src = m.src;
      }
    });
  }, [neighbors, items]);

  const renderMedia = useCallback(
    (m: Media, priority = false) =>
      m.kind === "image" ? (
        <Image
          src={m.src}
          alt={m.alt || "Product image"}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
        />
      ) : (
        <video
          src={m.src}
          poster={m.poster}
          muted={muted}
          loop
          playsInline
          autoPlay
          className="h-full w-full object-cover"
        />
      ),
    [muted]
  );

  return (
    <div className={["w-full", className || ""].join(" ")}>
      {/* Main viewer */}
      <div
        className="relative w-full overflow-hidden bg-neutral-50"
        style={{ aspectRatio: String(aspect) }}
        ref={fsRef}
      >
        {renderMedia(current, true)}

        {/* Controls (fullscreen + mute for videos) */}
        <div className="absolute right-3 top-3 flex gap-2">
          {current.kind === "video" && (
            <button
              onClick={() => setMuted((m) => !m)}
              className="rounded-md bg-white/90 p-2 shadow hover:bg-white"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          )}
          <button
            onClick={openFs}
            className="rounded-md bg-white/90 p-2 shadow hover:bg-white"
            aria-label="Fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Zoom on hover for images */}
        {current.kind === "image" && (
          <div
            className="pointer-events-none absolute inset-0 hidden bg-[length:200%_200%] sm:block"
            style={{
              backgroundImage: `url(${current.src})`,
              backgroundRepeat: "no-repeat",
            }}
            onMouseMove={(e) => {
              const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              const x = ((e.clientX - r.left) / r.width) * 100;
              const y = ((e.clientY - r.top) / r.height) * 100;
              (e.currentTarget as HTMLDivElement).style.backgroundPosition = `${x}% ${y}%`;
            }}
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
        {items.map((m, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={[
              "relative aspect-square overflow-hidden rounded-md border",
              i === index
                ? "border-neutral-900"
                : "border-neutral-200 hover:border-neutral-300",
            ].join(" ")}
            aria-label={`media ${i + 1}`}
          >
            {m.kind === "image" ? (
              <Image
                src={m.src}
                alt={m.alt || "thumb"}
                fill
                className="object-cover"
                sizes="120px"
              />
            ) : (
              <>
                <video
                  src={m.src}
                  muted
                  className="h-full w-full object-cover"
                  playsInline
                />
                <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
                  VIDEO
                </span>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
