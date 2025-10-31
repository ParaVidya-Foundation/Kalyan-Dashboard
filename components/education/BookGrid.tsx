"use client";

import React from "react";
import { useRouter } from "next/navigation";
import BookCard from "./BookCard";

interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  description?: string;
}

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
            description={book.description}
            onAskAI={() => router.push("/education/chat")}
          />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
