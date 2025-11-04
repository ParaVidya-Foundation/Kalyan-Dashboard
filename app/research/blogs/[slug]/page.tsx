import { Metadata } from "next";
import { notFound } from "next/navigation";

// Dummy blog data - Replace with API/CMS data
const blogPosts: Record<string, BlogPostData> = {
  "ketu-in-12th-house": {
    id: "1",
    slug: "ketu-in-12th-house",
    title: "Ketu in the 12th House: Effects, Remedies, and Career Insights",
    image: "/images/blog/ketu-12th-house.jpg",
    imageAlt: "Ketu in 12th House astrological representation with snake figure and number 12",
    date: new Date("2025-08-03"),
    author: "Astrology Expert",
    category: "Vedic Astrology",
    excerpt: "Explore the profound spiritual implications of Ketu in the 12th house, understanding its effects on isolation, spiritual liberation, and karmic patterns in Vedic astrology.",
    content: {
      featuredGraphic: {
        title: "KETU IN 12th HOUSE",
        image: "/images/blog/ketu-12th-house-graphic.jpg",
        alt: "Ketu deity with snake body in 12th house representation",
      },
      sections: [
        {
          heading: "Understanding the 12th House and Ketu",
          paragraphs: [
            "The 12th house in Vedic astrology is often referred to as the house of losses, isolation, spirituality, and liberation. When Ketu, the mystical planet of detachment and enlightenment, occupies this house, it creates a unique combination that deeply influences one's spiritual journey and worldly experiences.",
            "Ketu in the 12th house represents the culmination of karmic lessons from past lives. It signifies a person's journey toward spiritual liberation (moksha) and the detachment from material desires. This placement often indicates that the individual has spent many lifetimes accumulating spiritual wisdom and is now ready to transcend worldly attachments.",
            "The 12th house also governs hidden enemies, expenses, foreign lands, and the subconscious mind. With Ketu here, these areas of life become significant points of transformation. Individuals may experience unexpected expenses, but these often serve a higher purpose in their spiritual evolution.",
          ],
        },
        {
          heading: "1. Deep Spiritual Inclinations",
          paragraphs: [
            "Ketu in the 12th house creates an intense pull toward spirituality, meditation, and mysticism. The individual feels a natural affinity for practices that help them transcend the material world. This placement often indicates strong psychic abilities, intuitive gifts, and a deep understanding of the unseen realms.",
            "People with this placement are drawn to spiritual retreats, ashrams, and places of worship. They may have vivid dreams, experience astral travel, or feel connections to past lives. The spiritual hunger is so strong that material achievements often feel empty without a deeper meaning or purpose.",
            "Meditation comes naturally to these individuals, and they often find solace in solitude. The 12th house Ketu encourages introspection and self-reflection, leading to profound spiritual insights and a deeper understanding of life's mysteries.",
          ],
        },
        {
          heading: "Effects on Personal Life",
          paragraphs: [
            "The presence of Ketu in the 12th house significantly impacts personal relationships and living situations. These individuals may prefer solitude over social gatherings, finding peace in isolation rather than constant social interaction. They often seek partners who understand their need for spiritual growth and personal space.",
            "Sleep patterns may be unusual, with vivid dreams or even experiences of sleep paralysis. These individuals might feel more energized during late-night hours when the veil between worlds is thinner. The subconscious mind is highly active, often revealing insights through dreams.",
            "Foreign lands and cultures hold a special attraction for people with Ketu in the 12th house. They may feel more comfortable in foreign countries than in their homeland, experiencing a sense of belonging that they don't feel in their native place.",
          ],
        },
        {
          heading: "Career and Financial Implications",
          paragraphs: [
            "Career-wise, Ketu in the 12th house favors professions related to spirituality, healing, psychology, and research. These individuals excel as astrologers, spiritual counselors, healers, therapists, or researchers in metaphysical subjects. They may also find success in foreign trade, export-import business, or careers that require travel.",
            "Financially, unexpected expenses are common, but they often lead to spiritual growth. The individual learns to detach from material wealth, understanding that true abundance comes from spiritual richness. Charitable acts and helping others in need bring more satisfaction than accumulating personal wealth.",
            "Working in hospitals, rehabilitation centers, or charitable organizations aligns well with this placement. The 12th house governs service to others, and Ketu here amplifies the desire to help those who are suffering or in need.",
          ],
        },
        {
          heading: "Remedies and Mitigation",
          paragraphs: [
            "To harness the positive energies of Ketu in the 12th house, certain remedies can be beneficial. Regular meditation and chanting of Ketu mantras help balance the energies. The Ketu mantra 'Om Kem Ketave Namaha' can be chanted 108 times daily.",
            "Wearing a cat's eye gemstone (Lehsunia) can help mitigate negative effects and enhance spiritual growth. However, it should be worn only after consulting with an experienced astrologer. Fasting on Saturdays and offering prayers to Lord Ganesha and Ketu are also recommended.",
            "Practicing charity, especially donating to spiritual organizations or helping those in need, helps balance Ketu's energy. Meditation, yoga, and spending time in nature also support the positive expression of this placement.",
          ],
        },
      ],
    },
  },
  "how-to-use-ai-astrology": {
    id: "2",
    slug: "how-to-use-ai-astrology",
    title: "How to use AI Astrology ?",
    image: "/images/blog/ai-astrology.jpg",
    imageAlt: "AI Astrology guide showing how to use artificial intelligence in astrological predictions",
    date: new Date("2025-08-03"),
    author: "AI Astrology Expert",
    category: "AI Astrology",
    excerpt: "Discover the revolutionary ways artificial intelligence is transforming traditional astrological practices and predictions.",
    content: {
      featuredGraphic: {
        title: "AI ASTROLOGY",
        image: "/images/blog/ai-astrology.jpg",
        alt: "AI Astrology representation",
      },
      sections: [
        {
          heading: "Introduction to AI Astrology",
          paragraphs: [
            "Artificial Intelligence has revolutionized many fields, and astrology is no exception. AI astrology combines traditional astrological wisdom with modern computational power to provide more accurate and personalized predictions.",
            "AI algorithms can process vast amounts of astrological data, identify patterns, and generate insights that would take human astrologers years to discover. This technology enables us to analyze complex planetary positions, calculate precise charts, and deliver instant interpretations.",
          ],
        },
        {
          heading: "Benefits of AI-Powered Astrology",
          paragraphs: [
            "AI astrology offers several advantages over traditional methods. It can process multiple chart calculations simultaneously, provide consistent interpretations, and learn from vast databases of astrological knowledge.",
            "These systems can also personalize readings based on historical data and user feedback, continuously improving their accuracy over time.",
          ],
        },
      ],
    },
  },
  "best-way-to-use-ai-in-palmistry": {
    id: "3",
    slug: "best-way-to-use-ai-in-palmistry",
    title: "Best Way to use AI in Palmistry",
    image: "/images/blog/ai-palmistry.jpg",
    imageAlt: "AI palmistry application showing modern technology applied to traditional palm reading techniques",
    date: new Date("2025-08-03"),
    author: "Palmistry Master",
    category: "Palmistry",
    excerpt: "Learn how AI technology can enhance palmistry readings and provide more accurate insights into your future.",
    content: {
      featuredGraphic: {
        title: "AI PALMISTRY",
        image: "/images/blog/ai-palmistry.jpg",
        alt: "AI Palmistry representation",
      },
      sections: [
        {
          heading: "AI-Enhanced Palm Reading",
          paragraphs: [
            "Modern AI technology can analyze palm lines with incredible precision, identifying patterns and correlations that the human eye might miss. By using high-resolution image processing and machine learning algorithms, AI can provide detailed palmistry readings.",
          ],
        },
      ],
    },
  },
  "drawing-vastu-maps": {
    id: "4",
    slug: "drawing-vastu-maps",
    title: "Drawing Vastu Maps",
    image: "/images/blog/vastu-maps.jpg",
    imageAlt: "Intricate Vastu Shastra map showing traditional Indian architectural principles and energy flow",
    date: new Date("2025-08-03"),
    author: "Vastu Specialist",
    category: "Vastu",
    excerpt: "Master the art of creating accurate Vastu maps for optimal energy flow and harmony in your living spaces.",
    content: {
      featuredGraphic: {
        title: "VASTU MAPS",
        image: "/images/blog/vastu-maps.jpg",
        alt: "Vastu map representation",
      },
      sections: [
        {
          heading: "Understanding Vastu Principles",
          paragraphs: [
            "Vastu Shastra is an ancient Indian science of architecture and design. Creating accurate Vastu maps is essential for ensuring positive energy flow in any space.",
          ],
        },
      ],
    },
  },
};

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  date: Date | string;
  author?: string;
  category?: string;
  excerpt?: string;
  content: {
    featuredGraphic: {
      title: string;
      image: string;
      alt: string;
    };
    sections: Array<{
      heading: string;
      paragraphs: string[];
    }>;
  };
}

