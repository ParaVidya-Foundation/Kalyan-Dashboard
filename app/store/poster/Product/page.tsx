"use client";

import PosterDetail from "@/components/store/Poster/PosterDetail";
import ProductCarousel from "@/components/store/ProductCarousel";
import PosterBuy from "@/components/store/Poster/PosterBuy";

export default function PosterProductPage() {
  return (
    <>
    <div className="grid gap-8 md:grid-cols-2">
    <ProductCarousel items={[{ kind: "image", src: "/Poster/Posters/pos1.webp", alt: "Poster 1" }, { kind: "image", src: "/Poster/Posters/pos2.webp", alt: "Poster 2" }, { kind: "image", src: "/Poster/Posters/pos3.webp", alt: "Poster 3" }, { kind: "image", src: "/Poster/Posters/pos4.webp", alt: "Poster 4" }, { kind: "image", src: "/Poster/Posters/pos5.webp", alt: "Poster 5" }, { kind: "image", src: "/Poster/Posters/pos6.webp", alt: "Poster 6" }]} aspect={1} />

    <PosterBuy
      title="Poster 1"
      sku="POSTER-1"
      price={{ mrp: 100, sale: 90 }}
      sizes={[{ label: "A4", value: "A4" }, { label: "A3", value: "A3" }, { label: "A2", value: "A2" }, { label: "12x18", value: "12x18" }, { label: "24x36", value: "24x36" }]}
      paperTypes={[{ label: "Glossy", value: "Glossy" }, { label: "Matte", value: "Matte" }, { label: "Textured", value: "Textured" }]}
      frameOptions={[{ label: "No frame", value: "No frame" }, { label: "Black frame", value: "Black frame" }, { label: "White frame", value: "White frame" }, { label: "Wood frame", value: "Wood frame" }]}
      finishOptions={[{ label: "Laminated", value: "Laminated" }, { label: "Non-laminated", value: "Non-laminated" }]}
      onAddToCart={(p) => console.log("Add to cart", p)}
      onBuyNow={(p) => console.log("Buy now", p)}
    />
  </div>
  <PosterDetail 
    specs={[{ label: "Size", value: "A4" }, { label: "Paper Type", value: "Glossy" }, { label: "Frame", value: "No frame" }, { label: "Finish", value: "Laminated" }]}
    description="This is a poster"
    benefits="This is a poster"
    badges={["High Quality", "Fade Resistant", "Museum Quality"]}
    className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 py-10"
  />
  </>
  );
}