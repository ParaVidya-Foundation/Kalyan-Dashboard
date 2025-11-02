import { Metadata } from "next";
import { CircleDot } from "lucide-react";

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
            "Rudraksha Bracelet",
            "Gemstone Bracelet",
            "Lava Stone Bracelet",
            "Prayer Bead Bracelet",
            "Sacred Symbol Bracelet",
            "Astrological Bracelet",
          ].map((item, index) => (
            <div
              key={item}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <CircleDot className="w-16 h-16 text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item}</h3>
              <p className="text-gray-600 mb-4">
                Handcrafted bracelet designed for spiritual protection and positive energy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-rose-600">
                  ₹{799 + index * 150}
                </span>
                <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
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

