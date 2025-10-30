import BookGrid from "@/components/education/BookGrid";


const books = [
  {
    id: 1,
    image: "/books/book1.png",
    title: "Pitra Tumhe Pukarte H",
    author: "Sunil Vashist",
    description: "Understand Pitra Dosha and perform remedies with ease.",
  },
  {
    id: 2,
    image: "/books/book2.png",
    title: "Pitra Tumhe Pukarte H",
    author: "Sunil Vashist",
    description: "Explore deep karmic and ancestral astrology.",
  },
  {
    id: 3,
    image: "/books/book3.png",
    title: "Jyotish: The Science of Soul & Karmic Mathematics",
    author: "Sunil Vashist",
    description: "Discover the mathematical essence of the soul and destiny.",
  },
];

export default function Page() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <BookGrid books={books} />
    </main>
  );
}
