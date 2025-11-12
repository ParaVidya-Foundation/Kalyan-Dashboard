import BookGrid from "@/components/education/Book/BookGrid";
import Chat from "@/components/education/Book/chat";
import TestSection from "@/components/education/test/testsection";

const books = [
    {
      id: 1,
      image: "/books/Pitra-Book.png",
      title: "Pitra Tumhe Pukarte H",
      author: "Sunil Vashist",
      description: "Understand Pitra Dosha and perform remedies with ease.",
    },
    {
      id: 2,
      image: "/books/Pitra-Book.png",
      title: "Pitra Tumhe Pukarte H",
      author: "Sunil Vashist",
      description: "Explore deep karmic and ancestral astrology.",
    },
    {
      id: 3,
      image: "/books/Jyotish-Book.png",
      title: "Jyotish: The Science of Soul & Karmic Mathematics",
      author: "Sunil Vashist",
      description: "Discover the mathematical essence of the soul and destiny.",
    },
  ];

export default function Page() {
  return (
    <main className="">
      <Chat />
      <BookGrid books={books} />
  
    </main>
  );
}

