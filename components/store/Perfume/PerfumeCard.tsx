"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export type Perfume = {
  id: number;
  name: string;
  price: number;
  images: [string, string]; // [default, hover]
};

export type PerfumeCardProps = {
  item: Perfume;
  priority?: boolean;
  onAddToCart?: (id: number) => void;
  onToggleWishlist?: (id: number, wishlisted: boolean) => void;
};

const formatCurrency = (n: number, currency: string = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(n);

export const PerfumeCard = React.memo(function PerfumeCard({
  item,
  priority,
  onAddToCart,
  onToggleWishlist,
}: PerfumeCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article
      className="
      group relative flex flex-col items-center justify-start
      rounded-none
      border border-white/20
      bg-white/10
      backdrop-blur-md
      shadow-[0_2px_12px_rgba(0,0,0,0.05)]
      transition
      hover:bg-white/20
      hover:backdrop-blur-lg
      p-6
    "
    >
      {/* subtle gradient overlay for glass effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-none" />

      {/* wishlist heart */}
      <button
        aria-label={`${
          wishlisted ? "Remove" : "Add"
        } ${item.name} to wishlist`}
        className="absolute right-3 top-3 z-10"
        onClick={() => {
          const next = !wishlisted;
          setWishlisted(next);
          onToggleWishlist?.(item.id, next);
        }}
      >
        <Heart
          className="h-4 w-4 text-gray-500"
          strokeWidth={1.5}
          fill={wishlisted ? "#f43f5e" : "transparent"}
        />
      </button>

      {/* image area */}
      <div className="relative w-full max-w-[280px] aspect-[4/3]">
        <Image
          src={item.images[0]}
          alt={`${item.name} bottle`}
          fill
          sizes="(max-width:640px) 90vw, (max-width:1024px) 40vw, 20vw"
          className="object-contain transition-opacity duration-300 ease-out group-hover:opacity-0"
          priority={priority}
        />
        <Image
          src={item.images[1]}
          alt={`${item.name} alternate view`}
          fill
          sizes="(max-width:640px) 90vw, (max-width:1024px) 40vw, 20vw"
          className="object-contain opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          loading={priority ? "eager" : "lazy"}
        />
      </div>

      {/* name */}
      <h2 className="mt-4 text-center text-[13px] font-semibold tracking-[-0.01em] text-black">
        {item.name}
      </h2>

      {/* actions row */}
      <div className="mt-4 grid w-full max-w-[280px] grid-cols-2 gap-3 z-10">
        <button
          type="button"
          aria-label={`${item.name} price`}
          className="h-10 border border-gray-300 text-[13px] font-medium bg-white/60 backdrop-blur-sm"
          disabled
        >
          {formatCurrency(item.price)}
        </button>
        <button
          type="button"
          aria-label={`Add ${item.name} to cart`}
          className="h-10 border border-gray-300 text-[13px] font-medium bg-white/60 backdrop-blur-sm hover:bg-white/80 active:bg-white"
          onClick={() => onAddToCart?.(item.id)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
});
