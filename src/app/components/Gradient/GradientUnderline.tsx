import React from "react";

interface GradientUnderlineProps {
  children: React.ReactNode;
}

const GradientUnderline: React.FC<GradientUnderlineProps> = ({ children }) => {
  return (
    <span className="relative inline-block">
      {children}
      <span className="absolute rounded-sm inset-x-0 bottom-0 h-3 bg-gradient-to-r from-[#00c691] via-[#9ad948] to-[#7dc231] -z-10"></span>
    </span>
  );
};

export default GradientUnderline;
