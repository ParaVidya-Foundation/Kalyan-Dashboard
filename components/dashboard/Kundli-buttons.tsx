// components/KundliButton.tsx
"use client";
import React from "react";

type KundliButtonProps = {
  color?: string;       // background color
  text: string;         // button text
  api?: () => void;     // API callback function
};

const KundliButton: React.FC<KundliButtonProps> = ({
  color = "#6b46c1", // default violet
  text,
  api,
}) => {
  const handleClick = () => {
    if (api) api();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-20 h-20 rounded-xl shadow-md transition-transform hover:scale-105"
        style={{ backgroundColor: color }}
      >
        {/* Square button (icon slot optional) */}
        <span className="text-white text-lg font-semibold">{text[0]}</span>
      </button>
      <p className="mt-2 text-sm font-medium text-gray-800">{text}</p>
    </div>
  );
};

export default KundliButton;