// Generate metadata for SEO
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Kalyan - Vedic Astrology`,
    description: post.excerpt || post.title,
    keywords: [
      "Vedic Astrology",
      post.category || "",
      "Ketu",
      "12th House",
      "Astrology",
      "Spiritual",
    ].filter(Boolean),
    authors: [{ name: post.author || "Kalyan Team" }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: typeof post.date === "string" ? post.date : post.date.toISOString(),
      authors: [post.author || "Kalyan Team"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.image],
    },
  };
}

// helper for simple lists
function getAllPosts() {
  return Object.values(blogPosts);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

  // Get recent posts (excluding current post)
  const recentPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-3 text-gray-600">{post.excerpt}</p>
        <div className="mt-8 space-y-6">
          {post.content.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-gray-900">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mt-2 text-gray-700">{p}</p>
              ))}
            </section>
          ))}
        </div>
        <hr className="my-10" />
        <h3 className="text-lg font-semibold text-gray-900">Related</h3>
        <ul className="mt-3 list-disc pl-5 text-gray-700">
          {relatedPosts.map((r) => (
            <li key={r.id}>
              <a href={`/research/blogs/${r.slug}`} className="text-blue-600 hover:underline">
                {r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// Generate static paths for better performance
// No static params to avoid prerendering of client-only code paths

