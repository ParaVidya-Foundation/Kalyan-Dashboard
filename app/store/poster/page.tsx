"use client";

import { useEffect } from "react";
import TestimonialSlider from "@/components/store/Poster/TestimonialSlider";
import PosterHero from "@/components/store/Poster/posterhero";
import PosterGrid from "@/components/store/Poster/postercard";
import Trailback from "@/components/store/Poster/Trailback";
import BentoGrid from "@/components/ui/bits/MagicBento";

export default function PosterPage() {
  useEffect(() => {
    document.title = "Posters | Kalyan Store - Spiritual & Astrological Posters";
  }, []);

  const myItems = [
    { id: "a", title: "Poster 1", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos1.webp" },
    { id: "b", title: "Poster 2", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos2.webp" },
    { id: "c", title: "Poster 3", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos3.webp" },
    { id: "d", title: "Poster 4", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos4.webp" },
    { id: "e", title: "Poster 5", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos5.webp" },
    { id: "f", title: "Poster 6", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos6.webp" },
    { id: "g", title: "Poster 7", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos7.webp" },
    { id: "h", title: "Poster 8", link: "/store/poster/product", imageUrl: "/Poster/Posters/pos8.webp" },
  ];

  const Single_Poster = [
    {
      id: 1,
      title: "GTR | Vector Style Cars #01",
      category: "Car Posters",
      price: 99,
      oldPrice: 199,
      images: [
        "/Poster/Posters/trail.webp",
        "/Poster/Posters/trail1.webp",
        "/Poster/Posters/trail2.webp",
      ],
    },
    {
      id: 2,
      title: "Retro Vibes #02",
      category: "Classic Posters",
      price: 149,
      oldPrice: 249,
      images: [
        "/Poster/Posters/trail.webp",
        "/Poster/Posters/trail1.webp",
      ],
    },
    // add more posters...
  ];

  const Collection_Poster = [
    {
      id: 1,
      title: "GTR | Vector Style Cars #01",
      category: "Car Posters",
      price: 99,
      oldPrice: 199,
      images: [
        "/Poster/Posters/trail.webp",
        "/Poster/Posters/trail1.webp",
        "/Poster/Posters/trail2.webp",
      ],
    },
    {
      id: 2,
      title: "Retro Vibes #02",
      category: "Classic Posters",
      price: 149,
      oldPrice: 249,
      images: [
        "/Poster/Posters/trail.webp",
        "/Poster/Posters/trail1.webp",
      ],
    },
    // add more posters...
  ];


  return (
    <>
    <PosterHero posters={["/Poster/Posters/pos1.webp", "/Poster/Posters/pos2.webp", "/Poster/Posters/pos3.webp", "/Poster/Posters/pos4.webp", "/Poster/Posters/pos5.webp","/Poster/Posters/pos6.webp"]} marqueeText="Posters" />
<div className="">
  <h1 className="text-4xl font-bold text-center">Collection Posters</h1>
    <PosterGrid posters={Collection_Poster} />
    </div>


          <div
        style={{
   
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TestimonialSlider
          videos={[
            "/Poster/Testimonials/testimonial1.mp4",
            "/Poster/Testimonials/testimonial2.mp4",
            "/Poster/Testimonials/testimonial3.mp4",
            "/Poster/Testimonials/testimonial4.mp4",
          ]}
          speed={60}
          videoWidth={280}
          videoHeight={480}
        />
      </div>


      <div className="">
        <h1 className="text-4xl font-bold text-center">Single Posters</h1>
        <PosterGrid posters={Single_Poster} />
      </div>

<BentoGrid items={myItems} /> 

<Trailback />
    </>
  );
}
