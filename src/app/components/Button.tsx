"use client";

import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  type: "primary";

  ariaLabel: string;
  handleClick: () => void;
}

export default function Button({
  children,
  type,
  ariaLabel,
  handleClick,
}: Props) {
  return (
    <>
      <button
        className={classNames(
          "flex w-full items-center justify-center gap-2 rounded-full p-2 text-sm font-semibold transition-colors duration-300",
          {
            "bg-blue-950 text-white hover:bg-blue-600": type === "primary",
          }
        )}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
}
