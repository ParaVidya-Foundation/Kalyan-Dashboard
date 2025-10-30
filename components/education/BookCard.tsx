"use client";

import React from "react";
import Image from "next/image";
import BookButton from "./BookButton";

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  description?: string;
  onAskAI?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ image, title, author, description, onAskAI }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 text-center flex flex-col items-center justify-between h-full">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{author}</p>
          {description && (
            <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
          )}
        </div>

        <BookButton onClick={onAskAI} />
      </div>
    </div>
  );
};

export default BookCard;
