import { Metadata } from "next";
export const dynamic = "force-dynamic";
import { CircleDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bracelets | Kalyan Store - Spiritual & Astrological Bracelets",
  description: "Discover our collection of spiritual bracelets including Rudraksha, gemstone, and astrological bracelets.",
  keywords: ["bracelets", "rudraksha bracelet", "gemstone bracelet", "spiritual bracelets", "Kalyan"],
};

export default function BraceletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
            <CircleDot className="w-8 h-8 text-rose-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Spiritual Bracelets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beautifully crafted bracelets combining spiritual significance with elegant design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { name: "Rudraksha Bracelet", image: "/Gems/Ruby.webp", price: 799, description: "Authentic Rudraksha beads for spiritual protection and meditation." },
            { name: "Gemstone Bracelet", image: "/Gems/Blue-Sapphire.webp", price: 949, description: "Natural gemstone bracelet for astrological benefits and positive energy." },
            { name: "Lava Stone Bracelet", image: "/Gems/Green-Emerald.webp", price: 649, description: "Lava stone bracelet for grounding and emotional balance." },
            { name: "Prayer Bead Bracelet", image: "/Gems/Pearl.webp", price: 899, description: "Traditional prayer bead bracelet for meditation and mindfulness." },
            { name: "Sacred Symbol Bracelet", image: "/Gems/Yellow-Sapphire.webp", price: 1099, description: "Bracelet featuring sacred symbols for spiritual connection." },
            { name: "Astrological Bracelet", image: "/Gems/Red-Coral.webp", price: 1249, description: "Personalized astrological bracelet based on your birth chart." },
          ].map((item, index) => (
            <Link
              key={item.name}
              href={`/store/bracelet/Product?id=${index + 1}`}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 block group"
            >
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg mb-4 overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">{item.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-rose-600">
                  ₹{item.price}
                </span>
                <span className="px-4 py-2 bg-rose-600 text-white rounded-lg group-hover:bg-rose-700 transition-colors text-sm font-medium">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800">
            <strong>Note:</strong> Full product catalog and shopping functionality coming soon!
          </p>
        </div>
      </div>
    </main>
  );
}

