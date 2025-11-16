"use client";

import AccessoriesBestSeller from "@/components/store/Accessories/BestSeller";
import AccessoriesIdols from "@/components/store/Accessories/Idols";
import AccessoriesPoojaKit from "@/components/store/Accessories/PoojaKit";
import AccessoriesRashi from "@/components/store/Accessories/Rashi";
import BentoGrid from "@/components/ui/bits/MagicBento";
// Gems images as placeholders
const gemsImages = [
  "/Gems/Blue-Sapphire.webp",
  "/Gems/Yellow-Sapphire.webp",
  "/Gems/Ruby.webp",
  "/Gems/Green-Emerald.webp",
  "/Gems/Pearl.webp",
  "/Gems/Red-Coral.webp",
  "/Gems/Hessonite.webp",
  "/Gems/Cats-Eye.webp",
  "/Gems/White-Sapphire.webp",
  "/Gems/Amethyst.webp",
  "/Gems/Moonstone.webp",
  "/Gems/Peridot.webp",
];

export default function AccessoriesPage() {
  const myItems = [
    { id: "a", title: "Cosmic Mandala Collection", link: "/store/poster/Product?id=1", imageUrl: "/Poster/Bento/1.webp" },
    { id: "b", title: "Vedic Astrology Charts", link: "/store/poster/Product?id=2", imageUrl: "/Poster/Bento/2.webp" },
    { id: "c", title: "Planetary Alignment", link: "/store/poster/Product?id=3", imageUrl: "/Poster/Bento/3.webp" },
    { id: "d", title: "Sacred Geometry", link: "/store/poster/Product?id=4", imageUrl: "/Poster/Bento/4.webp" },
    { id: "e", title: "Zodiac Constellations", link: "/store/poster/Product?id=5", imageUrl: "/Poster/Bento/5.webp" },
    { id: "f", title: "Spiritual Symbols", link: "/store/poster/Product?id=6", imageUrl: "/Poster/Bento/6.webp" },
    { id: "g", title: "Mantra Art Collection", link: "/store/poster/Product?id=7", imageUrl: "/Poster/Bento/7.webp" },
    { id: "h", title: "Chakra Energy Maps", link: "/store/poster/Product?id=8", imageUrl: "/Poster/Bento/8.webp" },
  ];
  return (
    <div className="space-y-12 py-8">
      <AccessoriesBestSeller 
        items={[
          { id: 1, title: "Original Karungali Malai 108-Beads Ebony Wood with Govt. Certified", image: gemsImages[0], price: 791, oldPrice: 2090, showFrom: true, href: "/store/accessories/Product?id=1" },
          { id: 2, title: "Karungali Malai Silver Cap Plated Necklace with Certification", image: gemsImages[1], price: 891, oldPrice: 1999, href: "/store/accessories/Product?id=2" },
          { id: 3, title: "Karungali Malai Bracelet with Govt. Certification", image: gemsImages[2], price: 591, oldPrice: 1650, href: "/store/accessories/Product?id=3" },
          { id: 4, title: "Nine Gems Navratna Stones Mala", image: gemsImages[3], price: 2451, oldPrice: 3499, href: "/store/accessories/Product?id=4" },
          { id: 5, title: "7 Mukhi Premium Rudraksha", image: gemsImages[4], price: 991, oldPrice: 1999, href: "/store/accessories/Product?id=5" },
          { id: 6, title: "Divine Rudraksha Pendant Necklace", image: gemsImages[5], price: 891, oldPrice: 2590, href: "/store/accessories/Product?id=6" },
          { id: 7, title: "Black Tourmaline Bracelet (Kumbh Rashi) Aquarius", image: gemsImages[6], price: 1111, oldPrice: 1999, href: "/store/accessories/Product?id=7" },
          { id: 8, title: "Raw Pyrite Bracelet | For Wealth, Confidence & Protection", image: gemsImages[7], price: 690, oldPrice: 1499, href: "/store/accessories/Product?id=8" },
        ]} 
      />
      <AccessoriesIdols 
        items={[
          { id: 9, title: "Premium Ganesh Idol with Silver Finish", image: gemsImages[8], price: 1500, oldPrice: 2500, href: "/store/accessories/Product?id=9" },
          { id: 10, title: "Lakshmi Idol Brass Handcrafted", image: gemsImages[9], price: 2200, oldPrice: 3500, href: "/store/accessories/Product?id=10" },
          { id: 11, title: "Shiva Lingam Stone Idol", image: gemsImages[10], price: 1800, oldPrice: 2800, href: "/store/accessories/Product?id=11" },
          { id: 12, title: "Krishna Idol with Flute", image: gemsImages[11], price: 1200, oldPrice: 2000, href: "/store/accessories/Product?id=12" },
          { id: 13, title: "Durga Maa Idol Premium", image: gemsImages[0], price: 2500, oldPrice: 4000, href: "/store/accessories/Product?id=13" },
          { id: 14, title: "Hanuman Idol Brass Finish", image: gemsImages[1], price: 1600, oldPrice: 2600, href: "/store/accessories/Product?id=14" },
          { id: 15, title: "Buddha Idol Meditation Statue", image: gemsImages[2], price: 1900, oldPrice: 3000, href: "/store/accessories/Product?id=15" },
          { id: 16, title: "Saraswati Idol with Veena", image: gemsImages[3], price: 2100, oldPrice: 3200, href: "/store/accessories/Product?id=16" },
        ]} 
      />
      <BentoGrid items={myItems} /> 
      <AccessoriesPoojaKit 
        items={[
          { id: 17, title: "Complete Pooja Kit with Brass Items", image: gemsImages[4], price: 899, oldPrice: 1500, href: "/store/accessories/Product?id=17" },
          { id: 18, title: "Premium Pooja Thali Set", image: gemsImages[5], price: 1200, oldPrice: 2000, href: "/store/accessories/Product?id=18" },
          { id: 19, title: "Copper Pooja Items Set", image: gemsImages[6], price: 1500, oldPrice: 2500, href: "/store/accessories/Product?id=19" },
          { id: 20, title: "Silver Plated Pooja Kit", image: gemsImages[7], price: 1800, oldPrice: 3000, href: "/store/accessories/Product?id=20" },
          { id: 21, title: "Traditional Pooja Samagri Kit", image: gemsImages[8], price: 1100, oldPrice: 1800, href: "/store/accessories/Product?id=21" },
          { id: 22, title: "Luxury Pooja Set with Box", image: gemsImages[9], price: 2200, oldPrice: 3500, href: "/store/accessories/Product?id=22" },
          { id: 23, title: "Eco-Friendly Pooja Kit", image: gemsImages[10], price: 999, oldPrice: 1600, href: "/store/accessories/Product?id=23" },
          { id: 24, title: "Premium Brass Pooja Items", image: gemsImages[11], price: 1600, oldPrice: 2600, href: "/store/accessories/Product?id=24" },
        ]} 
      />
      <AccessoriesRashi 
        items={[
          { id: 25, title: "Aries Rashi Accessories Set", image: gemsImages[0], price: 2500, oldPrice: 4000, href: "/store/accessories/Product?id=25" },
          { id: 26, title: "Taurus Rashi Pendant Set", image: gemsImages[1], price: 2200, oldPrice: 3500, href: "/store/accessories/Product?id=26" },
          { id: 27, title: "Gemini Rashi Bracelet Collection", image: gemsImages[2], price: 1800, oldPrice: 2800, href: "/store/accessories/Product?id=27" },
          { id: 28, title: "Cancer Rashi Necklace Set", image: gemsImages[3], price: 2100, oldPrice: 3200, href: "/store/accessories/Product?id=28" },
          { id: 29, title: "Leo Rashi Premium Accessories", image: gemsImages[4], price: 2800, oldPrice: 4500, href: "/store/accessories/Product?id=29" },
          { id: 30, title: "Virgo Rashi Gemstone Set", image: gemsImages[5], price: 2400, oldPrice: 3800, href: "/store/accessories/Product?id=30" },
          { id: 31, title: "Libra Rashi Collection", image: gemsImages[6], price: 2000, oldPrice: 3200, href: "/store/accessories/Product?id=31" },
          { id: 32, title: "Scorpio Rashi Accessories", image: gemsImages[7], price: 2300, oldPrice: 3700, href: "/store/accessories/Product?id=32" },
        ]} 
      />
    </div>
  );
}

