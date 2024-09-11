// src/components/GradientButton.tsx
"use client";
import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#00b3be] via-[#0088b0] to-[#008dbf] text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
