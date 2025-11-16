"use client";
import FloatingGems from "@/components/store/Gems/FloatingGems";
import HeroGemContact from "@/components/store/Gems/GuideGems";
import PreciousGems from "@/components/store/Gems/PreciousGems";
import SemiGems from "@/components/store/Gems/SemiGems";
import Image from "next/image";

export default function GemsPage() {
  return (
    <div>
<div className="relative w-full min-h-[700px] md:h-[860px] lg:h-[900px] xl:h-[940px] overflow-hidden">
  <Image
    src="/Gems/Gems-Banner.jpg"
    alt="Gems Banner"
    fill
    priority
    quality={100}
    sizes="100vw"
    className="absolute inset-0 w-full h-full object-cover object-center"
    loading="eager"
    style={{
      backgroundColor: "#FFFAE6",
      objectFit: "cover",
      objectPosition: "center",
    }}
    placeholder="blur"
    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4="
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== "/Gems/Gems-Banner.jpg") {
        target.src = "/Gems/Gems-Banner.jpg";
      }
    }}
  />
</div>


        <FloatingGems />
<PreciousGems />
<HeroGemContact
        imageSrc="/Gems/Gems-confused.webp"
        title="Confused About Which Gem to Choose?"
        subtitle="Not sure which gemstone to choose? Contact us for personalized recommendations."
        ctaText="Contact Us"
        ctaHref="/contact"
        height="h-[40vh]"
      />
<SemiGems />
    </div>
  );
}

