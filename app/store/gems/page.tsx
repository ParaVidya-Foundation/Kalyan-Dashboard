import { Metadata } from "next";
import { Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Gemstones | Kalyan Store - Authentic Precious Stones",
  description: "Explore our collection of authentic gemstones and precious stones, each carefully selected for their astrological and spiritual properties.",
  keywords: ["gemstones", "precious stones", "astrological gems", "spiritual gems", "Kalyan"],
};

export default function GemsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <Gem className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Authentic Gemstones
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of precious gemstones, each certified and aligned with Vedic astrological principles.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            "Ruby (Manik)",
            "Pearl (Moti)",
            "Emerald (Panna)",
            "Blue Sapphire (Neelam)",
            "Yellow Sapphire (Pukhraj)",
            "Diamond (Heera)",
          ].map((gem, index) => (
            <div
              key={gem}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                <Gem className="w-16 h-16 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{gem}</h3>
              <p className="text-gray-600 mb-4">
                Authentic {gem.toLowerCase()} certified for astrological benefits and spiritual enhancement.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-600">
                  ₹{1999 + index * 500}
                </span>
                <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
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

