import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Burger: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={cn(
        "relative w-11 h-11 shrink-0 flex items-center justify-center rounded-full border border-gold",
        className
      )}
    >
      <div className="w-[18px] h-[12px] flex flex-col gap-[3px] relative">
        <span className=" block left-0 top-0 w-full h-[2px] bg-white rounded-sm"></span>
        <span className=" block left-0 center w-full h-[2px] bg-white rounded-sm"></span>
        <span className=" block left-0 bottom-0 w-full h-[2px] bg-white rounded-sm"></span>
      </div>
    </button>
  );
};
