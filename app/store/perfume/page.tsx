import { Metadata } from "next";
export const dynamic = "force-dynamic";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Perfumes | Kalyan Store - Premium Fragrances",
  description: "Discover our collection of premium perfumes and fragrances, carefully curated for spiritual and aromatic experiences.",
  keywords: ["perfumes", "fragrances", "spiritual perfumes", "astrology", "Kalyan"],
};

export default function PerfumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Premium Perfumes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite collection of fragrances designed to enhance your spiritual journey and elevate your daily routine.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Fragrance {item}
              </h3>
              <p className="text-gray-600 mb-4">
                Aromatic blend designed for spiritual enhancement and personal well-being.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">₹{999 + item * 100}</span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
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

