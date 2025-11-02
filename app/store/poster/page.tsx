import { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Posters | Kalyan Store - Spiritual & Astrological Posters",
  description: "Browse our collection of spiritual posters, astrological charts, and decorative items for your sacred space.",
  keywords: ["posters", "spiritual posters", "astrology posters", "decorative items", "Kalyan"],
};

export default function PosterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <ImageIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Spiritual Posters
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your space with our collection of beautiful spiritual and astrological posters.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Spiritual Poster {item}
              </h3>
              <p className="text-gray-600 mb-4">
                Beautifully designed poster featuring spiritual symbols and astrological elements.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">₹{299 + item * 50}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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

