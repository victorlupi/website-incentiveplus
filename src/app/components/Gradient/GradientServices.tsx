"use client";
import React from "react";

interface GradientServicesProps {
  children: React.ReactNode;
  className?: string;
}

const GradientServices: React.FC<GradientServicesProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold p-4 rounded-full border-2 border-white ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientServices;
