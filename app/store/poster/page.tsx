"use client";

import { useEffect } from "react";
import TestimonialSlider from "@/components/store/Poster/TestimonialSlider";
import ImageTrail from "@/components/ui/bits/ImageTrail";
import Iridescence from "@/components/ui/bits/Iridescence";
import PosterHero from "@/components/store/Poster/posterhero";
import PosterGrid from "@/components/store/Poster/postercard";

export default function PosterPage() {
  useEffect(() => {
    document.title = "Posters | Kalyan Store - Spiritual & Astrological Posters";
  }, []);


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
    <PosterHero posters={["/Poster/Posters/trail.webp", "/Poster/Posters/trail1.webp", "/Poster/Posters/trail2.webp"]} marqueeText="Posters" />
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

      <div
        className="trail-wrapper"
        style={{
          width: "95%",
          height: "620px",
          margin: "2rem auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: "3rem",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.08)",
          background: "linear-gradient(135deg, #fff8f3 0%, #f5ece5 50%, #fdf9f6 100%)",
        }}
      >
        {/* Background Iridescence */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.15}
            speed={0.6}
          />
        </div>

        {/* Image Trail */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <ImageTrail
            items={[
              "/Poster/Posters/trail.webp",
              "/Poster/Posters/trail1.webp",
              "/Poster/Posters/trail2.webp",
            ]}
            variant={1}
          />
        </div>

        {/* Text Overlay */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            top: "45%",
            transform: "translateY(-50%)",
            color: "#1a1a1a",
            textShadow: "0 2px 8px rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(8px)",
            background: "rgba(255, 255, 255, 0.35)",
            display: "inline-block",
            padding: "2rem 3rem",
            borderRadius: "1.5rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 700,
              fontFamily: "Playfair Display, serif",
              marginBottom: "0.5rem",
            }}
          >
            Poster Page
          </h1>
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 500,
              fontFamily: "Inter, sans-serif",
              color: "#444",
            }}
          >
            Image Trail – Where movement meets calm elegance.
          </h2>
        </div>
      </div>

      

    </>
  );
}
