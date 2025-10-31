"use client";


import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface EduSearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const EduSearchBox: React.FC<EduSearchBoxProps> = ({
  placeholder = "Choose Your Book",
  onSearch,
}) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) onSearch(value.trim());
    router.push("/education/chat");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group relative mx-auto flex w-full items-center rounded-2xl border border-blue-200/60 bg-white/80 p-2 shadow-[0_10px_30px_rgba(59,130,246,0.15)] backdrop-blur transition-shadow hover:shadow-[0_16px_40px_rgba(59,130,246,0.2)]"
      role="search"
    >
      <div className="ml-2 mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-200">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20 2H4a2 2 0 0 0-2 2v13.586A2 2 0 0 0 3.414 20H18l4 4V4a2 2 0 0 0-2-2Zm-2 9H6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2Zm-6 4H6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Z"/>
        </svg>
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="peer mr-3 w-full flex-1 bg-transparent px-1 py-3 text-base text-gray-800 placeholder-gray-400 outline-none sm:text-lg"
        aria-label="Choose your book"
      />

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:from-blue-600 hover:to-purple-700 sm:px-6 sm:py-3 sm:text-base"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        Start with AI
      </button>
    </form>
  );
};

export default EduSearchBox;
