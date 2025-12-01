import React from "react";
import { PerfumeCard, type Perfume } from "./PerfumeCard";

/** Your 8 products */
const perfumes: Perfume[] = [
  { id: 1, name: "Valentino",        price: 15.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
  { id: 2, name: "Chanel N5",        price: 22.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
  { id: 3, name: "Miss Dior",        price: 20.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
  { id: 4, name: "Coco Chanel Paris",price: 16.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
  { id: 5, name: "Gucci Bloom",      price: 19.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
  { id: 6, name: "Dior Homme",       price: 25.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
  { id: 7, name: "Prada Infusion",   price: 18.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
  { id: 8, name: "YSL Libre",        price: 21.0, images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"] },
];

export default function PerfumeGrid() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: perfumes.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: p.images,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: p.price.toFixed(2),
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  const handleAddToCart = (id: number) => {
    // Add to cart functionality
    if (process.env.NODE_ENV === "development") {
      console.log("add-to-cart", id);
    }
  };
  const handleToggleWishlist = (id: number, wishlisted: boolean) => {
    // Toggle wishlist functionality
    if (process.env.NODE_ENV === "development") {
      console.log("wishlist", id, wishlisted);
    }
  };

  return (
    <section className="w-full">
      <h1 className="sr-only">Perfume Collection</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* full-width brutalist + glassmorphism grid */}
      <ul
        className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        w-full
        border-t border-gray-300
        divide-x divide-y divide-gray-300
        bg-white/25
        backdrop-blur-md
        "
      >
        {perfumes.map((p, idx) => (
          <li key={p.id} className="p-8">
            <PerfumeCard
              item={p}
              priority={idx < 4}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
